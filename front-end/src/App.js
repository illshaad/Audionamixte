import React from 'react';
import Upload from './components/Upload';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Upload your music</h1>
        <Upload/>
      </div>
    )
  }
 
};

export default App;
