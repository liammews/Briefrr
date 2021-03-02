import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../constants/layout"
import Hero from "../components/resources/iconshero"
import AppsComponent from "../components/apps/apps";
import SignUp from "../components/forms/signup";


// markup
const ResourcePage = () => {
    const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero />
      <AppsComponent articles={data.allSanityApps.edges} />
      <div className="w-full mt-8">
        <SignUp  />
      </div>
    </Layout>
  )
}

export const query = graphql`
{
    allSanityApps(filter: {catagory: {eq: "icons"}}, sort: {fields: name}) {
        edges {
          node {
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
