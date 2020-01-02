import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";

import styles from "../../scss/components/LinkForm.module.scss";

const LinkForm = ({ updateLinks }) => {
  const [link, setLink] = useState("");
  const [isValid, setIsValid] = useState(true);

  // iniatialize empty array or get existing array of shortened links from localstorage
  const myShortenedLinks = localStorage.getItem("myShortenedLinks")
    ? [...JSON.parse(localStorage.getItem("myShortenedLinks"))]
    : [];
  // regex for valid url's
  const urlPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

  const onChange = e => {
    setLink(e.target.value);
  };

  const validateUrl = link !== "" && urlPattern.test(link);

  const shortenUrl = async e => {
    e.preventDefault();
    try {
      // Validate user provided link against valid url regex pattern
      if (validateUrl) {
        // Send request to shorten url
        const shortened = await axios.post("https://rel.ink/api/links/", {
          url: `${link}`
        });
        // push shortened url data to array
        myShortenedLinks.push(shortened.data);
        // store array in local storage
        localStorage.setItem(
          "myShortenedLinks",
          JSON.stringify(myShortenedLinks)
        );

        // update global links state
        updateLinks([...JSON.parse(localStorage.getItem("myShortenedLinks"))]);

        // clear input field and set isValid to true
        setLink("");
        setIsValid(true);
      } else {
        // prompt user to provide valid url string
        setIsValid(false);
      }
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="container">
      <form className={styles.link_form} onSubmit={shortenUrl}>
        <div className={styles.input_field}>
          <input
            type="text"
            name="linkform"
            placeholder="Shorten a link here..."
            value={link}
            onChange={onChange}
            className={!isValid ? styles.has_error : ""}
          />
        </div>
        {!isValid && (
          <p className={styles.error_msg}> please add a valid link </p>
        )}
        <button>shorten it!</button>
      </form>
    </div>
  );
};

LinkForm.propTypes = {
  updateLinks: PropTypes.func
};

export default LinkForm;