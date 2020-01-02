import React from "react";

import styles from "../../scss/components/Links.module.scss";

const Link = () => {
  return (
    <div className={styles.link}>
      <p className={styles.original}>https://www.frontendmentor.io</p>
      <div className={styles.converted}>
        <p>https://rel.ink/k4lKyk</p>
        <button>copy</button>
      </div>
    </div>
  );
};

export default Link;
