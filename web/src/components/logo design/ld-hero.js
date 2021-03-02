import React from "react"

const Hero = () => {
    return(
        <div className="flex flex-col">
        
        <div><p className="dark:text-gray-300 mb-2">Inbox</p></div>
        <div className="flex flex-row space-x-2">
        <div><h1 className="text-5xl font-semibold dark:text-white">Logo Design</h1></div>
        <div className="rounded-full pt-1 bg-gradient-to-r from-red-500 to-red-700 h-8 w-8 shadow-md text-white font-medium text-center"><p className="m-0 text-white">5</p></div>
        </div>
        
        <hr className="dark:border-gray-700 my-8"></hr>
      </div>
    )
}
export default Hero;