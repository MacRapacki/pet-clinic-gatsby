import React from "react"

import style from "./section_to_know.module.css"

const SectionToKnow = () => {
  return (
    <>
      <section className={style.section}>
        <h2
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.section}
        >
          {" "}
          Rzeczy, które musisz wiedzieć.{" "}
        </h2>

        <p
          data-sal="slide-down"
          data-sal-easing="ease-out"
          data-sal-duration="500"
          className={style.section}
          className={style.description}
        >
          Zwierzęta domowe mogą uchronić Cię przed samotnością i dać poczucie
          spełnienia. Najlepszą rzeczą, jaką możesz zrobić, aby ich wynagrodzić,
          jest dbanie o nie. Aby zwierzę było szczęśliwe i zdrowe, musisz zabrać
          je do lokalnego weterynarza na regularne badania lekarskie. Twoje
          oswojone zwierzę potrzebuje szczepień przeciwko wściekliźnie, nosówce
          i innym powszechnym chorobom. Ważne jest również, aby chronić swojego
          zwierzaka przed pasożytami, takimi jak pchły i tasiemce. Aby
          zmniejszyć liczbę niechcianych zwierząt, zastanów się nad pomysłem
          sterylizacji zwierzęcia. Koty i psy często się gubią, dlatego rozsądne
          jest włożenie mikroczipa pod skórę małego przyjaciela. W ten sposób na
          pewno znajdziesz go gdziekolwiek jest.
        </p>
      </section>{" "}
    </>
  )
}

export default SectionToKnow
