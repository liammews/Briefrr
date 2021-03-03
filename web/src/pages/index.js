import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Hero from "../components/homepage/hero"
import Layout from "../constants/layout"
import AppsComponent from "../components/apps/apps";
import SignUp from "../components/forms/signup";

// markup
const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      
    <Hero></Hero>

    <div className="my-20 lg:my-36 flex flex-col items-center">


      <div>
      <h2 className="text-black dark:text-white text-3xl lg:text-4xl text-center my-0 font-medium">Discover free resources</h2>
      <h3 className="text-gray-400 text-lg lg:text-2xl text-center mt-2 mb-8 lg:mb-12 font-normal">All you need to get started on your next brief</h3>
      </div>

      <div>
    <AppsComponent articles={data.allSanityApps.edges} />
    </div>

    <div>
      <Link to="/resources">
    <button className="mt-10 bg-blue-500 hover:bg-blue-600 rounded-full px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105">
      View all resources
    </button>
    </Link>
    </div>
    </div>

    <div className="my-20 lg:mt-36 lg:mb-10 w-full">
      <SignUp  />
    </div>

    </Layout>
  )
}

export const query = graphql`
{
  allSanityApps(limit: 4, sort: {fields: _createdAt, order: DESC}) {
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

export default IndexPage
