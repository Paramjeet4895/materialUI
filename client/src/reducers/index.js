import { combineReducers } from 'redux';
import userReducer from './userReducer';
import authReducer from './authReducer';
import itemReducer from './itemReducer';
import productReducer from './productReducer';

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  item: itemReducer,
  product: productReducer
});

export default reducers;