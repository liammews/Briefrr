import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../constants/layout"
import Hero from "../components/premium/storehero"
import StoreComponent from "../components/premium/productlayout";
import SignUp from "../components/forms/signup";
import SEO from "../components/seo";


// markup
const PremiumPage = () => {
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

export default PremiumPage