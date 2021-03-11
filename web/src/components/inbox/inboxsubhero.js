import React from "react"
import { Link } from "gatsby"

const SubHero = () => {
    return(
      <div className="flex flex-col w-full bg-white dark:bg-gray-900 rounded-md shadow-md p-4 lg:p-10 mb-8">
        
          <h3 className="text-2xl font-semibold mt-0 mb-6">Get field specific briefs. <br></br> What type of creator are you?</h3>
          <div className="flex flex-row flex-wrap">
            <div>
                <Link>
                <button className="flex-shrink-0 bg-gradient-to-b from-green-400 to-green-500 rounded-full px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
                    Graphic Design
                </button>
                </Link>
            </div>

            <div>
                <Link>
                <button className="flex-shrink-0 bg-gradient-to-b from-pink-400 to-pink-500 rounded-full px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
                    UI Design
                </button>
                </Link>
            </div>

            <div>
                <Link>
                <button className="flex-shrink-0 bg-gradient-to-b from-yellow-400 to-yellow-500 rounded-full px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
                    Web Development
                </button>
                </Link>
            </div>

            <div>
                <Link>
                <button className="flex-shrink-0 bg-gradient-to-b from-purple-400 to-purple-500 rounded-full px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
                    Logo Design
                </button>
                </Link>
            </div>
          </div>
      </div>
    )
}
export default SubHero;