import React from 'react';
import { contactHeader } from '../../data';
import IconComponent from '../../Icons';

import styles from './header.module.scss';

const Header = () => {
  return (
    <div>
      <ul className={styles.topNav}>
        {contactHeader.map(({ title, icon }, index) => (
          <li key={`contact-${index}`}>
            <span>
              <IconComponent name={icon} />
              <a href={`tel:${title}`}>{title}</a>
            </span>
          </li>
        ))}
      </ul>
      <nav className={styles.wrapper}>
        <IconComponent name='logo' />
        <ul>
          <li>
            <span>
              <p> Services </p>
              <IconComponent name='chevron' />
            </span>
          </li>
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
