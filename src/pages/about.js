import React from "react"
import Info from "../components/info"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Image from "../components/image2"

export default function About() {
  return (
    <Layout>
      <div style={{ color: `teal` }}>
        <h1>About Gatsby</h1>
        <p>Such wow. Very React.</p>
        <Info infoText="dzolo" />
        <Info infoText="dzolo 2" />
      </div>
      <Link to="/">Go to home page </Link>
      <Image />
    </Layout>
  )
}
