import React from "react"
import Links from "./links"
import { MdChatBubble } from "react-icons/md"
import { FaHome, FaTwitter } from "react-icons/fa"
import Resourcelinks from "./resourcelinks"
import BriefLinks from "./brieflinks"
import { Link } from "gatsby"

function Mainmenu () {

    return (

        <nav className="flex flex-col">

        <Link to="/" className="no-underline">
        <div className="mb-11 flex flex-row space-x-2">
        <div className="p-1 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md shadow-lg"><p className="m-0 text-white"><FaHome /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Home</p></div>
        </div>
        </Link>

        <Link to="/blog/" className="no-underline">
        <div className="mb-11 flex flex-row space-x-2">
        <div className="p-1 bg-gradient-to-r from-purple-400 to-purple-600 text-white rounded-md shadow-lg"><p className="m-0 text-white"><MdChatBubble /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Blog</p></div>
        </div>
        </Link>

        <div className="mb-8"><BriefLinks  /></div>

        <div className="mb-8"><Resourcelinks /></div>

        <div><Links /></div>


        <a href="https://twitter.com/briefrr_" target="_blank" rel="noreferrer" className="text-grey-500 dark:text-gray-300 mt-8 mb-4 text-lg hover:text-blue-500 dark:hover:text-green-300"><FaTwitter /></a>
        <p className="text-xs text-gray-500 dark:text-gray-300 mt-0">© Breifrr 2020</p>
       
        </nav>

    )
}

export default Mainmenu