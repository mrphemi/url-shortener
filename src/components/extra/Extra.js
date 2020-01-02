import React from "react";
import classnames from "classnames";

import styles from "../../scss/components/Extra.module.scss";

const Extra = () => (
  <div className={classnames(styles.extra, "container")}>
    <div>
      <h2 className="text-center">boost your links today</h2>
      <button>get started</button>
    </div>
  </div>
);

export default Extra;
