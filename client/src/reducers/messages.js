import * as types from '../constants/ActionTypes';

const messages = (state = [], action) => {
  switch (action.type) {
    case types.ADD_MESSAGE:
    case types.RECEIVE_MESSAGE:
      console.log("The reducer received this action: ", action);
      return state.concat([
        {
          msg: action.msg,
          author: action.author,
          id: action.id
        }
      ])
    default:
      return state;
  }
}

export default messages;