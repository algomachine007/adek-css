import React from 'react';

const Header = ({ topNavigation, children }) => {
  return (
    <header>
      {topNavigation}
      {children}
    </header>
  );
};

export default Header;
