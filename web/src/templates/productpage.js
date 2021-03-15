import React from "react"
import SEO from "../components/seo"
import Layout from "../constants/layout"
import ProductPageComponent from "../components/productpage"

export const query = graphql`
{
  post: sanityProducts {
    id
    image {
      asset {
        fluid {
          src
        }
      }
    }
    guid
    itemid
    link
    name
    price
    description
    catagory
    _rawFulldescription
    _rawOverview
  }
}  `

const ProductTemplate = props => {
  const { data } = props
  const post = data && data.post
  return (
    <Layout>
      <SEO title={post.name} description={post.description} />
      <ProductPageComponent {...post} />
    </Layout>

  )
}
export default ProductTemplate