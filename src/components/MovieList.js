import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMovies, toggleWatchedStatus } from '../actions/movieActions';
import { Link } from 'react-router-dom';
import '../MovieList.css';

const MovieList = () => {
  const dispatch = useDispatch();
  const movies = useSelector(state => state.movies.movies);

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const handleToggleWatched = (id) => {
    dispatch(toggleWatchedStatus(id));
  };

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="main">
      {movies.map(movie => (
        <div className="movie-card" key={movie._id}>
          {movie.imageUrl && (
            <img src={`https://movie-watchlist-app-backend.onrender.com/${movie.imageUrl}`} alt={movie.title} />
          )}
          <div className="movie-details">
            <h3 className='title'>{movie.title}</h3>
            <p>{movie.description}</p>
            <button
              onClick={() => handleToggleWatched(movie._id)}
              className={movie.watched ? 'unwatched' : 'watched'}
            >
              {movie.watched ? 'Unwatched' : 'Watched'}
            </button>
            <button className='detail-btn'>
              <Link to={`/details/${movie._id}`}>Details</Link>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
