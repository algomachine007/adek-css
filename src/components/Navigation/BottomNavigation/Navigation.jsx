import React, { useState } from "react";

import IconComponent from "../../../Icons";
import Button from "../../Button/Button";
// import Dropdown from '../../HeaderElements/Dropdown/Dropdown';
import { Hamburger } from "../../HeaderElements/Hamburger/Hamburger";

import styles from "./navigation.module.scss";

const Navigation = ({ buttonHeader, headerLinks }) => {
  const [menu, setMenu] = useState(false);

  const [toggleDropdown1, setToggleDropdown1] = useState(false);
  const [toggleDropdown2, setToggleDropdown2] = useState(false);

  const [activeIdx, setActiveIdx] = useState(null);

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

  const handleShowDropdownsLevel2 = (index) => {
    if (index === 0 || index) {
      setActiveIdx(index);
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
                    {toggleDropdown2 &&
                      contentMega.map((elem, index) => {
                        return (
                          <div>
                            <h4
                              onClick={() => {
                                if (index === activeIdx) {
                                  setActiveIdx(null);
                                } else {
                                  handleShowDropdownsLevel2(index);
                                }
                              }}
                              style={{ color: "red", cursor: "pointer" }}
                            >
                              {elem.link}

                              {activeIdx === index ? "yeah" : "no"}
                            </h4>
                            {activeIdx === index ? (
                              <div>
                                {!elem.isTwoColumn
                                  ? elem.menuItem.menu.map((elem) => {
                                      return (
                                        <div>
                                          {elem.details}
                                          {elem.title}
                                        </div>
                                      );
                                    })
                                  : elem.menuItem.map((elem) => {
                                      return (
                                        <div>
                                          <h4>{elem.link}</h4>

                                          {elem.details}
                                          <h2> {elem.title}</h2>
                                        </div>
                                      );
                                    })}
                              </div>
                            ) : null}
                          </div>
                        );
                      })}
                  </div>
                )}
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
    </>
  );
};

export default Navigation;
