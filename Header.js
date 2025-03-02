import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <input className="header__search" type="text" placeholder="Search" />
    </div>
  );
};

export default Header;
