import React from "react";

import Sub from "./Sub";
import Social from "./Social";
import { featuresLinks, companyLinks, resourcesLinks } from "./links";

import { WhiteLogo } from "../../assets/images";
import styles from "../../scss/components/Footer.module.scss";

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="container">
        <WhiteLogo className={styles.logo} />
        <Sub title="features" links={featuresLinks} />
        <Sub title="resources" links={resourcesLinks} />
        <Sub title="company" links={companyLinks} />
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
