/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import "./layout.css"

const Layout = ({ children }) => (
  <div className="wrapper">
    { children }

    <div className="top-bar"></div>
    <div className="bottom-bar"></div>
  </div>
)

export default Layout
