import React, { useState } from "react"
import { Link } from "gatsby"
import { FaEnvelope } from "react-icons/fa"

const data = [
  {
    id: 1,
    text: "Contact us",
    url: "/contact-us",
  },
  {
    id: 2,
    text: "Suggest a resource",
    url: "/suggest",
  },
]

const tempLinks = data.map(link => {
  return (
    <li className="mt-0 pl-0 text-gray-500 hover:text-blue-500 dark:text-white dark:hover:text-blue-400" key={link.id}>
      <Link className="no-underline" to={link.url}>{link.text}</Link>
    </li>
  )
})

export default ({ styleClass }) => {
  const [isExpanded, toggleExpansion] = useState(false)

  return (
    <div>
    <button onClick={() => toggleExpansion(!isExpanded)} className="focus:outline-none">
    <div className="flex flex-row space-x-2 items-center mb-4">
        <div className="transform -rotate-12 p-1 bg-green-500 text-white rounded-md shadow-lg"><p className="m-0 text-white transform rotate-12"><FaEnvelope /></p></div>
        <div><p className="font-semibold dark:text-white m-0">Let's chat</p></div>
        </div>
    </button>
    <ul className={`${ isExpanded ? `flex flex-col` : `hidden` } ${styleClass ? styleClass : ""} pl-0 list-none my-0 space-y-2`}>
      {tempLinks}
    </ul>
    </div>
  )
}
