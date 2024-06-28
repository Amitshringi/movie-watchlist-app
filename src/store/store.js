import { createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Fix: Correctly import thunk
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers'; // Fix: Update import to root reducer
// import movieReducer from '../reducers/movieReducer';

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer, // Fix: Use root reducer
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
