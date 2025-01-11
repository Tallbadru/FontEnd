import React from 'react';
import { FaSignOutAlt } from 'react-icons/fa';  // Importing the logout icon

const Header = () => {
  const handleLogout = () => {
    // Add your logout logic here
    alert("Logged out successfully!");
  };

  return (
    <div className="header">
      <h1 className="header__title">Welcome to Babu Rental House Dashboard</h1>
      <button className="header__logout" onClick={handleLogout}>
        <FaSignOutAlt className="header__logout-icon" />
        Logout
      </button>
    </div>
  );
}

export default Header;
