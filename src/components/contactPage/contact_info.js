import React from "react"
import Location from "../indexPage/location"
import ContactSection from "../indexPage/section_contact"
import style from "./contact_info.module.css"

const ContactInfo = () => {
  return (
    <section className={style.section}>
      <h2 className={style.title}>Skontaktuj się z nami</h2>
      <div className={style.overlay}>
        {/* section from index page */}
        <ContactSection />
        <Location />
      </div>
    </section>
  )
}

export default ContactInfo
