import React from "react"
import SEO from "../components/seo"
import Layout from "../constants/layout"
import BriefPageComponent from "../components/briefs/briefpage"

export const query = graphql`
{
    post: sanityBriefs {
        title
        subject
        publishedAt
        link
        from
        catagory
        id
        avatar {
          asset {
            fluid {
              src
            }
          }
        }
        _rawAudience
        _rawClientBackground
        _rawDelivery
        _rawObjectives
        _rawOverview
      }
    }
      `

const ProductTemplate = props => {
  const { data } = props
  const post = data && data.post
  return (
    <Layout>
      <SEO title={post.title} description={post.title} />
      <BriefPageComponent {...post} />
    </Layout>

  )
}
export default ProductTemplate