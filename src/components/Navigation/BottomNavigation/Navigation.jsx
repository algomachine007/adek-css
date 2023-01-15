import React, { useState } from 'react';

import IconComponent from '../../../Icons';
import Button from '../../Button/Button';
// import Dropdown from '../../HeaderElements/Dropdown/Dropdown';
import { Hamburger } from '../../HeaderElements/Hamburger/Hamburger';

import styles from './navigation.module.scss';

const Navigation = ({ buttonHeader, headerLinks }) => {
  const [menu, setMenu] = useState(false);

  console.log('HeaderLinks', headerLinks);

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
                  <p> {title} </p>
                  <IconComponent name={icon} />
                </span>

                {Array.isArray(content) && (
                  <div>
                    {content.map((elem) => (
                      <div>
                        <h3>{elem.title}</h3>
                        <h4>{elem.details}</h4>
                      </div>
                    ))}
                  </div>
                )}

                {Array.isArray(contentMega) && (
                  <div>
                    {contentMega.map((elem) => {
                      console.log('ELEM', elem);
                      return (
                        <div>
                          <h3>{elem.link}</h3>

                          {!elem.isTwoColumn
                            ? elem.menuItem.menu.map((elem) => {
                                console.log('MegaMenu', elem);
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
                                    {elem.title}
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
