import React from 'react';

const Message = (props) => {
  return (
    <p>
      <i>{props.author}</i>: {props.msg}
    </p>
  )
}

export default Message;