import { combineReducers } from 'redux';
import messages from './messages';
import users from './users';

const combinedReducer = combineReducers({
  messages,
  users
});

export default combinedReducer;