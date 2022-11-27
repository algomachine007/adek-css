import React from 'react';
import styles from './layout.module.scss';

const Layout = ({ children }) => (
  <header className={styles.layout}>{children}</header>
);

export default Layout;
