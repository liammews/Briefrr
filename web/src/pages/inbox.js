import React from "react"
import Layout from "../constants/layout"
import Hero from "../components/inbox/inboxhero"
import BriefComponent from "../components/briefs/briefs"
import { graphql, useStaticQuery } from "gatsby"
import SignUp from "../components/forms/signup"
import SubHero from "../components/inbox/inboxsubhero"

export const query = graphql`
{
  allSanityBriefs(sort: {order: DESC, fields: _createdAt}) {
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
const Inbox = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero />
      <SubHero />
      <BriefComponent articles={data.allSanityBriefs.edges} />

      <div className="w-full">
        <SignUp  />
      </div>

    </Layout>
  )
}

export default Inbox
