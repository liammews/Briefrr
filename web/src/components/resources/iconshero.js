import React from "react"
import { Link } from "gatsby"

const Hero = () => {
    return(
        <div className="flex flex-col">
        
        <div><Link to="/resources"><p className="text-blue-500 dark:text-green-300">← Back to all resources</p></Link></div>
        <h1 className="text-4xl lg:text-5xl dark:text-white">Icons</h1>

        <hr className="dark:border-darkgray-700 my-8"></hr>
      </div>
    )
}
export default Hero;