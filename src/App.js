import React, { useState } from "react";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import LinkForm from "./components/linkForm/LinkForm";
import MyLinks from "./components/links/Links";
import Services from "./components/services/Services";
import Extra from "./components/extra/Extra";
import Footer from "./components/footer/Footer";

import "./scss/styles.scss";

const App = () => {
  const storedLinks = localStorage.getItem("myShortenedLinks")
    ? [...JSON.parse(localStorage.getItem("myShortenedLinks"))]
    : [];
  const [links, setLinks] = useState(storedLinks);
  return (
    <>
      <Nav />
      <Header />
      <LinkForm updateLinks={setLinks} />
      <div className="container_dark">
        <MyLinks links={links} />
        <Services />
      </div>
      <Extra />
      <Footer />
    </>
  );
};

export default App;
