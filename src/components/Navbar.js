import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="Navbar">
      <h1>Math Magic</h1>
      <ul className="Navbar-ul">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Calculator">Calculator</Link></li>
        <li><Link to="/Quotes">Quotes</Link></li>
      </ul>
    </div>
  );
}

export default Navbar;
