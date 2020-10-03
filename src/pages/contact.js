import React from "react"

import Layout from "../components/layout"
import Location from "../components/indexPage/location"
import ContactInfo from "../components/contactPage/contact_info"

const ContactPage = () => {
  return (
    <Layout>
      <ContactInfo />
      <Location />
    </Layout>
  )
}

export default ContactPage
