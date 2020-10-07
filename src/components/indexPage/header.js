import React from "react"
import style from "./header.module.css"

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <p
          className={style.welcome_text}
          data-sal="slide-right"
          data-sal-delay="300"
          data-sal-easing="ease-out"
          data-sal-duration="500"
        >
          {" "}
          <span className={style.part_one}> Zapewniamy </span> <br />
          <span className={style.part_two}> pełen zakres </span> <br />{" "}
          kompleksowej opieki i <br /> usług medycznych{" "}
        </p>{" "}
      </header>{" "}
    </>
  )
}

export default Header
