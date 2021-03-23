import { Link } from "gatsby"
import React from "react"
import { FaPencilRuler, FaRegListAlt } from "react-icons/fa"
import { FiPenTool } from "react-icons/fi"


const Hero = () => {
    return(
        <div className="overflow-hidden relative flex flex-col items-center w-full rounded-md bg-white dark:bg-darkgray-900 shadow-sm px-4 py-24 lg:py-40">
            
            <div className="w-full lg:mb-4 lg:max-w-3xl z-40 bg-opacity-90 rounded-lg">
                <h1 className="text-4xl lg:text-5xl text-black dark:text-darkgray-50 mb-4 text-center">The perfect practice ground <br className="hidden lg:inline"  />for<b className="text-blue-500 font-caveat text-5xl lg:text-7xl"> creators</b></h1>
                <h3 className="text-xl text-black dark:text-darkgray-50 font-normal mb-4 text-center">Briefrr gives you <b>realistic</b> practice briefs <br className="hidden lg:inline"  /> + a library of over <b>200</b> resources.</h3>
            </div>

            <div className="flex flex-row z-40">
            <Link to="/inbox">
            <button className="font-manrope mb-4 lg:mt-0 mt-4 px-6 py-4 bg-blue-500 text-white font-bold rounded-md shadow-md transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                Get started!
            </button>
            </Link>
            </div>

            <div className="hidden lg:inline">

            <div className="hidden md:inline md:absolute -right-12 -bottom-24 rounded-full w-96 h-96 bg-gray-100 dark:bg-darkgray-600 bg-opacity-50 z-0">
                <p></p>
            </div>

            <div className="hidden md:inline md:absolute right-36 -bottom-24 rounded-full w-72 h-72 bg-gray-200 dark:bg-darkgray-600 bg-opacity-20 z-0">
                <p></p>
            </div>

            <div className="absolute -left-2 -top-24 rounded-full w-72 h-72 bg-gray-200 dark:bg-darkgray-600 bg-opacity-20 z-0">
                <p></p>
            </div>

            <div className="absolute -left-2 -top-24 rounded-full w-36 h-36 bg-white dark:bg-darkgray-600 z-0">
                <p></p>
            </div>

            <div className="flex flex-row justify-center items-center absolute left-12 top-24 rounded-full w-36 h-36 z-10">
                <p className="text-5xl text-red-100 lg:text-red-400"><FiPenTool  /></p>
            </div>

            <div className="flex flex-row justify-center items-center absolute right-12 top-36 transform rotate-12 rounded-full w-36 h-36 z-10">
                <p className="text-5xl text-green-100 lg:text-green-400"><FaPencilRuler  /></p>
            </div>

            <div className="flex flex-row justify-center items-center absolute left-48 bottom-24 transform rotate-45 rounded-full w-36 h-36 z-10">
                <p className="text-5xl text-orange-100 lg:text-orange-300"><FaRegListAlt /></p>
            </div>


            <div className="flex flex-row justify-center items-center absolute right-48 bottom-24 transform rounded-full w-36 h-36 z-10">
            <svg width="50" viewBox="0 0 266 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.15372 81.8549C1.41197 75.3546 5.29496 68.6663 11.8266 66.9161L73.3251 50.4377C105.983 41.6869 139.518 60.9407 148.227 93.4422C156.936 125.944 137.521 159.385 104.862 168.136L43.3638 184.615C36.8322 186.365 30.1252 182.514 28.3835 176.014L3.15372 81.8549Z" fill="#2F80ED"/>
            <path d="M46.3597 243.102C44.6179 236.601 48.5009 229.913 55.0326 228.163L152.011 202.178C191.201 191.677 231.443 214.781 241.893 253.783L251.354 289.093C253.096 295.593 249.213 302.281 242.681 304.031L86.5698 345.861C80.0381 347.612 73.3312 343.761 71.5894 337.261L46.3597 243.102Z" fill="#2F80ED"/>
            </svg>
            </div>


            <div className="absolute -left-2 -bottom-24 opacity-40 dark:bg-opacity-5 z-0">
                <img className="h-96 dark:bg-opacity-5"src="https://cdn.sanity.io/images/j2di4tpb/production/191001dc027024cf819908bd88ac2a5c215a1ddf-970x959.png" />
            </div>

            <div className="md:inline hidden md:absolute -right-2 -top-24 opacity-40 dark:bg-opacity-5 z-0">
                <img className="h-96 dark:bg-opacity-5"src="https://cdn.sanity.io/images/j2di4tpb/production/191001dc027024cf819908bd88ac2a5c215a1ddf-970x959.png" />
            </div>

            </div>

        </div>
    )
}
export default Hero;