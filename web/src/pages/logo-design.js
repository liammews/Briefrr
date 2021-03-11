import React from "react"
import Layout from "../constants/layout"
import Hero from "../components/logo design/ld-hero"
import BriefComponent from "../components/briefs/briefs"
import { graphql, useStaticQuery } from "gatsby"
import SignUp from "../components/forms/signup"

export const query = graphql`
{
  allSanityBriefs(filter: {catagory: {eq: "Logo Design"}}, sort: {order: DESC, fields: _createdAt}) {
    edges {
      node {
        id
        from
        _rawBody
        subject
      }
    }
    totalCount
  }
}
`

// markup
const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero />
      <BriefComponent articles={data.allSanityBriefs.edges} />
      <div className="w-full mt-8 mb-8">
        <SignUp  />
      </div>

    </Layout>
  )
}

export default IndexPage
