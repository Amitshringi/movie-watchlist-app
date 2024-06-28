import React from 'react';
import { Link } from 'react-router-dom';
import '../Navbar.css';  // Ensure you have the corresponding CSS file

const Navbar = () => {
    return (
        <nav className="navbar">
            <h2>Movie Watchlist</h2>
            <ul className="nav-links">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/add" className="nav-link">Add Movie</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
