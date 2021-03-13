import React from "react"
import Layout from "../constants/layout"
import SuggestCard from "../components/forms/suggestcard";
import SEO from "../components/seo";

// markup
const SuggestPage = () => {

  return (
    <Layout>
    <SEO title={'Suggest A Resource'} />
    <SuggestCard  />

    </Layout>
  )
}

export default SuggestPage
