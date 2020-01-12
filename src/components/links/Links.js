import React, { useEffect } from "react";
import PropTypes from "prop-types";

import Link from "./Link";

import styles from "../../scss/components/Links.module.scss";

const Links = ({ links }) => {
  useEffect(() => {
    return;
  }, [links]);

  return (
    <div className={styles.my_links}>
      {links && links.map((link, i) => <Link key={i} link={link} />)}
    </div>
  );
};

Links.propTypes = {
  links: PropTypes.array.isRequired
};

export default Links;
