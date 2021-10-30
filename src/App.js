import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainComponent from './components/MainComponent';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <MainComponent />
      </div>
    </Router>
  );
}

export default App;
