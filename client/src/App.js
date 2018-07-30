import React, { Component } from 'react';
import './App.css';

import AddMessage from './components/AddMessage';
import MessagesList from './components/MessagesList';
import Sidebar from './components/Sidebar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <div className="main">
          <MessagesList />
          <AddMessage />
        </div> 
      </div>
    );
  }
}

export default App;
