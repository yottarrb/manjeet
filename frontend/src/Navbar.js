// Navbar.js
import React from 'react';
import './Navbar.css'; // Import your CSS file for styling
import logo from './logo.png'; // Import your logo image


function Navbar({ onContactClick, onHomeClick, onLoginClick }) {
    
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <ul className="nav-list">
      <li className="nav-item"><a href="#" onClick={onHomeClick}>Home</a></li>
      <li className="nav-item"><a href="#" onClick={onLoginClick}>Login</a></li> {/* Add onClick handler for Login */}
        <li className="nav-item"><a href="#" onClick={onContactClick}>Contact</a></li>
      </ul>

      
    </nav>
  );
}

export default Navbar;
