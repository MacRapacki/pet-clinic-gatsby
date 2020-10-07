import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./section_contact.module.css"
import "../fontawesome/fontawesome"

const SectionContact = () => {
  return (
    <>
      <section className={style.section}>
        <div
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.wrapper}
        >
          <FontAwesomeIcon
            icon="map-marker-alt"
            style={{ fontSize: "38px", color: "var(--main-color)" }}
          />
          <p className={style.icon_title}>Adres:</p>
          <p>Warszawa 22-222</p>
        </div>

        <div
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.wrapper}
        >
          <FontAwesomeIcon
            icon="phone"
            style={{ fontSize: "38px", color: "var(--main-color)" }}
          />
          <p className={style.icon_title}>Telefon:</p>
          <p>888-999-444</p>
        </div>

        <div
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.wrapper}
        >
          <FontAwesomeIcon
            icon="at"
            style={{ fontSize: "38px", color: "var(--main-color)" }}
          />
          <p className={style.icon_title}>E-mail:</p>
          <p>petclinic@gmail.com</p>
        </div>

        <div
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.wrapper}
        >
          <FontAwesomeIcon
            icon="clock"
            style={{ fontSize: "38px", color: "var(--main-color)" }}
          />
          <p className={style.icon_title}>Godziny otwarcia:</p>
          <p className={style.icon_hours}>
            Pon-Pt: 10 - 17 <br />
            Sob: 10 - 13
          </p>
        </div>
      </section>{" "}
    </>
  )
}

export default SectionContact
