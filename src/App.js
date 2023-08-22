import React from 'react';
import './App.css';
import Catalog from './components/Catalog';
import calls from './apiRequests';
import MovieDetails from './components/MovieDetails';
import NavBar from './components/NavBar';

function App() {
  return (
      <div className="app">
          <NavBar />
          <MovieDetails callUrl={calls.getTrending} />
          <Catalog title="Trending movies" callUrl={calls.getTrending} />
      </div>
  );
}

export default App;
