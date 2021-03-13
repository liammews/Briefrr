import React from "react"
import Layout from "../constants/layout"
import Hero from "../components/graphic design/gd-hero"
import BriefComponent from "../components/briefs/briefs"
import { graphql, useStaticQuery } from "gatsby"
import SignUp from "../components/forms/signup"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityBriefs(filter: {catagory: {eq: "Graphic Design"}}, sort: {order: DESC, fields: _createdAt}) {
    edges {
      node {
        avatar {
          asset {
            fluid {
              src
            }
          }
        }
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
      <SEO title={'Graphic Design'} description={'Get graphic design practice briefs.'} />
      <Hero />
      <BriefComponent articles={data.allSanityBriefs.edges} />

      <div className="w-full">
        <SignUp  />
      </div>

    </Layout>
  )
}

export default IndexPage
