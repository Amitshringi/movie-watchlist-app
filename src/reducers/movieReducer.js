const initialState = {
    movies: []
  };
  
  const movieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_MOVIES_SUCCESS':
        return { ...state, movies: action.payload };
      case 'ADD_MOVIE':
        return { ...state, movies: [...state.movies, action.payload] };
      case 'EDIT_MOVIE':
        return {
          ...state,
          movies: state.movies.map(movie => movie.id === action.payload.id ? action.payload : movie)
        };
      case 'DELETE_MOVIE':
        return { ...state, movies: state.movies.filter(movie => movie.id !== action.payload) };
      case 'TOGGLE_WATCHED_STATUS':
        return {
          ...state,
          movies: state.movies.map(movie => movie.id === action.payload.id ? action.payload : movie)
        };
      case 'RATE_MOVIE':
        return {
          ...state,
          movies: state.movies.map(movie => movie.id === action.payload.id ? action.payload : movie)
        };
      case 'REVIEW_MOVIE':
        return {
          ...state,
          movies: state.movies.map(movie => movie.id === action.payload.id ? action.payload : movie)
        };
      default:
        return state;
    }
  };
  
  export default movieReducer;
  