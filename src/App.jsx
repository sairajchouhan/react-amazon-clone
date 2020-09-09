import React from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />
      {/* Home */}
      <Home />
      {/* header */}
    </div>
  );
}

export default App;
