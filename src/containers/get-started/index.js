import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import GetStarted from "../../components/get-started";

export default class GetStartedContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header/>
        <GetStarted/>
        <Footer/>
      </React.Fragment>
    );
  }
}