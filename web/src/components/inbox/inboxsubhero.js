import React from "react"
import { Link } from "gatsby"

const SubHero = () => {
    return(
        <div className="flex flex-row justify-between w-full bg-white dark:bg-darkgray-900 rounded-md shadow-md p-4 lg:p-10 mb-8">

                <div className="flex flex-col">
                        
                        <h3 className="text-xl mt-0 mb-6">Get field specific briefs. <br></br> What type of creator are you?</h3>
                        <div className="flex flex-row flex-wrap">
                        <div>
                            <Link to="/graphic-design">
                            <button className="flex-shrink-0 bg-green-200 text-green-700 rounded-full px-4 py-2 font-normal transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
                                Graphic Design
                            </button>
                            </Link>
                        </div>

                        <div>
                            <Link to="/ui-design">
                            <button className="flex-shrink-0 bg-pink-200 text-pink-700 rounded-full px-4 py-2 font-normal transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
                                UI Design
                            </button>
                            </Link>
                        </div>

                        <div>
                            <Link to="/logo-design">
                            <button className="flex-shrink-0 bg-purple-200 text-purple-700 rounded-full px-4 py-2 font-normal transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
                                Logo Design
                            </button>
                            </Link>
                        </div>
                        </div>
                    </div>

                <div className="hidden lg:flex max-w-md transform rotate-6">
                <p className="text-4xl text-center text-gray-300 dark:text-darkgray-500 font-caveat">"Everything is designed, few things are designed well."</p>
                </div>

        </div>
    )
}
export default SubHero;