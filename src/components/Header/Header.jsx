import React, { useState } from 'react';
import { buttonHeader, contactHeader, headerLinks } from '../../data';
import IconComponent from '../../Icons';
import Dropdown from '../Dropdown/Dropdown';
import { Hamburger } from '../HeaderElements/Hamburger/Hamburger';

import styles from './header.module.scss';

const Header = () => {
  const [menu, setMenu] = useState(false);

  const handleMenuToggle = () => setMenu((p) => !p);
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

        <button className={styles.button}>{buttonHeader.title}</button>

        <Hamburger
          hamburgerMenuToogle={menu}
          hamburgerToggler={handleMenuToggle}
        />
      </nav>
    </div>
  );
};

export default Header;
