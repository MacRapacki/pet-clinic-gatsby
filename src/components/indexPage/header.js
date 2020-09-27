import React from "react"
import style from "./header.module.css"

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <p className={style.welcome}>
          {" "}
          <span className={style.part_one}> Zapewniamy </span> <br />
          <span className={style.part_two}> pełen zakres </span> <br />{" "}
          kompleksowej opieki i usług medycznych{" "}
        </p>{" "}
      </header>
    </>
  )
}

export default Header
