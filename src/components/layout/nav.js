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
      <div className={style.overlay}>
        <h1>
          {" "}
          <Link to="/" className={style.logo}>
            Przychodnia <br /> Weterynaryjna{" "}
          </Link>
        </h1>
        <button type="button" className={style.burger} onClick={handleBurger}>
          <div
            className={`${style.burger_bar} ${
              burgerStatus ? style.bar_top : ""
            }`}
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
                backgroundColor: "var(--main-color)",
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
                backgroundColor: "var(--main-color)",
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
                backgroundColor: "var(--main-color)",
              }}
            >
              Galeria{" "}
            </Link>{" "}
          </li>
          <li className={style.nav_item}>
            <Link
              to="/newstest"
              className={style.nav_link}
              activeStyle={{
                color: "white",
                backgroundColor: "var(--main-color)",
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
                backgroundColor: "var(--main-color)",
              }}
            >
              Kontakt{" "}
            </Link>{" "}
          </li>{" "}
        </ul>{" "}
      </div>
    </nav>
  )
}

export default Nav
