import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../constants/layout"
import Hero from "../constants/pagehero"
import AppsComponent from "../components/apps/apps";
import SignUp from "../components/forms/signup";
import ResourceCatLinks from "../constants/resourcecatlinks"
import SEO from "../components/seo";


// markup
const ResourcePage = () => {
    const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero title="Images" linklabel="Back to Resources" link="resources" />
      <SEO title={'Image'} />
      <AppsComponent articles={data.allSanityApps.edges} />
      <div className="w-full mt-8 mb-8">
      <ResourceCatLinks  />
        <SignUp  />
      </div>
    </Layout>
  )
}

export const query = graphql`
{
    allSanityApps(filter: {catagory: {eq: "images"}}, sort: {fields: name}) {
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

export default ResourcePage
