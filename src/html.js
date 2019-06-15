import React from "react";
import PropTypes from "prop-types";
import { createGlobalStyle } from "styled-components";

function renderAsciiArtBanner() {
  const content = `
    <!--

      ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗    ██████╗  █████╗ ███╗   ███╗██████╗ ███████╗██████╗ ███████╗ █████╗ ██████╗
      ██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║    ██╔══██╗██╔══██╗████╗ ████║██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗
      ██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║    ██████╔╝███████║██╔████╔██║██████╔╝█████╗  ██████╔╝███████╗███████║██║  ██║
      ██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║    ██╔══██╗██╔══██║██║╚██╔╝██║██╔═══╝ ██╔══╝  ██╔══██╗╚════██║██╔══██║██║  ██║
      ██║  ██║   ██║   ██║  ██║██║ ╚████║    ██║  ██║██║  ██║██║ ╚═╝ ██║██║     ███████╗██║  ██║███████║██║  ██║██████╔╝
      ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝

      Designed by Ryan, in Saint Paul, Minnesota.

    -->
  `;
  const element = <noscript dangerouslySetInnerHTML={{ __html: content }} />;
  return element;
}

const GlobalStyle = createGlobalStyle``;

export default function HTML(props) {
  return (
    <>
      <GlobalStyle />
      <html {...props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />

          {/* {renderAsciiArtBanner()} */}
          {props.headComponents}
        </head>
        <body {...props.bodyAttributes}>
          {props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: props.body }}
          />
          {props.postBodyComponents}
        </body>
      </html>
    </>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
