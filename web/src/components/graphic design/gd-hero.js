import React from "react"

const Hero = () => {
    return(
        <div className="flex flex-col">
        
        <div><a href="/inbox" className="no-underline"><p className="text-blue-500">← Back To Inbox</p></a></div>
        <h1 className="text-4xl lg:text-5xl dark:text-white">Graphic Design</h1>
        
        <hr className="dark:border-gray-700 my-8"></hr>
      </div>
    )
}
export default Hero;