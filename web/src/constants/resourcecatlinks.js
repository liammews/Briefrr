import React from "react"
import { Link } from "gatsby"

const data = [
  {
    id: 2,
    text: "icons",
    url: "/icons",
  },
  {
    id: 3,
    text: "images",
    url: "/images",
  },
  {
    id: 4,
    text: "learn",
    url: "/learn",
  },
  {
    id: 5,
    text: "type",
    url: "/type",
  },
  {
    id: 6,
    text: "software",
    url: "/software",
  },
]

const tempLinks = data.map(link => {

  return (
    <li className="mt-0 pl-0" key={link.id}>
      <Link className="no-underline" to={link.url}>
      <div className={`${link.text} rounded-full px-3 py-1 shadow-sm transition duration-500 ease-in-out transform hover:scale-105`}>
                <p className={`${link.text}text capitalize m-0 text-sm`}>{link.text}</p>
            </div>
      </Link>
    </li>
  )
})

export default ({ styleClass }) => {

  return (
    <div>
    <ul className="flex flex-row pl-0 pb-8 list-none my-0 space-x-4">
      {tempLinks}
    </ul>
    </div>
  )
}
