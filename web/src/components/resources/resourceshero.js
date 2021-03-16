import React from "react"
import { Link } from "gatsby"

const Hero = () => {
    return(
        <div className="flex flex-col">
        
        <div><Link to="/" className="no-underline"><p className="text-blue-500 dark:text-green-300 no-underline">← Back To Home</p></Link></div>
        <h1 className="text-4xl lg:text-5xl dark:text-white">All Resources</h1>
        
        <hr className="dark:border-darkgray-700 my-8"></hr>
      </div>
    )
}
export default Hero;