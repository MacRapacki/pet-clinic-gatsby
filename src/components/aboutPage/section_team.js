import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./section_team.module.css"

const SectionTeam = () => {
  const data = useStaticQuery(graphql`
    query {
      member2: file(relativePath: { eq: "team/member2.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      member1: file(relativePath: { eq: "team/member1.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      member3: file(relativePath: { eq: "team/member3.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment
          # The default maxWidth is 800 pixels
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }

      member4: file(relativePath: { eq: "team/member4.jpg" }) {
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
    <>
      <section className={style.section}>
        <h2
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.title}
        >
          {" "}
          Nasz zespół{" "}
        </h2>

        <div className={style.overlay}>
          <div
            data-sal="slide-down"
            data-sal-easing="ease-out"
            data-sal-duration="500"
            className={style.member_wrapper}
          >
            <div className={style.image_wrapper}>
              <Img fluid={data.member1.childImageSharp.fluid} />
            </div>
            <p className={style.name}>Samanta Ekri</p>
            <p className={style.spec}> Lekarz weterynarii</p>
          </div>

          <div
            data-sal="slide-down"
            data-sal-easing="ease-out"
            data-sal-duration="500"
            className={style.member_wrapper}
          >
            <div className={style.image_wrapper}>
              <Img fluid={data.member2.childImageSharp.fluid} />
            </div>
            <p className={style.name}>Jan Kowalski</p>
            <p className={style.spec}> Asystent lekarza weterynarii</p>
          </div>

          <div
            data-sal="slide-down"
            data-sal-easing="ease-out"
            data-sal-duration="500"
            className={style.member_wrapper}
          >
            <div className={style.image_wrapper}>
              <Img fluid={data.member3.childImageSharp.fluid} />
            </div>
            <p className={style.name}>Ewa Drzyzga</p>
            <p className={style.spec}> Specjalista od żywienia</p>
          </div>

          <div
            data-sal="slide-down"
            data-sal-easing="ease-out"
            data-sal-duration="500"
            className={style.member_wrapper}
          >
            <div className={style.image_wrapper}>
              <Img fluid={data.member4.childImageSharp.fluid} />
            </div>
            <p className={style.name}>Klaudia Kowalska</p>
            <p className={style.spec}> Dentysta</p>
          </div>
        </div>
      </section>{" "}
    </>
  )
}

export default SectionTeam
