import React, { useState } from "react"
import { Link } from "gatsby"
import { FiLayers } from "react-icons/fi"

const data = [
  {
    id: 1,
    text: "All",
    url: "/resources",
  },
  {
    id: 2,
    text: "Icons",
    url: "/icons",
  },
  {
    id: 3,
    text: "Images",
    url: "/images",
  },
  {
    id: 4,
    text: "Learn",
    url: "/learn",
  },
  {
    id: 5,
    text: "Type",
    url: "/type",
  },
  {
    id: 6,
    text: "Software",
    url: "/software",
  },
  {
    id: 7,
    text: "Inspiration",
    url: "/inspiration",
  },
  {
    id: 8,
    text: "Colour",
    url: "/colour",
  },
  {
    id: 9,
    text: "Podcasts",
    url: "/podcasts",
  },
  {
    id: 10,
    text: "Design Tools",
    url: "/design-tools",
  },
  {
    id: 11,
    text: "Development Tools",
    url: "/dev-tools",
  },
  {
    id: 12,
    text: "Mockups",
    url: "/mockups",
  },
  {
    id: 13,
    text: "Illustrations",
    url: "/illustrations",
  },
  {
    id: 14,
    text: "Accessibility",
    url: "/accessibility",
  },
  {
    id: 15,
    text: "Cool People",
    url: "/cool-people",
  },
  {
    id: 16,
    text: "Show Off",
    url: "/show-off",
  },
  {
    id: 17,
    text: "Inspiration",
    url: "/inspiration",
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
        <div className="p-1 bg-gradient-to-r from-yellow-400 to-yellow-600 text-white rounded-md shadow-lg"><p className="m-0 text-white"><FiLayers /></p></div>
        <div><p className="font-semibold dark:text-white m-0">Resources</p></div>
        </div>
    </button>
    <ul className={`${ isExpanded ? `flex flex-col` : `hidden` } ${styleClass ? styleClass : ""} pl-0 list-none my-0 space-y-2`}>
      {tempLinks}
    </ul>
    </div>
  )
}
