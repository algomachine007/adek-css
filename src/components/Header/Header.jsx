import React from 'react';
import styles from './header.module.scss';
import Logo from './logo/Logo';
const Header = () => {
  return (
    <nav className={styles.wrapper}>
      <Logo />
    </nav>
  );
};

export default Header;
