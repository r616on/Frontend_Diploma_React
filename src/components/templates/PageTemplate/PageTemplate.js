import React, { Fragment } from "react";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";

import "./style.scss";

function PageTemplate(props) {
  return (
    <Fragment>
      <Header selectTrain={props.selectTrain} />
      {props.children}
      <Footer />
    </Fragment>
  );
}

export default PageTemplate;
