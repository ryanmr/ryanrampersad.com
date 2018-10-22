import React, { Component } from "react";
import Helmet from "react-helmet";

class Helm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { children } = this.props;
    return (
      <Helmet
        defaultTitle={`Ryan Rampersad`}
        titleTemplate={`%s › Ryan Rampersad`}>
        {children}
      </Helmet>
    );
  }
}

export default Helm;
