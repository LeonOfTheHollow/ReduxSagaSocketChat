import * as types from '../constants/ActionTypes';

let nextPostId = 0;
let nextUserId = 0;

export const addMessage = (msg, author) => {
  return {
    type: types.ADD_MESSAGE,
    id: nextPostId++,
    msg,
    author
  }
}

export const addUser = (name) => {
  return {
    type: types.ADD_USER,
    id: nextUserId++,
    name
  }
}

export const receiveMessage = (msg, author) => {
  return {
    type: types.RECEIVE_MESSAGE,
    id: nextPostId++,
    msg,
    author
  }
}


export const populateUsersList = (users) => {
  return {
    type: types.USERS_LIST,
    users
  }
}
