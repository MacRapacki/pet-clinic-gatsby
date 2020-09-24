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
        Przychodnia <br /> Weterynaryjna
      </Link>

      <button type="button" className={style.burger} onClick={handleBurger}>
        <div className={style.burger_bar}></div>
        <div className={style.burger_bar}></div>
        <div className={style.burger_bar}></div>
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
            activeStyle={{ color: "white" }}
          >
            Start
          </Link>
        </li>

        <li className={style.nav_item}>
          <Link
            to="/about"
            className={style.nav_link}
            activeStyle={{ color: "white" }}
          >
            O nas
          </Link>
        </li>

        <li className={style.nav_item}>
          <Link
            to="/"
            className={style.nav_link}
            activeStyle={{ color: "white" }}
          >
            Galeria
          </Link>
        </li>

        <li className={style.nav_item}>
          <Link
            to="/"
            className={style.nav_link}
            activeStyle={{ color: "white" }}
          >
            Aktualności
          </Link>
        </li>

        <li className={style.nav_item}>
          <Link
            to="/"
            className={style.nav_link}
            activeStyle={{ color: "white" }}
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
