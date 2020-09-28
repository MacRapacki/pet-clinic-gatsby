import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./footer.module.css"
import "../fontawesome/fontawesome"

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <FontAwesomeIcon icon="map-marker-alt" style={{ fontSize: "38px" }} />
        <FontAwesomeIcon icon="instagram" style={{ fontSize: "38px" }} />
      </footer>
    </>
  )
}

export default Footer
