import React from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1>Coffee Shop & Bakery</h1>
        <nav>
          <ul className="navbar">
            <li><Link to="/" className="nav-link">Home</Link></li>
            <li><Link to="/menu" className="nav-link">Menu</Link></li>
            <li><Link to="/specials" className="nav-link">Specials</Link></li>
            <li><Link to="/contact" className="nav-link">Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
