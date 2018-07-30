import React, { Component } from 'react';
import { connect } from 'react-redux';
import Message from './Message';

class MessagesList extends Component {

  render() {
    console.log("Rendering message list, it has these messages: ", this.props.messagesList)
    return (
      <div className="messages-list">
        {this.props.messagesList.map((msg, i) => {
          return <Message key={msg.id} {...msg} />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log("Mapped these props onto state: ", state.messages);
  return {
    messagesList: state.messages
  };
};

export default connect(mapStateToProps)(MessagesList);