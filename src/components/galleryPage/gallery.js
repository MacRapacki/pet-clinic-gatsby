import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./gallery.module.css"

const Gallery = () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "header.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }

      astro: file(relativePath: { eq: "gatsby-astronaut.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <>
      <div className={style.wrapper}>
        <div className={style.img_wrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </div>

        <div className={style.img_wrapper}>
          <Img
            fluid={data.astro.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </div>

        <div className={style.img_wrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </div>

        <div className={style.img_wrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </div>

        <div className={style.img_wrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </div>

        <div className={style.img_wrapper}>
          <Img
            fluid={data.file.childImageSharp.fluid}
            alt="Gatsby Docs are awesome"
          />
        </div>
      </div>
    </>
  )
}

export default Gallery
