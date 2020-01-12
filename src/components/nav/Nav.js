import React, { useState } from "react";
import classnames from "classnames";

import { Logo } from "../../assets/images";
import styles from "../../scss/components/Nav.module.scss";

const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(prevIsNavOpen => setIsNavOpen(!prevIsNavOpen));
  };

  return (
    <nav className={classnames(styles.topnav, "container")}>
      <div className={styles.logo}>
        <a href="/">
          <Logo />
        </a>
        <ion-icon name="menu" onClick={toggleNav} />
      </div>
      <ul
        className={classnames(styles.links_list, { [styles.show]: isNavOpen })}
      >
        <div className={styles.links_1}>
          <li>
            <a href="/">features</a>
          </li>
          <li>
            <a href="/">pricing</a>
          </li>
          <li>
            <a href="/">resources</a>
          </li>
        </div>
        <div className={styles.links_2}>
          <li>
            <a href="/">login</a>
          </li>
          <li className={styles.signup_link}>
            <a href="/">sign up</a>
          </li>
        </div>
      </ul>
    </nav>
  );
};

export default Nav;
