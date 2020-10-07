import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import style from "./section_about_clinic.module.css"

const SectionAboutClinic = () => {
  const data = useStaticQuery(graphql`
    query {
      cat: file(relativePath: { eq: "wiskas.jpg" }) {
        childImageSharp {
          # Specify a fixed image and fragment.
          # The default width is 400 pixels
          fluid {
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
        >
          {" "}
          O naszej klinice{" "}
        </h2>

        <div
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.image_wrapper}
        >
          <Img fluid={data.cat.childImageSharp.fluid} />
        </div>

        <p
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.description}
        >
          Psy, koty, ptaki i kieszonkowe zwierzaki - od futra po pióra, z
          radością witamy ich wszystkich Pet Clinic! Nasz szpital weterynaryjny
          służy naszym społecznościom od 1983 roku, zapewniając wysokiej jakości
          opiekę weterynaryjną w środowisku rodzinnym. Jako szpital
          weterynaryjny z pełną obsługą zapewniamy zwierzętom zarówno opiekę
          medyczną, jak i chirurgiczną, począwszy od profilaktyki, poprzez
          kompleksową opiekę stomatologiczną, a skończywszy na pogotowiu
          pogotowia po godzinach. <br /> <br /> Jesteśmy dumni, że zatrudniamy
          doświadczony zespół lekarzy, techników i recepcjonistów, którzy
          zajmują się Twoim zwierzakiem, diagnozują i leczą wszelkie wykryte
          problemy medyczne. Od spersonalizowanej uwagi po pełną współczucia
          opiekę, dążymy do osiągnięcia wysokiego poziomu satysfakcji klientów
          ze wszystkiego, co robimy. Więc nie wahaj się, na pewno przekroczymy
          Twoje oczekiwania.
        </p>
      </section>{" "}
    </>
  )
}

export default SectionAboutClinic
