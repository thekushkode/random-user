import React from 'react';
import './App.css';
import RandomUser from './components/RandomUser';
// import { Dropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sketchier Tinder</h1>
      </header>
      <main>
        <div className="Users">
          <RandomUser></RandomUser>
          <RandomUser></RandomUser>
          <RandomUser></RandomUser>
        </div>
        <div className="Users">
          <RandomUser></RandomUser>
          <RandomUser></RandomUser>
          <RandomUser></RandomUser>
        </div>
        <div className="Users">
          <RandomUser></RandomUser>
          <RandomUser></RandomUser>
          <RandomUser></RandomUser>
        </div>
      </main>
    </div>
  );
}

export default App;
