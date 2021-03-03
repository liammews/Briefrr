import { Link } from "gatsby"
import React from "react"

const Hero = () => {
    return(
        <div className="flex flex-col items-center w-full rounded-md title-background bg-white-900 dark:bg-gray-900 shadow-md px-4 py-12 lg:py-40">
            <div className="w-full lg:mb-4 lg:max-w-3xl z-40">
                <h1 className="text-4xl lg:text-5xl text-black dark:text-white font-semibold mb-4 text-center">The perfect practice ground <br className="hidden lg:inline"  />for designers</h1>
                <h3 className="text-xl text-black dark:text-white font-normal mb-4 text-center">Briefrr gives you free <b>realistic</b> practice briefs + over <b>100</b> resources.</h3>
            </div>

            <div className="flex flex-row z-40">
            <Link>
            <button className="mb-4 lg:mt-0 mt-4 px-4 py-2 bg-blue-500 text-white  bg-opacity-90 rounded-md shadow-md transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                Check your inbox!
            </button>
            </Link>
            </div>

        </div>
    )
}
export default Hero;