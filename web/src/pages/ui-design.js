import React from "react"
import Layout from "../constants/layout"
import Hero from "../components/ui design/ui-hero"
import BriefComponent from "../components/briefs/briefs"
import { graphql, useStaticQuery } from "gatsby"
import SignUp from "../components/forms/signup"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityBriefs(filter: {catagory: {eq: "UI Design"}}, sort: {order: DESC, fields: _createdAt}) {
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
      <SEO title={'UI Design'} />
      <BriefComponent articles={data.allSanityBriefs.edges} />

      <div className="w-full">
        <SignUp  />
      </div>

    </Layout>
  )
}

export default IndexPage
