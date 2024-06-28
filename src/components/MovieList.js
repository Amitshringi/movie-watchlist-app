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

  const handleToggleWatched = (id, watched) => {
    dispatch(toggleWatchedStatus(id, watched));
  };

  if (!movies || movies.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movie-list">
      {movies.map(movie => (
        <div key={movie._id} className="movie-item">
          <h3> Title: {movie.title}</h3>
          <p>Description: {movie.description}</p>
          <button onClick={() => handleToggleWatched(movie._id, !movie.watched)}
            className={movie.watched? "Unwatched":"Watched"}>
            {movie.watched ? ' Unwatched' : ' Watched'}
          </button>
          <Link to={`/details/${movie._id}`} className='detail-btn'>Details</Link>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
