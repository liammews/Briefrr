import { Link } from "gatsby"
import React from "react"

const Hero = () => {
    return(
        <div className="h-xl overflow-hidden relative flex flex-col items-center w-full rounded-md bg-blue-500 shadow-md px-4 py-12 lg:py-40">
            
            <div className="w-full lg:mb-4 lg:max-w-3xl z-40 bg-blue-500 bg-opacity-90 feathered rounded-lg">
                <h1 className="text-4xl lg:text-5xl text-white mb-4 text-center">The perfect practice ground <br className="hidden lg:inline"  />for<b className="text-green-200 font-caveat text-5xl lg:text-7xl"> creators</b></h1>
                <h3 className="text-xl text-white font-normal mb-4 text-center">Briefrr gives you <b>realistic</b> practice briefs <br className="inline lg:hidden"  /> + a library of over <b>200</b> resources.</h3>
            </div>

            <div className="flex flex-row z-40">
            <Link to="/inbox">
            <button className="font-manrope mb-4 lg:mt-0 mt-4 px-6 py-4 bg-green-200 text-blue-500 font-bold rounded-md shadow-md transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                Get started!
            </button>
            </Link>
            </div>

            <div className="absolute px-12 -bottom-10 w-full flex flex-row justify-between">
            <div>
                <img src="https://cdn.sanity.io/images/j2di4tpb/production/da58dc99dbac0383ae61d55d0c90ec4a6bbcd006-290x400.png" alt="male illustration" />
            </div>
            <div>
                <img className="transform pr-10"src="https://cdn.sanity.io/images/j2di4tpb/production/acc693d34d4a09df7f5c46fb66b5092ba51bfe64-256x400.png" alt="female illustration" />
            </div>
            </div>

        </div>
    )
}
export default Hero;