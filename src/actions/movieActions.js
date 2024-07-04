import axios from 'axios';

export const fetchMovies = () => async dispatch => {
  try {
    const res = await axios.get('http://localhost:5000/movies');
    dispatch({ type: 'FETCH_MOVIES', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const addMovie = (formData, history) => async dispatch => {
  try {
    const res = await axios.post('http://localhost:5000/movies', formData);
    dispatch({ type: 'ADD_MOVIE', payload: res.data });
    history.push('/');
  } catch (err) {
    console.error(err);
  }
};

export const editMovie = (id, formData, history) => async dispatch => {
  try {
    const res = await axios.patch(`http://localhost:5000/movies/${id}`, formData);
    dispatch({ type: 'EDIT_MOVIE', payload: res.data });
    history.push('/');
  } catch (err) {
    console.error(err);
  }
};

export const deleteMovie = id => async dispatch => {
  try {
    await axios.delete(`http://localhost:5000/movies/${id}`);
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  } catch (err) {
    console.error(err);
  }
};

export const toggleWatchedStatus = id => async dispatch => {
  try {
    const response = await axios.patch(`http://localhost:5000/movies/${id}/toggleWatched`);
    dispatch({ type: 'TOGGLE_WATCHED_STATUS', payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const rateMovie = (id, rating) => async dispatch => {
  try {
    const response = await axios.patch(`http://localhost:5000/movies/${id}/rate`, { rating });
    dispatch({ type: 'RATE_MOVIE_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const reviewMovie = (id, review) => async dispatch => {
  try {
    const response = await axios.patch(`http://localhost:5000/movies/${id}/review`, { review });
    dispatch({ type: 'REVIEW_MOVIE_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
