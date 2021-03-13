import React from "react"
import { Link } from "gatsby"

const Hero = () => {
    return(
        <div className="flex flex-col">
        
        <div><Link href="/inbox" className="no-underline"><p className="text-blue-500">← Back To Inbox</p></Link></div>
        <h1 className="text-4xl lg:text-5xl dark:text-white">Logo Design</h1>
        
        <hr className="dark:border-gray-700 my-8"></hr>
      </div>
    )
}
export default Hero;