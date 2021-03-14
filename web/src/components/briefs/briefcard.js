import React, { useState } from "react"
import { FaTimes } from "react-icons/fa"
import BlockContent from '../block-content'
import { Link } from 'gatsby'


// markup
const Briefcard = ({ article }) => {
    const [isExpanded, toggleExpansion] = useState(false)

  return (

      <div>
      <div className="flex flex-col w-full bg-white dark:bg-darkgray-900 rounded-md shadow-md p-4 lg:p-10 mb-8">
      
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center lg:space-x-4">
      <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between lg:mb-4">
        <div className="flex-col lg:flex-row flex space-y-2 lg:space-y-0 space-x-0 lg:space-x-4 lg:items-center">
        <div className="h-16 w-16 rounded-full bg-white border-2 border-white shadow-md"><img src={`${article.node.avatar.asset.fluid.src}`} alt="avatar" /></div>
        <p className="dark:text-white font-semibold text-xl m-0">{article.node.from}</p>
        </div>

        <div className="">
          <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `relative lg:hidden` : `hidden` } bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105`}><FaTimes /></button>
          </div>
          
      </div>

      <p className={`${ isExpanded ? `hidden` : `inline` } lg:pl-20 max-w-4xl text-gray-500 dark:text-gray-300 mt-2 lg:-mt-4`}>{article.node.subject}</p>
      </div>

      <div className="mt-4 flex-shrink-0 lg:mt-0">
        <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `hidden` : `inline` } flex-shrink-0 bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105`}>Read Brief</button>
        <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `lg:inline hidden` : `hidden` } bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105 mr-4`}><FaTimes /></button>
        </div>

      </div>

      <div className={`${ isExpanded ? `flex` : `hidden` } flex-col max-w-4xl -mt-8 lg:-mt-10`}>
        <div className="lg:pl-20">
        <p>{article.node._rawBody && <BlockContent blocks={article.node._rawBody} />}</p>
        </div>

        <div className="flex flex-row justify-between lg:pl-20 lg:mt-8">

          <div>
          <Link to="/resources">
          <button className="flex-shrink-0 bg-blue-200 text-blue-700 rounded-full px-4 py-2 font-normal transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
            View resources
          </button>
        </Link>
        </div>

        <div>
          <Link to="/inspiration">
          <button className="flex-shrink-0 bg-green-200 text-green-700 rounded-full px-4 py-2 font-normal transition duration-500 ease-in-out transform hover:scale-105 mr-4 mb-4">
            Find inspiration
          </button>
        </Link>
        </div>

          </div>

      </div>

      </div>


      </div>

  )
}

export default Briefcard