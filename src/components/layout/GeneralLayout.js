import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { graphql, StaticQuery } from "gatsby";

import "../../index.scss";

class GeneralLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const query = graphql`
    query GeneralLayoutQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }
    `;
    const { children } = this.props;
    return (
      <StaticQuery
        query={query}
        render={(data) => {
          return (
            <div>
              <Helmet
                title={data.site.siteMetadata.title}
                meta={[
                  {
                    name: "description",
                    content: data.site.siteMetadata.description,
                  },
                  {
                    name: "keywords",
                    content: data.site.siteMetadata.keywords,
                  },
                ]}
              />

              <div className="universe other general-layout">
                <Header />
                <div className="container">{children}</div>
                <Footer />
              </div>
            </div>
          );
        }}
      />
    );
  }
}

GeneralLayout.propTypes = {
  children: PropTypes.node,
};

export default GeneralLayout;
