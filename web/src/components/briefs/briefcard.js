import React, { useState } from "react"
import { FaTimes } from "react-icons/fa"
import BlockContent from '../block-content'
import { Link } from 'gatsby'


// markup
const Briefcard = ({ article }) => {
    const [isExpanded, toggleExpansion] = useState(false)

  return (

      <div>
      <div className="flex flex-col w-full h-56 bg-white dark:bg-darkgray-900 rounded-md shadow-sm p-4 lg:p-10">
      
        <div className="flex flex-row space-x-8">
          <div className="flex-shrink-0">
            <img className="h-20 w-20 rounded-full border-2 border-gray-50 shadow-sm"src={`${article.node.avatar.asset.fluid.src}`}></img>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium m-0 mb-1">{article.node.from}</p>
            <p className="text-xl font-manrope text-black font-bold m-0">{article.node.title}</p>
          </div>
        </div>

        <div className="flex flex-row mt-8 justify-between">

            <div className="bg-green-200 rounded-full px-3 py-1 shadow-sm transition duration-500 ease-in-out transform hover:scale-105 flex flex-row justify-center items-center">
                    <div><p className="capitalize m-0 text-sm text-green-700">{article.node.catagory}</p></div>
            </div>

            <Link to={`/${article.node.link}`} className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105">
                    <button>
                        Start Brief!
                    </button>
                </Link>


        </div>


      </div>
      </div>

  )
}

export default Briefcard