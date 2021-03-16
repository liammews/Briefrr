import React from "react"
import Layout from "../constants/layout"
import Hero from "../components/inbox/inboxhero"
import BriefComponent from "../components/briefs/briefs"
import { graphql, useStaticQuery } from "gatsby"
import SignUp from "../components/forms/signup"
import SubHero from "../components/inbox/inboxsubhero"
import SEO from "../components/seo"

export const query = graphql`
{
  allSanityBriefs(sort: {order: ASC, fields: publishedAt}) {
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
const Inbox = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero />
      <SEO title={'Inbox'} />
      <SubHero />
      <BriefComponent articles={data.allSanityBriefs.edges} />

      <div className="w-full">
        <SignUp  />
      </div>

    </Layout>
  )
}

export default Inbox
