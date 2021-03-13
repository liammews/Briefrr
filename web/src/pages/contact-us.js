import React from "react"
import Layout from "../constants/layout"
import ContactCard from "../components/forms/contactcard";
import SEO from "../components/seo"

// markup
const ContactPage = () => {

  return (
    <Layout>
    <SEO title={'Contact'} description={'Contact Breifrr'} />
    <ContactCard  />

    </Layout>
  )
}

export default ContactPage
