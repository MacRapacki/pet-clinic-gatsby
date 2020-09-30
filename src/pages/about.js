import React from "react"
import Layout from "../components/layout"
import SectionAboutClinic from "../components/aboutPage/section_about_clinic"
import SectionToKnow from "../components/aboutPage/section_to_know"
import SectionTeam from "../components/aboutPage/section_team"

export default function About() {
  return (
    <Layout>
      <SectionAboutClinic />
      <SectionToKnow />
      <SectionTeam />
    </Layout>
  )
}
