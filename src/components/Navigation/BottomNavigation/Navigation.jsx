import React, { useState } from 'react';

import IconComponent from '../../../Icons';
import Button from '../../Button/Button';
// import Dropdown from '../../HeaderElements/Dropdown/Dropdown';
import { Hamburger } from '../../HeaderElements/Hamburger/Hamburger';

import styles from './navigation.module.scss';

const Navigation = ({ buttonHeader, headerLinks }) => {
  const [menu, setMenu] = useState(false);

  const [toggleDropdown1, setToggleDropdown1] = useState(false);
  const [toggleDropdown2, setToggleDropdown2] = useState(false);

  const handleShowDropdowns = (index) => {
    switch (index) {
      case 0:
        return setToggleDropdown1((p) => !p);
      case 1:
        return setToggleDropdown2((p) => !p);
      default:
        return null;
    }
  };

  const handleMenuToggle = () => setMenu((p) => !p);

  return (
    <>
      <nav className={styles.wrapper}>
        <IconComponent name='logo' />
        <ul>
          {headerLinks.map(
            ({ title, icon, content, contentMega, help }, index) => (
              <li key={`li-${index}`}>
                <span>
                  <p onClick={() => handleShowDropdowns(index)}>{title}</p>
                  <IconComponent name={icon} />
                </span>

                <div>
                  {Array.isArray(content) && (
                    <div>
                      SHOW ME
                      {toggleDropdown1 &&
                        content.map((elem) => (
                          <div>
                            <h3>{elem.title}</h3>
                            <h4>{elem.details}</h4>
                          </div>
                        ))}
                    </div>
                  )}
                </div>

                {Array.isArray(contentMega) && (
                  <div>
                    SHOW ME
                    {toggleDropdown2 &&
                      contentMega.map((elem, index) => {
                        console.log('IDX', index);
                        return (
                          <div>
                            <h3>mega{elem.link}</h3>
                            {!elem.isTwoColumn
                              ? elem.menuItem.menu.map((elem) => {
                                  return (
                                    <div>
                                      {elem.link}
                                      {elem.details}
                                      {elem.title}
                                    </div>
                                  );
                                })
                              : elem.menuItem.map((elem) => {
                                  return (
                                    <div>
                                      {elem.link}
                                      {elem.details}
                                      <h2> {elem.title}</h2>
                                    </div>
                                  );
                                })}
                          </div>
                        );
                      })}
                  </div>
                )}

                {/* // create a component that when clicked would display the content */}

                {/* <div className={styles.dropdown}>
                {subLinks?.map(({ title, href }, index) => (
                  <Dropdown key={`sub-${index}`} link={title} url={href} />
                ))}
              </div> */}
              </li>
            )
          )}
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
          {/* TODO : update based on design. In the mobile version, there would be an arrow with dropdown which would house the subLinks*/}
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
