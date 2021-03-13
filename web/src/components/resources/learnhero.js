import React from "react"

const Hero = () => {
    return(
        <div className="flex flex-col">
        
        <div><p className="dark:text-gray-300 mb-2">Resources</p></div>
        <div className="flex flex-row space-x-2">
        <div><h1 className="text-5xl dark:text-white">Learn</h1></div>
        </div>
        
        <hr className="dark:border-gray-700 my-8"></hr>
      </div>
    )
}
export default Hero;