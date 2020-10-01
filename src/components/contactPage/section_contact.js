import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "../fontawesome/fontawesome"
import style from "./section_contact.module.css"

const SectionContact = () => {
  return (
    <>
      <section className={style.section}>
        <div>
          <h3>Adres:</h3>
          <p className={style.detail}>
            {" "}
            <FontAwesomeIcon icon={"home"} className={style.icon} />
            Dworcowa 999, 14-400 Pasłęk
          </p>

          <h3>Telefon:</h3>
          <p className={style.detail}>
            {" "}
            <FontAwesomeIcon icon={"phone"} className={style.icon} />
            888-999-444
          </p>

          <h3>E-mail:</h3>
          <p className={style.detail}>
            {" "}
            <FontAwesomeIcon icon={"envelope"} className={style.icon} />
            mail@clinic.com
          </p>
        </div>
        <div>
          <label></label>
          <input type="text" />
        </div>
        <div>
          <label></label>
          <input type="email" />
        </div>
        <div>
          <label></label>
          <input type="number" />
        </div>
      </section>{" "}
    </>
  )
}

export default SectionContact
