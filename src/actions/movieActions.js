import axios from 'axios';

const API_URL = 'http://localhost:5000/movies';

export const fetchMovies = () => async (dispatch) => {
  dispatch({ type: 'FETCH_MOVIES_REQUEST' });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: 'FETCH_MOVIES_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_MOVIES_FAILURE', payload: error.message });
  }
};

export const addMovie = (movie) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL, movie);
    dispatch({ type: 'ADD_MOVIE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'ADD_MOVIE_FAILURE', payload: error.message });
  }
};

export const editMovie = (id, movie) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, movie);
    dispatch({ type: 'EDIT_MOVIE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'EDIT_MOVIE_FAILURE', payload: error.message });
  }
};

export const deleteMovie = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: 'DELETE_MOVIE_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_MOVIE_FAILURE', payload: error.message });
  }
};

export const toggleWatchedStatus = (id, watched) => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}`, { watched });
    dispatch({ type: 'TOGGLE_WATCHED_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'TOGGLE_WATCHED_FAILURE', payload: error.message });
  }
};

export const rateMovie = (id, rating) => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}/rate`, { rating });
    dispatch({ type: 'RATE_MOVIE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'RATE_MOVIE_FAILURE', payload: error.message });
  }
};

export const reviewMovie = (id, review) => async (dispatch) => {
  try {
    const response = await axios.patch(`${API_URL}/${id}/review`, { review });
    dispatch({ type: 'REVIEW_MOVIE_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'REVIEW_MOVIE_FAILURE', payload: error.message });
  }
};
