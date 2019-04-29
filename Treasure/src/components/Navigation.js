import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => (
  <div id="myNav" className="overlay">
    <a className="closebtn" onClick={() => props.closeNav()}>&times;</a>
    <div className="overlay-content">
      <Link to="/" onClick={() => props.closeNav()}>Home</Link>
      <Link to="/treasure" onClick={() => props.closeNav()}>Treasure</Link>
      <a href="">Antiques</a>
      <a href="">Tin toys</a>
      <a href="">Glass</a>
    </div>
  </div>
);

export default Navigation;
