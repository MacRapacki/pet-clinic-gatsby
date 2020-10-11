import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./section_news.module.css"

const SectionNews = () => {
  const data = useStaticQuery(graphql`
    query {
      member1: file(relativePath: { eq: "team/member1.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <section className={style.section}>
      <div className={style.overlay}>
        <div className={style.news_wrapper}>
          <div className={style.img_wrapper}>
            <Img fluid={data.member1.childImageSharp.fluid} />{" "}
          </div>{" "}
          <div className={style.text_wrapper}>
            <h2 className={style.title}> Tytuł / nagłówek </h2>{" "}
            <p className={style.news}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sequi
              repellat exercitationem corporis laudantium animi, magni ipsum
              quidem assumenda, architecto excepturi aliquam, eveniet ratione
              pariatur eaque blanditiis voluptates accusamus quas temporibus.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className={style.news_wrapper}>
          <div className={style.img_wrapper}>
            <Img fluid={data.member1.childImageSharp.fluid} />{" "}
          </div>{" "}
          <div className={style.text_wrapper}>
            <h2 className={style.title}> Tytuł / nagłówek </h2>{" "}
            <p className={style.news}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sequi
              repellat exercitationem corporis laudantium animi, magni ipsum
              quidem assumenda, architecto excepturi aliquam, eveniet ratione
              pariatur eaque blanditiis voluptates accusamus quas temporibus.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className={style.news_wrapper}>
          <div className={style.img_wrapper}>
            <Img fluid={data.member1.childImageSharp.fluid} />{" "}
          </div>{" "}
          <div className={style.text_wrapper}>
            <h2 className={style.title}> Tytuł / nagłówek </h2>{" "}
            <p className={style.news}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sequi
              repellat exercitationem corporis laudantium animi, magni ipsum
              quidem assumenda, architecto excepturi aliquam, eveniet ratione
              pariatur eaque blanditiis voluptates accusamus quas temporibus.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className={style.news_wrapper}>
          <div className={style.img_wrapper}>
            <Img fluid={data.member1.childImageSharp.fluid} />{" "}
          </div>{" "}
          <div className={style.text_wrapper}>
            <h2 className={style.title}> Tytuł / nagłówek </h2>{" "}
            <p className={style.news}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.Sequi
              repellat exercitationem corporis laudantium animi, magni ipsum
              quidem assumenda, architecto excepturi aliquam, eveniet ratione
              pariatur eaque blanditiis voluptates accusamus quas temporibus.{" "}
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </section>
  )
}



export default SectionNews
