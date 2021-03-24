import React from "react"
import SEO from "../components/seo"
import Layout from "../constants/layout"
import BriefPageComponent from "../components/briefs/briefpage"

export const query = graphql`
query BlogPostTemplateQuery($id: String!) {
  post: sanityBriefs(id: {eq: $id}) {
      id
      avatar {
        asset {
          fluid {
            src
          }
        }
      }
      catagory
      from
      link
      publishedAt
      slug {
        current
      }
      subject
      title
      _rawAudience
      _rawClientBackground
      _rawLookAndFeel
      _rawOverview
      _rawSlug
      buttoncolour
      buttontext
      packnum
            }
          }
        `

        const BlogPostTemplate = props => {
            const { data } = props
            const post = data && data.post
            return (
    <Layout>
      <SEO title={`${post.from} | ${post.catagory} Brief`} description={post.title} />
      <BriefPageComponent {...post} />
    </Layout>

  )
}
export default BlogPostTemplate