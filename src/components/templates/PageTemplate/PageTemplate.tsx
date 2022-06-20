import React, { FC, Fragment } from "react";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";

import "./style.scss";
interface Iprops {
  stepOne?: boolean;
  noSearch?: boolean;
  backgroundImage?: string;
}

const PageTemplate: FC<Iprops> = (props) => {
  return (
    <Fragment>
      <Header
        noSearch={props.noSearch}
        backgroundImage={props.backgroundImage}
      />
      {props.children}
      <Footer />
    </Fragment>
  );
};

export default PageTemplate;
