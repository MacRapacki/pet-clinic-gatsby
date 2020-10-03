import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./footer.module.css"
import "../fontawesome/fontawesome"

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <p> Pet Clinic© 2020 </p>{" "}
        <div className={style.icon_wrapper}>
          <Link>
            {" "}
            <FontAwesomeIcon icon={["fab", "twitter"]} />{" "}
          </Link>{" "}
          <Link>
            {" "}
            <FontAwesomeIcon icon={["fab", "facebook"]} />{" "}
          </Link>{" "}
          <Link>
            {" "}
            <FontAwesomeIcon icon={["fab", "instagram"]} />{" "}
          </Link>{" "}
        </div>{" "}
      </footer>{" "}
    </>
  )
}

export default Footer
