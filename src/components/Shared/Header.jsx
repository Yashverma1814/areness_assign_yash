import React from 'react';
import './Header.css';

const Header = ({ onMenuToggle }) => {
  return (
    <div className="dashboard-header">
      <div className="menu-toggle" onClick={onMenuToggle}>
        ☰ {/* Hamburger Icon */}
      </div>
      <h1>Dashboard</h1>
      <div className="header-icons">
        <img src="notification-icon.png" alt="Notifications" />
        <img src="settings-icon.png" alt="Settings" />
      </div>
    </div>
  );
};

export default Header;
