import React from 'react';
import './App.css';

function Welcome (props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="App">
      <Welcome name="jova" />
    </div>
  );
}

export default App;
