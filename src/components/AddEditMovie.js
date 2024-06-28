import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovie, editMovie } from '../actions/movieActions';
import { useParams, useNavigate } from 'react-router-dom';
import '../AddEditMovie.css';

const AddEditMovie = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector(state => id ? state.movies.movies.find(movie => movie.id === parseInt(id)) : null);

  const [title, setTitle] = useState(movie ? movie.title : '');
  const [description, setDescription] = useState(movie ? movie.description : '');
  const [releaseYear, setReleaseYear] = useState(movie ? movie.releaseYear : '');
  const [genre, setGenre] = useState(movie ? movie.genre : '');

  useEffect(() => {
    if (movie) {
      setTitle(movie.title);
      setDescription(movie.description);
      setReleaseYear(movie.releaseYear);
      setGenre(movie.genre);
    }
  }, [movie]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      title,
      description,
      releaseYear,
      genre,
      watched: movie ? movie.watched : false,
      rating: movie ? movie.rating : 0,
      review: movie ? movie.review : ''
    };

    if (id) {
      dispatch(editMovie(id, newMovie));
    } else {
      dispatch(addMovie(newMovie));
    }

    navigate('/');
  };

  return (
    <div className="add-edit-movie">
      <h1>{id ? 'Edit Movie' : 'Add Movie'}</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        <input type="number" placeholder="Release Year" value={releaseYear} onChange={(e) => setReleaseYear(e.target.value)} required />
        <input type="text" placeholder="Genre" value={genre} onChange={(e) => setGenre(e.target.value)} required />
        <button type="submit">{id ? 'Edit Movie' : 'Add Movie'}</button>
      </form>
    </div>
  );
};

export default AddEditMovie;
