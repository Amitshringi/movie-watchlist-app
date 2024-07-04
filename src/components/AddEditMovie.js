import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie } from '../actions/movieActions';
import { useParams, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import '../AddEditMovie.css';

const AddEditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector(state => id ? state.movies.movies.find(movie => movie._id === id) : null);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [releaseYear, setReleaseYear] = useState('');
  const [genre, setGenre] = useState('');
  const [watched, setWatched] = useState(false);
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');
  const [image, setImage] = useState(null);

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
      setWatched(movie.watched);
      setRating(movie.rating);
      setReview(movie.review);
      setImage(movie.image); // assuming you have an image field in your movie object
    }
  }, [movie]);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: acceptedFiles => {
      setImage(acceptedFiles[0]);
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('releaseYear', releaseYear);
    formData.append('genre', genre);
    formData.append('watched', watched);
    formData.append('rating', rating);
    formData.append('review', review);
    if (image) {
      formData.append('image', image);
    }

    if (id) {
      await dispatch(editMovie(id, formData));
    } else {
      await dispatch(addMovie(formData));
    }

    navigate('/');
  };

  return (
    <div className="add-edit-movie">
      <h1>{id ? 'Edit Movie' : 'Add Movie'}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Release Year"
          value={releaseYear}
          onChange={(e) => setReleaseYear(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          required
        />
        <div {...getRootProps()}>
          <input {...getInputProps()} />
          <p>Drag 'n' drop an image here, or click to select one</p>
        </div>
        {image && <p>Selected image: {image.name}</p>}
        <button type="submit">{id ? 'Edit Movie' : 'Add Movie'}</button>
      </form>
    </div>
  );
};

export default AddEditMovie;
