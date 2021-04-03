import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Hero from "../components/homepage/hero"
import Layout from "../constants/layout"
import AppsComponent from "../components/apps/apps";
import SignUp from "../components/forms/signup";
import CreatedBy from "../components/homepage/createdby";
import SEO from "../components/seo";
import Howdoesitwork from "../components/homepage/howdoesitwork"
import Pricetable from "../components/homepage/pricetable"

// markup
const IndexPage = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>

    <SEO title={'Briefrr'} description={'The perfect practice ground for creators.'} />
      
    <Hero  />

    <Howdoesitwork />

    <Pricetable />

    <CreatedBy />

    <div className="my-20 lg:my-36 flex flex-col items-center">


      <div>
      <h2 className="text-blue-500 dark:text-green-200 text-3xl lg:text-4xl text-center my-0">Discover Resources</h2>
      <h3 className="text-gray-500 dark:text-white text-lg lg:text-2xl text-center mt-2 mb-8 lg:mb-12 font-normal">Browse our library of over <b className="font-bold">200</b> resources</h3>
      </div>

      <div>
    <AppsComponent articles={data.allSanityApps.edges} />
    </div>

    <div>
      <Link to="/resources">
    <button className="mt-10 bg-blue-500 hover:bg-blue-700 rounded-full px-6 py-3 text-white font-semibold transition duration-500 ease-in-out transform hover:scale-105">
      View all resources
    </button>
    </Link>
    </div>
    </div>

    <div className="mt-20 lg:mt-36 lg:mb-0 w-full">
      <SignUp  />
    </div>

    </Layout>
  )
}

export const query = graphql`
{
  allSanityApps(limit: 3) {
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
        totalCount
      }
    }    
`

export default IndexPage
