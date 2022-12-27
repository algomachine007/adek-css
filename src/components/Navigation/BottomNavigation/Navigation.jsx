import React, { useState } from 'react';

import IconComponent from '../../../Icons';
import Button from '../../Button/Button';
import Dropdown from '../../HeaderElements/Dropdown/Dropdown';
import { Hamburger } from '../../HeaderElements/Hamburger/Hamburger';

import styles from './navigation.module.scss';

const Navigation = ({ buttonHeader, headerLinks }) => {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => setMenu((p) => !p);

  return (
    <>
      <nav className={styles.wrapper}>
        <IconComponent name='logo' />
        <ul>
          {headerLinks.map(({ title, icon, subLinks }, index) => (
            <li key={`li-${index}`}>
              <span>
                <p> {title} </p>
                <IconComponent name={icon} />
              </span>
              <div className={styles.dropdown}>
                {subLinks?.map(({ title, href }, index) => (
                  <Dropdown key={`sub-${index}`} link={title} url={href} />
                ))}
              </div>
            </li>
          ))}
        </ul>

        <Button className={styles.button} title={buttonHeader.title} />

        <div className={styles.hamburger}>
          <Hamburger
            hamburgerMenuToogle={menu}
            hamburgerToggler={handleMenuToggle}
          />
        </div>
      </nav>

      {menu && (
        <nav className={styles.navOpen}>
          {/* TODO : update based on design*/}
          <ul>
            <li>Menu item one</li>
            <li>Menu item two</li>
            <li>Menu item three</li>
            <li>Menu item four</li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
