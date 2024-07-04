const initialState = {
  movies: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MOVIES':
      return {
        ...state,
        movies: action.payload
      };
    case 'ADD_MOVIE':
      return {
        ...state,
        movies: [...state.movies, action.payload]
      };
    case 'EDIT_MOVIE':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie._id === action.payload._id ? action.payload : movie
        )
      };
    case 'DELETE_MOVIE':
      return {
        ...state,
        movies: state.movies.filter(movie => movie._id !== action.payload)
      };
    case 'TOGGLE_WATCHED_STATUS':
    case 'RATE_MOVIE_SUCCESS':
    case 'REVIEW_MOVIE_SUCCESS':
      return {
        ...state,
        movies: state.movies.map(movie =>
          movie._id === action.payload._id ? action.payload : movie
        )
      };
    default:
      return state;
  }
};

export default movieReducer;
