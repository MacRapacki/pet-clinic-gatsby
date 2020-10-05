import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import style from "./footer.module.css"
import "../fontawesome/fontawesome"

const Footer = () => {
  return (
    <>
      <footer className={style.footer}>
        <div className={style.overlay}>
          <p> Pet Clinic© 2020 </p>{" "}
          <div className={style.icon_wrapper}>
            <Link>
              {" "}
              <FontAwesomeIcon
                className={style.icon}
                icon={["fab", "twitter"]}
              />{" "}
            </Link>{" "}
            <Link>
              {" "}
              <FontAwesomeIcon
                className={style.icon}
                icon={["fab", "facebook"]}
              />{" "}
            </Link>{" "}
            <Link>
              {" "}
              <FontAwesomeIcon
                className={style.icon}
                icon={["fab", "instagram"]}
              />{" "}
            </Link>{" "}
          </div>{" "}
        </div>
      </footer>{" "}
    </>
  )
}

export default Footer
