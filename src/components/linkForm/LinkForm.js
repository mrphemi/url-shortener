import React, { useState } from "react";

import styles from "../../scss/components/LinkForm.module.scss";

const LinkForm = () => {
  const [error, SetError] = useState("");
  const [hasError, setHasError] = useState(false);

  return (
    <div className="container">
      <form className={styles.link_form}>
        <div className={styles.input_field}>
          <input
            type="text"
            name="linkform"
            placeholder="Shorten a link here..."
          />
        </div>
        <p className={styles.error_msg}> please add a valid link </p>
        <button>shorten it!</button>
      </form>
    </div>
  );
};

export default LinkForm;
