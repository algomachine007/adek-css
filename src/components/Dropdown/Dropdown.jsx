import React from 'react';
import styles from '../Header/header.module.scss';

const Dropdown = ({ link, url }) => (
  <div className={styles.dropdown}>
    <ul>
      <li>
        <a href={url}>{link}</a>
      </li>
    </ul>
  </div>
);

export default Dropdown;
