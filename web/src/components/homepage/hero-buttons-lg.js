import React from "react"
import { Link } from "gatsby"

const Hero = () => {
    return(
        
        <div className="flex flex-row flex-wrap justify-center lg:space-x-4 mt-4 lg:mt-0">
            <Link to="/graphic-design">
            <button className="mb-4 mr-4 lg:mr-0 px-4 py-2 bg-white bg-opacity-90 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">Graphic Designer</button>
            </Link>
            <Link to="/ui-design">
            <button className="mb-4 px-4 py-2 bg-white bg-opacity-90 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">UI Designer</button>
            </Link>
            <Link to="/web-development">
            <button className="px-4 mr-4 lg:mr-0 py-2 bg-white bg-opacity-90 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">Web Developer</button>
            </Link>
            <Link to="/logo-design">
            <button className="px-4 py-2 bg-white bg-opacity-90 rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">Logo Designer</button>
            </Link>
        </div>

    )
}
export default Hero;