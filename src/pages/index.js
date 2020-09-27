import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/indexPage/header"
import SectionServices from "../components/indexPage/section_services"
import SectionAllPets from "../components/indexPage/section_all_pets"
import SectionContact from "../components/indexPage/section_contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Pet Clinic" />
    <Header />
    <SectionServices />
    <SectionAllPets />
    <SectionContact />
  </Layout>
)

export default IndexPage
