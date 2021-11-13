/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1100,
          padding: `1.45rem 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      </div>
    </React.Fragment>
  )
}

export default Layout
