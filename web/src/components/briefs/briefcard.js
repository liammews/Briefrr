import React, { useState } from "react"
import { BiUser } from "react-icons/bi"
import { FaTimes } from "react-icons/fa"
import BlockContent from '../block-content'


// markup
const Briefcard = ({ article }) => {
    const [isExpanded, toggleExpansion] = useState(false)

  return (

      <div>
      <div className="flex flex-col w-full bg-white dark:bg-gray-900 rounded-md shadow-md p-10 mb-8">
      
      <div className="flex flex-row justify-between items-center space-x-4">
      <div className="flex flex-col">
      <div className="flex flex-row space-x-2 items-center mb-2">
      <p className="dark:text-white text-lg m-0"> <BiUser /></p>
      <p className="dark:text-white font-semibold text-lg m-0">{article.node.from}</p>
      </div>

      <p className={`${ isExpanded ? `hidden` : `inline` } max-w-4xl text-gray-500 dark:text-gray-400 m-0`}>{article.node.subject}</p>
      </div>

      <div>
        <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `hidden` : `inline` } bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105`}>Read Brief</button>
        <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `realtive` : `hidden` } bg-blue-500 hover:bg-blue-600 rounded-md p-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105`}><FaTimes /></button>
        </div>

      </div>

      <div className={`${ isExpanded ? `flex` : `hidden` } max-w-4xl`}>
        <div className="">
        <p className="dark:text-white">{article.node._rawBody && <BlockContent blocks={article.node._rawBody} />}</p>
        </div>
      </div>

      </div>


      </div>

  )
}

export default Briefcard