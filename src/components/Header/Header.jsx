import React from 'react';
import IconComponent from '../../Icons';

import styles from './header.module.scss';

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
        <IconComponent name='logo' />
        <ul>
          <li>
            <span>
              <p> Services </p>

              <IconComponent name='chevron' />
            </span>
          </li>{' '}
          <li>
            <span>
              <p> Products </p>
              <IconComponent name='chevron' />
            </span>
          </li>{' '}
          <li>
            <span>
              <p> Markets </p>
            </span>
          </li>{' '}
          <li>
            <span>
              <p> Support </p>
            </span>
          </li>
          <li>
            <span>
              <p> Company </p>
              <IconComponent name='chevron' />
            </span>
          </li>
        </ul>

        <button className={styles.button}>Contact Us</button>
      </nav>
    </div>
  );
};

export default Header;
