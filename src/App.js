import React from 'react';
import './App.css';
import RandomUser from './components/RandomUser';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Random D-Bags</h1>
      </header>
      <main>
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
