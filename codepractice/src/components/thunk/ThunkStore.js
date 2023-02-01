import { configureStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const thunkStore = configureStore(
  rootReducer,
  applyMiddleware(thunk)
);