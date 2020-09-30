import { Link } from "gatsby"
import React, { useState } from "react"
import style from "../layout/nav.module.css"

const Nav = () => {
  const [burgerStatus, isOpen] = useState(false)

  const handleBurger = () => {
    isOpen(!burgerStatus)
  }

  return (
    <nav className={style.nav}>
      <Link to="/" className={style.logo}>
        Przychodnia <br /> Weterynaryjna{" "}
      </Link>
      <button type="button" className={style.burger} onClick={handleBurger}>
        <div
          className={`${style.burger_bar} ${burgerStatus ? style.bar_top : ""}`}
        >
          {" "}
        </div>{" "}
        <div
          className={`${style.burger_bar} ${
            burgerStatus ? style.bar_middle : ""
          }`}
        >
          {" "}
        </div>{" "}
        <div
          className={`${style.burger_bar} ${
            burgerStatus ? style.bar_bottom : ""
          }`}
        >
          {" "}
        </div>{" "}
      </button>
      <ul
        className={`${style.nav_list} ${
          burgerStatus ? style.nav_list_active : ""
        } `}
      >
        <li className={style.nav_item}>
          <Link
            to="/"
            className={style.nav_link}
            activeStyle={{
              color: "white",
              backgroundColor: "#6dbd6b",
            }}
          >
            Start{" "}
          </Link>{" "}
        </li>
        <li className={style.nav_item}>
          <Link
            to="/about"
            className={style.nav_link}
            activeStyle={{
              color: "white",
              backgroundColor: "#6dbd6b",
            }}
          >
            O nas{" "}
          </Link>{" "}
        </li>
        <li className={style.nav_item}>
          <Link
            to="/gallery"
            className={style.nav_link}
            activeStyle={{
              color: "white",
              backgroundColor: "#6dbd6b",
            }}
          >
            Galeria{" "}
          </Link>{" "}
        </li>
        <li className={style.nav_item}>
          <Link
            to="/news"
            className={style.nav_link}
            activeStyle={{
              color: "white",
              backgroundColor: "#6dbd6b",
            }}
          >
            Aktualności{" "}
          </Link>{" "}
        </li>
        <li className={style.nav_item}>
          <Link
            to="/contact"
            className={style.nav_link}
            activeStyle={{
              color: "white",
              backgroundColor: "#6dbd6b",
            }}
          >
            Kontakt{" "}
          </Link>{" "}
        </li>{" "}
      </ul>{" "}
    </nav>
  )
}

export default Nav
