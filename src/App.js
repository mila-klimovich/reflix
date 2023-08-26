import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Catalog from './components/Catalog';
import calls from './apiRequests';
import NavBar from './components/NavBar';
import Home from './components/Home';
import MovieDetails from './components/MovieDetails';

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <NavBar />
                <Routes>
                    <Route
                        path="/catalog/user/:userName"
                        element={
                            <Catalog
                                title="Trending movies"
                                callUrl={calls.getTrending}
                            />
                        }
                    />
                    <Route
                        path="/catalog"
                        element={
                            <Catalog
                                title="Trending movies"
                                callUrl={calls.getTrending}
                            />
                        }
                    />
                    <Route path="/" element={<Home />} />
                    <Route path="/movie/:movieId" element={<MovieDetails />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
