import React from "react"

import ContactSection from "../indexPage/section_contact"
import style from "./contact_info.module.css"

const ContactInfo = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Skontaktuj się z nami</h2>

      {/* section from index page */}
      <ContactSection />
    </section>
  )
}

export default ContactInfo
