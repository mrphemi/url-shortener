import React from "react";
import classnames from "classnames";

import Sub from "./Sub";
import Social from "./Social";
import { featuresLinks, companyLinks, resourcesLinks } from "./links";

import { WhiteLogo } from "../../assets/images";
import styles from "../../scss/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer>
      <div className={classnames(styles.wrapper, "container")}>
        <WhiteLogo className={styles.logo} />
        <div className={styles.links}>
          <Sub title="features" links={featuresLinks} />
          <Sub title="resources" links={resourcesLinks} />
          <Sub title="company" links={companyLinks} />
          <Social />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
