import React from "react"
import Layout from "../constants/layout"
import SEO from "../components/seo";
import { Link } from "gatsby"


// markup
const Four04Page = () => {

  return (
    <Layout>
      <SEO title={'Whoops!'} />
      <div className="w-full bg-white dark:bg-gray-900 p-4 lg:p-24 flex flex-col items-center shadow-md rounded-md">
      <div>
        <h1 className="text-9xl text-center">Oh no! 🤦🏽‍♂️</h1>
        <h2 className="text-2xl text-center font-normal">Well that wasn't meant to happen!</h2>

        </div>
        <div className="mt-12">
        <Link to="/">
          <button className="bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105 mr-4">
            Get back to safety!
          </button>
        </Link>
      </div>
      </div>

    </Layout>
  )
}

export default Four04Page
