import React from "react";

import Header from "../../common/header";
import Footer from "../../common/footer";
import About from "../../components/about";

export default class AboutContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <About />
        <Footer />
      </React.Fragment>
    );
  }
}
