import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Footer } from "./Footer";
import { Ribbon } from "../shared/Ribbon";
import { graphql, StaticQuery } from "gatsby";

import "../../index.scss";

class HomepageLayout extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const query = graphql`
    query HomepageLayoutQuery {
      site {
        siteMetadata {
          title
          description
          keywords
        }
      }
    }`;
    const { children } = this.props;

    return (
      <StaticQuery
        query={query}
        render={(data) => (
          <div>
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                {
                  name: "description",
                  content: data.site.siteMetadata.description,
                },
                { name: "keywords", content: data.site.siteMetadata.keywords },
              ]}
            />

            <div className="universe home homepage-layout">
              {children}
              <Footer />
              <Ribbon />
            </div>
          </div>
        )}
      />
    );
  }
}

// export const query =
HomepageLayout.propTypes = {
  children: PropTypes.node,
};

export default HomepageLayout;
