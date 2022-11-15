import React from 'react';
import Chevron from './chevron/Chevron';
import styles from './header.module.scss';
import Logo from './logo/Logo';
const Header = () => {
  return (
    <div>
      <ul className={styles.topNav}>
        <li>
          <span>1 (800) 431-2335 </span>
        </li>

        <li>
          IMG <span>1 (800) 431-2335 </span>
        </li>
      </ul>
      <nav className={styles.wrapper}>
        <Logo />

        <ul>
          <li>Services</li>
          <li>Products</li>
          <li>Markets</li>
          <li>Support</li>
          <li>
            Company
            <Chevron />
          </li>
        </ul>

        <button className={styles.button}>Contact Us</button>
      </nav>
    </div>
  );
};

export default Header;
