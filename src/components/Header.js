import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Ensure you have Header.css for styling

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
