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

  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  useEffect(() => {
    if (movie) {
      setRating(movie.rating);
      setReview(movie.review);
    }
  }, [movie]);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this movie?')) {
      dispatch(deleteMovie(id));
      navigate('/');
    }
  };

  const handleRate = () => {
    dispatch(rateMovie(id, rating));
  };

  const handleReview = () => {
    dispatch(reviewMovie(id, review));
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

  return (
    <div className='details-container'>
      <div className='details-card'>
        <h2>{movie.title}</h2>
        <img src={`https://movie-watchlist-app-backend.onrender.com/${movie.imageUrl}`} alt={movie.title} />
        <p><b>Description:</b> &nbsp;&nbsp;{movie.description}</p>
        <p><b>Released:</b>&nbsp;&nbsp; {movie.releaseYear}</p>
        <p><b>Genre:</b>&nbsp;&nbsp; {movie.genre}</p>
        <p><b>Watched:</b>&nbsp;&nbsp; {movie.watched ? 'Yes' : 'No'}</p>
        <div>
          <label>Rating:</label>
          <input
            type='number'
            value={rating}
            onChange={e => setRating(e.target.value)}
            min='0'
            max='10'
          />
          <button onClick={handleRate}>Rate</button>
        </div>
        <div>
          <label>Review:</label>
          <textarea
            value={review}
            onChange={e => setReview(e.target.value)}
          />
          <button onClick={handleReview}>Save Review</button>
        </div>
        <button className="delete-btn" onClick={handleDelete}>Delete</button>
        <button>
        <Link to={`/edit/${movie._id}`} className="edit-btn">Edit Movie</Link>
        </button>
        
        <Link to='/' className="back-btn">Back to List</Link>
      </div>
    </div>
  );
};

export default MovieDetails;
