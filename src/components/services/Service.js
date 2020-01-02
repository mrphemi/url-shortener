import React from "react";
import PropTypes from "prop-types";

import styles from "../../scss/components/Services.module.scss";

const Service = ({ title, description, IconComponent }) => (
  <div className={styles.service}>
    <div className={styles.illustration}>
      <IconComponent />
    </div>
    <h2>{title}</h2>
    <p>{description}</p>
  </div>
);

Service.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  IconComponent: PropTypes.elementType
};

export default Service;
