import React from "react";

import { Facebook, Twitter, Instagram, Pinterest } from "../../assets/images";

import styles from "../../scss/components/Footer.module.scss";

const Social = () => (
  <div className={styles.social}>
    <a href="#">
      <Facebook className={styles.icon} />
    </a>
    <a href="#">
      <Twitter className={styles.icon} />
    </a>
    <a href="#">
      <Pinterest className={styles.icon} />
    </a>
    <a href="#">
      <Instagram className={styles.icon} />
    </a>
  </div>
);

export default Social;
