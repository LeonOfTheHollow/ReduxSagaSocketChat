import React, { Component } from 'react';
import { connect } from 'react-redux';

class Sidebar extends Component {

  render() {
    return (
      <div className='sidebar'>
        {
          this.props.usersList.map(user => {
            return <li key={user.id}>{user.name}</li>
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    usersList: state.users
  }
}

export default connect(mapStateToProps)(Sidebar);