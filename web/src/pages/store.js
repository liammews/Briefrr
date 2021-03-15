import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../constants/layout"
import Hero from "../components/store/storehero"
import StoreComponent from "../components/store/storelayout";
import SignUp from "../components/forms/signup";
import SEO from "../components/seo";


// markup
const ResourcePage = () => {
    const data = useStaticQuery(query);

  return (
    <Layout>
      <Hero />
      <SEO title={'Store'} />
      <StoreComponent articles={data.allSanityProducts.edges} />
      <div className="w-full mt-8 mb-8">
        <SignUp  />
      </div>
    </Layout>
  )
}

export const query = graphql`
{
  allSanityProducts {
    edges {
      node {
        id
        price
        name
        description
        catagory
        slug {
          current
        }
        link
        image {
          asset {
            fluid {
              src
            }
          }
        }
      }
    }
  }
    }    
`

export default ResourcePage
