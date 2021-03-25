import React from "react"
import { Link } from "gatsby"

const Hero = ( { title, linklabel, link } ) => {
    return(
        <div className="flex flex-col">
        
        <div><Link to={`/${link}`} className="no-underline"><p className="text-blue-500 dark:text-green-300 no-underline">← {linklabel}</p></Link></div>
        <h1 className="text-4xl lg:text-5xl dark:text-white">{title}</h1>
        
        <hr className="dark:border-darkgray-700 my-8"></hr>
      </div>
    )
}
export default Hero;