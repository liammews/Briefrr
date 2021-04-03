import React from "react"
import Layout from "../constants/layout"
import Hero from "../constants/pagehero"
import SignUp from "../components/forms/signup";
import SEO from "../components/seo";


// markup
const ResourcePage = () => {

  return (
    <Layout>
      <Hero title="Updates" linklabel="Back to Home" link="" />
      <SEO title={'Updates'} />
      <div className="w-full mt-8 mb-8">
        <SignUp  />
      </div>
    </Layout>
  )
}

export default ResourcePage
