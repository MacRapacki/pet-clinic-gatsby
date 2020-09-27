import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"

export default function About() {
  return (
    <Layout>
      <div
        style={{
          color: `teal`,
        }}
      >
        <h1> About Gatsby </h1> <p> Such wow.Very React. </p>{" "}
      </div>{" "}
      <Link to="/"> Go to home page </Link>
    </Layout>
  )
}
