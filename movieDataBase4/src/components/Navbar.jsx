import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode }) => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">🎬 HeavyD Movies</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/movies" className="hover:text-gray-300">Movies</Link>
        <Link to="/series" className="hover:text-gray-300">Series</Link>
        <Link to="/browse" className="hover:text-gray-300">Browse</Link>
        <Link to="/favorites" className="hover:text-gray-300">Favorites</Link>
      </div>
      <button
        onClick={toggleDarkMode}
        className="bg-gray-700 px-4 py-2 rounded-lg hover:bg-gray-600"
      >
        Toggle Mode
      </button>
    </nav>
  );
};

export default Navbar;
