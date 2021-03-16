import React from "react"
import Layout from "../constants/layout"
import Hero from "../components/logo design/ld-hero"
import BriefComponent from "../components/briefs/briefs"
import { graphql, useStaticQuery } from "gatsby"
import SignUp from "../components/forms/signup"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityBriefs(filter: {catagory: {eq: "Logo Design"}}, sort: {order: DESC, fields: _createdAt}) {
    edges {
      node {
        _rawOverview
        _rawObjectives
        _rawDelivery
        _rawClientBackground
        _rawAudience
        avatar {
          asset {
            fluid {
              src
            }
          }
        }
        catagory
        from
        publishedAt
        link
        subject
        title
      }
    }
  }
}
`

// markup
const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero />
      <SEO title={'Logo Design'} />
      <BriefComponent articles={data.allSanityBriefs.edges} />
      <div className="w-full mt-8 mb-8">
        <SignUp  />
      </div>

    </Layout>
  )
}

export default IndexPage
