import React from "react";
import ReactDOM from "react-dom";

import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import LinkForm from "./components/linkForm/LinkForm";
import MyLinks from "./components/links/Links";
import Services from "./components/services/Services";
import Extra from "./components/extra/Extra";
import Footer from "./components/footer/Footer";

import "./scss/styles.scss";

function App() {
  return (
    <>
      <Nav />
      <Header />
      <LinkForm />
      <div className="container_dark">
        <MyLinks />
        <Services />
      </div>
      <Extra />
      <Footer />
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
