import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 2,
    text: "accessibility",
    url: "/accessibility",
  },
  {
    id: 3,
    text: "colour",
    url: "/colour",
  },
  {
    id: 4,
    text: "icons",
    url: "/icons",
  },
  {
    id: 5,
    text: "images",
    url: "/images",
  },
  {
    id: 6,
    text: "inspiration",
    url: "/inspiration",
  },
  {
    id: 7,
    text: "learn",
    url: "/learn",
  },
  {
    id: 8,
    text: "software",
    url: "/software",
  },
  {
    id: 9,
    text: "type",
    url: "/type",
  },

]

const tempLinks = data.map(link => {

  return (
    <li className="mt-8 pl-0 mr-4" key={link.id}>
      <Link className="no-underline" to={link.url}>
      <div className={`${link.text} rounded-full px-3 py-1 shadow-sm transition duration-500 ease-in-out transform hover:scale-105`}>
                <p className={`${link.text} capitalize m-0`}>{link.text}</p>
            </div>
      </Link>
    </li>
  )
})

export default ({ styleClass }) => {

  return (
    <div>
    <ul className="flex flex-row flex-wrap pl-0 pb-8 list-none my-0">
      {tempLinks}
    </ul>
    </div>
  )
}
