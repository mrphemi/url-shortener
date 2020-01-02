import React from "react";

import { Facebook, Twitter, Instagram, Pinterest } from "../../assets/images";

import styles from "../../scss/components/Footer.module.scss";

const Social = () => (
  <div className={styles.social}>
    <Facebook className={styles.icon} />
    <Twitter className={styles.icon} />
    <Pinterest className={styles.icon} />
    <Instagram className={styles.icon} />
  </div>
);

export default Social;
