import React from 'react';
import './searchBox.css';

export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="text"
    placeholder={ placeholder }
    onChange={handleChange}
  />
)
