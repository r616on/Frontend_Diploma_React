import React, { Fragment } from "react";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import About from "../../components/About/About";
import HowItWorks from "../../components/HowItWorks/HowItWorks";
import Reviews from "../../components/Reviews/Reviews";
import "./desktop.scss";

function PageTemplate(props) {
  return (
    <Fragment>
      <Header />
      <About />
      <HowItWorks />
      <Reviews />
      <Footer />
    </Fragment>
  );
}

export default PageTemplate;
