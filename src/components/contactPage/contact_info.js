import React from "react"

import ContactSection from "../indexPage/section_contact"
import style from "./contact_info.module.css"

const ContactInfo = () => {
  return (
    // section from index page

    <section className={style.section}>
      <ContactSection />
    </section>
  )
}

export default ContactInfo
