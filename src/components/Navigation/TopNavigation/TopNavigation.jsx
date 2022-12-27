import IconComponent from './../../../Icons/index';
import React from 'react';
import styles from './topNavigation.module.scss';

const TopNavigation = ({ contactHeader }) => {
  return (
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
  );
};

export default TopNavigation;
