import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import style from "./header.module.css"

const Header = () => {
  return (
    <>
      <header className={style.header}>
        <p className={style.welcome}>
          {" "}
          <span className={style.part_one}>Zapewniamy</span> <br />
          <span className={style.part_two}>pełen zakres</span> <br />{" "}
          kompleksowej opieki i usług medycznych
        </p>
      </header>

      <section className={style.section}>
        <p className={style.title}>
          Z przyjemnością oferujemy następujące usługi:
        </p>

        <div className={style.list_wrapper}>
          <ul className={style.services_list}>
            <li>Kompleksowa opieka nad zwierzętami towarzyszącymi </li>
            <li> Stomatologia i cyfrowe zdjęcia rentgenowskie </li>
            <li>Ultrasonografia</li>
            <li> Radiografia cyfrowa</li>
            <li> Poradnictwo dietetyczne i żywieniowe</li>
          </ul>
        </div>

        <div className={style.list_wrapper}>
          <ul className={style.services_list}>
            <li>Lekarstwo na fretki, kieszonkowe zwierzaki i gady</li>
            <li> Opieka geriatryczna </li>
            <li> Operacja laserowa</li>
            <li> Endoskopia</li>
            <li> Mikroczipowanie</li>
            <li>Karmy dla zwierząt na receptę </li>
          </ul>
        </div>

        <div className={style.list_wrapper}>
          <ul className={style.services_list}>
            <li> Testy laboratoryjne w domu </li>
            <li> Pełne usługi chirurgiczne</li>
            <li> Terapia laserowa</li>
            <li> Akupunktura</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Header
