import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import style from "./section_all_pets.module.css"

const SectionAllPets = () => {
  const data = useStaticQuery(graphql`
    query {
      rabbit: file(relativePath: { eq: "pets/rabbit.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cow: file(relativePath: { eq: "pets/cow.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment.
          # The default width is 400 pixels
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
      cat: file(relativePath: { eq: "pets/cat.jpg" }) {
        childImageSharp {
          # Specify a fluid image and fragment.
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
          Opieka profilaktyczna nad wszystkimi zwierzętami, w tym ptakami i
          gadami.
        </h2>

        <div className={style.overlay}>
          {" "}
          <div className={style.wrapper}>
            <div className={style.image_wrapper}>
              <Img fluid={data.rabbit.childImageSharp.fluid} alt="rabbit" />
            </div>
            <p className={style.description}>
              Oferujemy leki specjalistyczne dla zwierząt domowych. W mieście,
              które nigdy nie śpi, nasz szpital dotrzymuje kroku Tobie i Twoim
              zwierzętom i jest otwarty 24 godziny na dobę w nagłych
              przypadkach. Dzięki doświadczeniu zdobytemu przez lata
              zaawansowanego szkolenia nasi weterynarze radzą sobie z
              najtrudniejszymi warunkami medycznymi i chirurgicznymi. Nasi
              specjaliści wykorzystują innowacyjne procedury, w połączeniu z
              tradycyjnymi, sprawdzonymi metodami, nowoczesnym sprzętem oraz
              najnowocześniejszymi lekami i terapiami, aby zdiagnozować i leczyć
              stan Twojego pupila.
            </p>
          </div>
          <div className={style.wrapper}>
            <div className={style.image_wrapper}>
              <Img fluid={data.cow.childImageSharp.fluid} alt="cow" />
            </div>
            <p className={style.description}>
              Cel naszego zespołu jest prosty: stworzyć i dostarczyć plan
              leczenia, który najlepiej odpowiada potrzebom medycznym Twojego
              zwierzaka i Twoim oczekiwaniom. Niezależnie od tego, czy Twój
              weterynarz skierował do nas Twojego zwierzaka z powodu nagłej
              sytuacji, czy z powodu przewlekłej choroby, nasz wykwalifikowany
              zespół jest gotowy zapewnić najwyższej jakości opiekę i opiekę nad
              Twoim zwierzakiem.
            </p>
          </div>
          <div className={style.wrapper}>
            <div className={style.image_wrapper}>
              <Img fluid={data.cat.childImageSharp.fluid} alt="rabbit" />
            </div>
            <p className={style.description}>
              Dążymy do zapewnienia kompleksowej opieki wysokiej jakości dla
              każdego pacjenta, aby poprawić jego samopoczucie i jakość życia.
              Nasz pełen współczucia, kompetentny i profesjonalny zespół
              wykorzystuje najnowocześniejsze technologie i nieustannie wdraża
              najnowsze innowacje w najnowocześniejszych praktykach medycznych.
              Naprawdę cenimy Twoją opinię w procesie podejmowania decyzji.
              Nasza zdolność do wspierania doświadczeń edukacyjnych w celu
              zaspokojenia Twoich indywidualnych potrzeb nie ma sobie równych.
            </p>
          </div>
        </div>
      </section>{" "}
    </>
  )
}

export default SectionAllPets
