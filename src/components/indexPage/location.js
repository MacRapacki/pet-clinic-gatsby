import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import style from "./location.module.css"

const Location = () => {
  const data = useStaticQuery(graphql`
    query {
      map: file(relativePath: { eq: "location.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid(quality: 90) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={style.image_wrapper}>
        <Img fluid={data.map.childImageSharp.fluid} />
        <a
          href="https://g.page/weterynariapaslek?share"
          target="_blank"
          className={style.map_Link}
        >
          Znajdz nas na mapie
        </a>
      </div>
    </>
  )
}

export default Location
