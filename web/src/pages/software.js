import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../constants/layout"
import Hero from "../components/resources/softwarehero"
import AppsComponent from "../components/apps/apps";
import SignUp from "../components/forms/signup";
import ResourceCatLinks from "../constants/resourcecatlinks"
import SEO from "../components/seo";


// markup
const SoftwarePage = () => {
    const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero />
      <SEO title={'Software'} />
      <AppsComponent articles={data.allSanityApps.edges} />
      <ResourceCatLinks  />
      <div className="w-full mt-8 mb-8">
        <SignUp  />
      </div>
    </Layout>
  )
}

export const query = graphql`
{
    allSanityApps(filter: {catagory: {eq: "software"}}, sort: {fields: name}) {
        edges {
          node {
            price
            catagory
            description
            icon {
              asset {
                fluid {
                  src
                }
              }
            }
            name
            link
          }
        }
      }
    }    
`

export default SoftwarePage
