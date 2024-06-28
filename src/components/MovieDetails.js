import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { deleteMovie, rateMovie, reviewMovie } from '../actions/movieActions';
import '../MovieDetails.css';
const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const movie = useSelector(state => state.movies.movies.find(m => m._id === id));

  const [rating, setRating] = useState(movie ? movie.rating : 0);
  const [review, setReview] = useState(movie ? movie.review : '');

  useEffect(() => {
    if (!movie) {
      console.log(`Movie with id ${id} not found in state`);
      navigate('/'); // Redirect to home page if movie with specified id not found
    }
  }, [movie, navigate]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
      navigate('/');
    }
  };

  const handleRatingChange = (e) => {
    const newRating = parseInt(e.target.value);
    setRating(newRating);
    dispatch(rateMovie(id, newRating));
  };

  const handleReviewChange = (e) => {
    const newReview = e.target.value;
    setReview(newReview);
    dispatch(reviewMovie(id, newReview));
  };

  if (!movie) {
    return <p>Movie not found!</p>;
  }

  return (
    <div className="movie-details">
      <h2>{movie.title}</h2>
      <p>{movie.description}</p>
      <p>Release Year: {movie.releaseYear}</p>
      <p>Genre: {movie.genre}</p>
      <p>Watched: {movie.watched ? 'Yes' : 'No'}</p>
      <div>
        <label>
          Rating:
          <select value={rating} onChange={handleRatingChange}>
            {[1, 2, 3, 4, 5].map(num => (
              <option key={num} value={num}>{num}</option>
            ))}
          </select>
        </label>
      </div>
      <div>
        <label>
          Review:
          <textarea value={review} onChange={handleReviewChange} />
        </label>
      </div>
      <button onClick={handleDelete}>Delete</button>
      <Link to={`/edit/${movie._id}`}>Edit</Link>
    </div>
  );
};

export default MovieDetails;
