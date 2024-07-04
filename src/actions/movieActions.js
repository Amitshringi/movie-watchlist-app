import axios from 'axios';

export const BASE_URL= "https://movie-watchlist-app-backend.onrender.com";

export const fetchMovies = () => async dispatch => {
  try {
    const res = await axios.get(`${BASE_URL}/movies`);
    dispatch({ type: 'FETCH_MOVIES', payload: res.data });
  } catch (err) {
    console.error(err);
  }
};

export const addMovie = (formData, history) => async dispatch => {
  try {
    const res = await axios.post(`${BASE_URL}/movies`, formData);
    dispatch({ type: 'ADD_MOVIE', payload: res.data });
    history.push('/');
  } catch (err) {
    console.error(err);
  }
};

export const editMovie = (id, formData, history) => async dispatch => {
  try {
    const res = await axios.patch(`${BASE_URL}/movies/${id}`, formData);
    dispatch({ type: 'EDIT_MOVIE', payload: res.data });
    history.push('/');
  } catch (err) {
    console.error(err);
  }
};

export const deleteMovie = id => async dispatch => {
  try {
    await axios.delete(`${BASE_URL}/movies/${id}`);
    dispatch({ type: 'DELETE_MOVIE', payload: id });
  } catch (err) {
    console.error(err);
  }
};

export const toggleWatchedStatus = id => async dispatch => {
  try {
    const response = await axios.patch(`${BASE_URL}/movies/${id}/toggleWatched`);
    dispatch({ type: 'TOGGLE_WATCHED_STATUS', payload: response.data });
  } catch (err) {
    console.error(err);
  }
};

export const rateMovie = (id, rating) => async dispatch => {
  try {
    const response = await axios.patch(`${BASE_URL}/movies/${id}/rate`, { rating });
    dispatch({ type: 'RATE_MOVIE_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};

export const reviewMovie = (id, review) => async dispatch => {
  try {
    const response = await axios.patch(`${BASE_URL}/movies/${id}/review`, { review });
    dispatch({ type: 'REVIEW_MOVIE_SUCCESS', payload: response.data });
  } catch (error) {
    console.error(error);
  }
};
