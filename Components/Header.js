import React from 'react';
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <header className="header">
      <nav className="container">
        <h3>Contacts App</h3>
        <div className="nav-items">
          <Link to="/">All Contacts</Link>
          <Link to="/add-contacts">Add Contacts</Link>
          <Link to="/my-favorites">My Favorites</Link>
        </div>
      </nav>
    </header>
  );
}
