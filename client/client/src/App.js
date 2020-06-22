import React from 'react';
import './App.css';
import {TextEdit} from './TextEdit';
import './tachyons-indigo.css';

class App extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      filename: 'server/debug.js',
      filedata: ''
    }
  }

  render() {
    return (
      <div className="App">
        <TextEdit filename="projects/total-react/server/debug.js"></TextEdit>
      </div>
    );
  }
}

export default App;
