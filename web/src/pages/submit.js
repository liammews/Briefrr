import React from "react"
import Layout from "../constants/layout"
import SubmitCard from "../components/forms/submitcard";
import SEO from "../components/seo"

// markup
const ContactPage = () => {

  return (
    <Layout>
    <SEO title={'Submit'} description={'Submit your work to Briefrr.'} />
    <SubmitCard  />

    </Layout>
  )
}

export default ContactPage
