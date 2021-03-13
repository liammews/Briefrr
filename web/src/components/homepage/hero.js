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

            <div className="absolute px-12 -bottom-10 w-full flex flex-row justify-between items-baseline">
            <div>
                <img className="flex-shrink-0" src="https://cdn.sanity.io/images/j2di4tpb/production/33e5ea9fea923f5f6688e6831802d606474782b7-257x354.png" alt="male illustration" />
            </div>
            <div>
                <img className=" pr-10 flex-shrink-0" src="https://cdn.sanity.io/images/j2di4tpb/production/bcd5df4f91887ae40dcdb022ca49b9222e8f0afb-229x361.png" alt="female illustration" />
            </div>
            </div>

        </div>
    )
}
export default Hero;