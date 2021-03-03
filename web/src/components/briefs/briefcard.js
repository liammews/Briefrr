import React, { useState } from "react"
import { BiUser } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import BlockContent from '../block-content'


// markup
const Briefcard = ({ article }) => {
    const [isExpanded, toggleExpansion] = useState(false)

  return (

      <div>
      <div className="flex flex-col w-full bg-white dark:bg-gray-900 rounded-md shadow-md p-4 lg:p-10 mb-8">
      
      <div className="flex flex-col lg:flex-row justify-start lg:justify-between lg:items-center lg:space-x-4">
      <div className="flex flex-col">
      <div className="flex flex-row items-center justify-between mb-2">
        <div className="flex-row flex items-center space-x-2">
        <p className="dark:text-white text-lg m-0"> <BiUser /></p>
        <p className="dark:text-white font-semibold text-lg m-0">{article.node.from}</p>
        </div>

        <div className="">
          <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `relative lg:hidden` : `hidden` } bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105`}><FaTimes /></button>
          </div>
          
      </div>

      <p className={`${ isExpanded ? `hidden` : `inline` } max-w-4xl text-gray-500 dark:text-gray-300 m-0`}>{article.node.subject}</p>
      </div>

      <div className="mt-4 lg:mt-0">
        <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `hidden` : `inline` } bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105`}>Read Brief</button>
        <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `lg:inline hidden` : `hidden` } bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105`}><FaTimes /></button>
        </div>

      </div>

      <div className={`${ isExpanded ? `flex` : `hidden` } max-w-4xl -mt-8`}>
        <div className="">
        <p className="dark:text-white">{article.node._rawBody && <BlockContent blocks={article.node._rawBody} />}</p>
        </div>
      </div>

      </div>


      </div>

  )
}

export default Briefcard