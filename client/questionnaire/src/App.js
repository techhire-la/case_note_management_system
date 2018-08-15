import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>This is the app</p>
        <button className="ui primary button">
          Submit
        </button>
        <Button size='small' color='green'>
          <Icon name='download' />
          Download
        </Button>
      </div>
    );
  }
}

export default App;
