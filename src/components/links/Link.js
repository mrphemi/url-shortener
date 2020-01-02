import React, { useState } from "react";
import PropTypes from "prop-types";
import copy from "copy-to-clipboard";

import styles from "../../scss/components/Links.module.scss";

const Link = ({ link }) => {
  const [copied, setCopied] = useState(false);
  // Copy shortened url to clipboard
  const copyToClipboard = text => {
    copy(text);
    setCopied(true);
    // Reversed copied state to false after 5seconds
    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };
  return (
    <div className={styles.link}>
      <p className={styles.original}>{link.url}</p>
      <div className={styles.converted}>
        <p>{`https://rel.ink/${link.hashid}`}</p>
        <button
          className={copied ? styles.copied : ""}
          onClick={() => {
            copyToClipboard(`https://rel.ink/${link.hashid}`);
          }}
        >
          {copied ? "copied!" : "copy"}
        </button>
      </div>
    </div>
  );
};

Link.propTypes = {
  link: PropTypes.object
};

export default Link;
