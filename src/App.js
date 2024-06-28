import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import MovieList from './components/MovieList';
import AddEditMovie from './components/AddEditMovie';
import MovieDetails from './components/MovieDetails';

const App = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<MovieList />} />
                <Route path="/add" element={<AddEditMovie />} />
                <Route path="/edit/:id" element={<AddEditMovie />} />
                <Route exact path="/details/:id" element={<MovieDetails/>} />
            </Routes>
        </div>
    );
};

export default App;
