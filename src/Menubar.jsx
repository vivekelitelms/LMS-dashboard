import React from 'react';
import './MenuBar.css'; // Importing the CSS file

const Menu = () => {
  return (
    <div className="menu-barr">
      <div className="menu-container">
        {/* Left side menu items with padding */}
        <div className="menu-items">
          <div className="menu-item" onClick={() => alert('Super Admin clicked')}>Super Admin</div>
          <div className="menu-item" onClick={() => alert('Admin clicked')}>Admin</div>
          <div className="menu-item" onClick={() => alert('Student clicked')}>Student</div>

          <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
          />
          <div className="search-button" onClick={() => alert('Search clicked')}>Search</div>
        </div>
        </div>

        {/* Right side search bar */}
        
      </div>
    </div>
  );
};

export default Menu;
