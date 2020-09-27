/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Nav from "./layout/nav"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <main> {children} </main>{" "}
      <footer
        style={{
          height: "15px",
          width: "100%",
          backgroundColor: "black",
        }}
      ></footer>{" "}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
