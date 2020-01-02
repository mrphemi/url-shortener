import React from "react";
import PropTypes from "prop-types";

import styles from "../../scss/components/Footer.module.scss";

const Features = ({ title, links }) => (
  <div className={styles.sub}>
    <h3>{title}</h3>
    {links.map(link => (
      <ul key={link.text}>
        <li>
          <a href={link.url}>{link.text}</a>
        </li>
      </ul>
    ))}
  </div>
);

Features.propTypes = {
  title: PropTypes.string,
  links: PropTypes.array
};

export default Features;
