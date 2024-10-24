//import logo from './logo.svg';
import './App.css';
import React from 'react';
import Image from 'react-bootstrap/Image'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Image src= "todoLogo.png" alt="To-Do Image" fluid />
        Welcome to your To-Do App!
      </header>
    </div>
  );
}

export default App;
