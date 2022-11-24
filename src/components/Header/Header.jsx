import React from 'react';
import { contactHeader, headerLinks } from '../../data';
import IconComponent from '../../Icons';
import Dropdown from '../Dropdown/Dropdown';

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
          {headerLinks.map(({ title, icon, subLinks }, index) => (
            <li>
              <span>
                <p> {title} </p>
                <IconComponent name={icon} />
              </span>
              {subLinks &&
                subLinks.map(({ title, href }, index) => (
                  <Dropdown link={title} url={href} />
                ))}
            </li>
          ))}
          <li>
            <span>
              <p> Products </p>
              <IconComponent name='chevron' />
            </span>
            <Dropdown />
          </li>
        </ul>

        <button className={styles.button}>Contact Us</button>
      </nav>
    </div>
  );
};

export default Header;
