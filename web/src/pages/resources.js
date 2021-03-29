import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../constants/layout"
import Hero from "../constants/pagehero"
import AppsComponent from "../components/apps/apps";
import SignUp from "../components/forms/signup";
import Resourcecatlinks from "../constants/resourcecatlinks";
import SEO from "../components/seo";


// markup
const ResourcePage = () => {
    const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero title="Resources" linklabel="Back to Home" link="/" />
      <SEO title={'Resources'} />
      <Resourcecatlinks  />
      <AppsComponent articles={data.allSanityApps.edges} />
      <Resourcecatlinks className />
      <div className="w-full mt-8 mb-8">
        <SignUp  />
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allSanityApps{
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
