import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./footer.module.css"
import "../fontawesome/fontawesome"

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <FontAwesomeIcon icon={"facebook"} />
      </footer>
    </>
  )
}

export default Footer
