
import React from 'react'
import { graphql } from 'gatsby'
import Img from "gatsby-image"


import style from "./newstest.module.css"
import Layout from "../components/layout"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../components/fontawesome/fontawesome"


const Newstest = ({ data }) => {
  const news = data.allDatoCmsNews.edges

  return (
    <>
<Layout>
      <section className={style.section}>
        {news.map(({ node }) => { 
          return (

            <div className={style.overlay}>
              <div className={style.news_wrapper}>

                <div className={style.text_wrapper}>
                  <h2 key={node.slug} className={style.title}> {node.header} </h2>{" "}

                  <div className={style.img_wrapper}>
                    <Img key={node.slug} fluid={node.photo.fluid} />
                  </div>{" "}

                  <p key={node.slug} className={style.news}>
                    {node.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, assumenda eaque dolore repellat explicabo ipsum quo quas, rerum debitis ducimus laborum. Quod cumque repellat sit quasi animi molestias necessitatibus voluptate?
                </p>

                  <div className={style.article_footer}>
                    <p key={node.slug} className={style.date}>
                      <FontAwesomeIcon
                        icon="calendar-alt"
                        style={{ fontSize: "20px", color: "var(--main-color)", marginRight: "15px" }}
                      />
                      {node.date}</p>
                    <p key={node.slug} className={style.author}>    <FontAwesomeIcon
                      icon="user"
                      style={{ fontSize: "20px", color: "var(--main-color)", marginRight: "15px" }}
                    />
                      {node.author}</p>
                  </div>
                </div>
              </div>
            </div>
          )

        })}</section>
        </Layout>



    </>
  )
}


export const query = graphql`
query  {
  allDatoCmsNews(sort: {fields: date, order: DESC}) {
    edges {
      node {
        slug
        header
        date
        description
        author
        photo {
          fluid(maxWidth: 600) {
            src
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
}


  
`

export default Newstest;