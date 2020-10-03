/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"

import Nav from "./layout/nav"
import style from "./layout.module.css"
import Footer from "./layout/footer"

const Layout = ({ children }) => {
  return (
    <>
      <div className={style.wrapper}>
        <Nav />
        <main
          style={{
            width: "100%",
          }}
        >
          {" "}
          {children}{" "}
        </main>{" "}
        <Footer />
      </div>{" "}
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
