import React from "react";

import { headerIllustration } from "../../assets/images";

import styles from "../../scss/components/Header.module.scss";

const Header = () => (
  <div className={styles.header}>
    <div className={styles.header_illustration}>
      <img
        src="https://res.cloudinary.com/mrphemi/image/upload/v1577817224/illustration-working.svg"
        alt="Header illustration"
      />
    </div>
    <div className={styles.header_intro}>
      <h1>more than just shorter links</h1>
      <p>
        Build your brands's recognition and get detailed insights on how your
        links are performing.
      </p>
      <button>get started</button>
    </div>
  </div>
);

export default Header;
