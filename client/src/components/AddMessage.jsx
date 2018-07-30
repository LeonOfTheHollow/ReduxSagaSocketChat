import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMessage } from '../actions';

class AddMessage extends Component {
  state = {
    message: ''
  };

  handleMessageChange = (event) => {
    this.setState({ message: event.target.value });
  }

  handleMessageSubmit = (event) => {
    event.preventDefault();
    this.props.addMessage(this.state.message, 'Me');
  };

  render() {
    return (
      <form className='new-message' onSubmit={this.handleMessageSubmit}>
        <input
          type="text"
          placeholder="Type your message here"
          value={this.state.message}
          onChange={this.handleMessageChange}
        />
        <button type="submit">Send!</button>
      </form>
    )
  }
}

const mapStateToProps = (state) => {
  return state;
}

export default connect(mapStateToProps, { addMessage })(AddMessage);