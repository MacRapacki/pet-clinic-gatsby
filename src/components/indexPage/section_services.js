import React from "react"

import style from "./section_services.module.css"

const SectionServices = () => {
  return (
    <>
      <section className={style.section}>
        <h2 className={style.title}>
          {" "}
          Z przyjemnością oferujemy następujące usługi:{" "}
        </h2>
        <div className={style.overlay}>
          <div
            data-sal="slide-down"
            data-sal-easing="ease-out"
            data-sal-duration="500"
            className={style.list_wrapper}
          >
            <ul className={style.services_list}>
              <li> Kompleksowa opieka nad zwierzętami towarzyszącymi </li>{" "}
              <li> Stomatologia i cyfrowe zdjęcia rentgenowskie </li>{" "}
              <li> Ultrasonografia </li> <li> Radiografia cyfrowa </li>{" "}
              <li> Poradnictwo dietetyczne i żywieniowe </li>{" "}
            </ul>{" "}
          </div>
          <div
            data-sal="slide-down"
            data-sal-easing="ease-out"
            data-sal-duration="500"
            className={style.list_wrapper}
          >
            <ul className={style.services_list}>
              <li> Lekarstwo na fretki, kieszonkowe zwierzaki i gady </li>{" "}
              <li> Opieka geriatryczna </li> <li> Operacja laserowa </li>{" "}
              <li> Endoskopia </li> <li> Mikroczipowanie </li>{" "}
              <li> Karmy dla zwierząt na receptę </li>{" "}
            </ul>{" "}
          </div>
          <div
            data-sal="slide-down"
            data-sal-easing="ease-out"
            data-sal-duration="500"
            className={style.list_wrapper}
          >
            <ul className={style.services_list}>
              <li> Testy laboratoryjne w domu </li>{" "}
              <li> Pełne usługi chirurgiczne </li> <li> Terapia laserowa </li>{" "}
              <li> Akupunktura </li>{" "}
            </ul>{" "}
          </div>
        </div>{" "}
      </section>{" "}
    </>
  )
}

export default SectionServices
