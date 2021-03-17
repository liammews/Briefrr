import React from "react"
import Layout from "../constants/layout"
import SEO from "../components/seo";
import {Link} from "gatsby"

// markup
const SuggestPage = () => {

  return (
    <Layout>
    <SEO title={'Thank you!'} />

    <div className="h-xl overflow-hidden relative flex flex-col items-center w-full rounded-md bg-blue-500 shadow-md px-4 py-12 lg:py-40">
            
            <div className="w-full lg:mb-4 lg:max-w-3xl z-40 bg-opacity-90 rounded-lg">
                <h1 className="text-7xl lg:text-8xl text-green-200 mb-4 text-center font-caveat">Thank you!</h1>
                <h3 className="text-xl text-white font-normal mb-4 text-center">Thanks for getting in touch, we will get back to you as soon as possible!</h3>
            </div>

            <div className="flex flex-row z-40">
            <Link to="/">
            <button className="font-manrope mb-4 lg:mt-0 mt-4 px-6 py-4 bg-green-200 text-blue-500 font-bold rounded-md shadow-md transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                Go back to home
            </button>
            </Link>
            </div>

            <div className="absolute px-4 lg:px-12 -bottom-10 w-full flex flex-row justify-between items-baseline">
            <div>
                <img className="flex-shrink-0" src="https://cdn.sanity.io/images/j2di4tpb/production/33e5ea9fea923f5f6688e6831802d606474782b7-257x354.png" alt="male illustration" />
            </div>
            <div>
                <img className="lg:pr-10 flex-shrink-0" src="https://cdn.sanity.io/images/j2di4tpb/production/3f571e8ca8adf20d35bee04f984cbade0e78144e-236x383.png" alt="female illustration" />
            </div>
            </div>

        </div>


    </Layout>
  )
}

export default SuggestPage
