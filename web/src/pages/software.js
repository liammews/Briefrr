import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../constants/layout"
import Hero from "../components/resources/softwarehero"
import AppsComponent from "../components/apps/apps";
import SignUp from "../components/forms/signup";
import ViewAll from "../components/resources/viewall";


// markup
const SoftwarePage = () => {
    const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero />
      <AppsComponent articles={data.allSanityApps.edges} />
      <ViewAll />
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