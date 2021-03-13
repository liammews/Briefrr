import React from "react"
import Layout from "../constants/layout"
import Hero from "../components/web development/web-hero"
import BriefComponent from "../components/briefs/briefs"
import { graphql, useStaticQuery } from "gatsby"
import SignUp from "../components/forms/signup"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityBriefs(filter: {catagory: {eq: "Web Development"}}, sort: {order: DESC, fields: _createdAt}) {
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
      <SEO title={'Web Development'} />
      <BriefComponent articles={data.allSanityBriefs.edges} />

      <div className="w-full">
        <SignUp  />
      </div>

    </Layout>
  )
}

export default IndexPage
