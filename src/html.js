import React from 'react'
import ReactDOMServer from 'react-dom/server'

let stylesStr
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`)
  } catch (e) {
    console.log(e)
  }
}

function renderAsciiArtBanner() {
  const content =
  `
    <!--

      ██████╗ ██╗   ██╗ █████╗ ███╗   ██╗    ██████╗  █████╗ ███╗   ███╗██████╗ ███████╗██████╗ ███████╗ █████╗ ██████╗
      ██╔══██╗╚██╗ ██╔╝██╔══██╗████╗  ██║    ██╔══██╗██╔══██╗████╗ ████║██╔══██╗██╔════╝██╔══██╗██╔════╝██╔══██╗██╔══██╗
      ██████╔╝ ╚████╔╝ ███████║██╔██╗ ██║    ██████╔╝███████║██╔████╔██║██████╔╝█████╗  ██████╔╝███████╗███████║██║  ██║
      ██╔══██╗  ╚██╔╝  ██╔══██║██║╚██╗██║    ██╔══██╗██╔══██║██║╚██╔╝██║██╔═══╝ ██╔══╝  ██╔══██╗╚════██║██╔══██║██║  ██║
      ██║  ██║   ██║   ██║  ██║██║ ╚████║    ██║  ██║██║  ██║██║ ╚═╝ ██║██║     ███████╗██║  ██║███████║██║  ██║██████╔╝
      ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚═╝  ╚═══╝    ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝     ╚══════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝╚═════╝

      Designed by Ryan, in Saint Paul, Minnesota.

    -->
  `
  const element = <noscript dangerouslySetInnerHTML={{__html: content}} />
  return element
}

module.exports = class HTML extends React.Component {
  render() {
    let css
    if (process.env.NODE_ENV === `production`) {
      css = <style id="gatsby-inlined-css" dangerouslySetInnerHTML={{ __html: stylesStr }} />
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
          {renderAsciiArtBanner()}
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}
