import React from "react"
import Links from "./links"
import { FaHome, FaInbox, FaTwitter } from "react-icons/fa"
import Resourcelinks from "./resourcelinks"
import { Link } from "gatsby"

function Mainmenu () {

    return (

        <nav className="flex flex-col">

        <Link to="/" className="no-underline">
        <div className="mb-11 flex flex-row space-x-2">
        <div className="transform -rotate-12 p-1 bg-blue-500 text-white rounded-md"><p className="m-0 text-white transform rotate-12"><FaHome /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Home</p></div>
        </div>
        </Link>

        <Link to="/premium" className="no-underline">
        <div className="mb-11 flex flex-row space-x-2">
        <div className="transform -rotate-12 p-1 bg-orange-500 text-white rounded-md shadow-lg"><p className="m-0 text-white transform rotate-12"><FaInbox /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Premium</p></div>
        </div>
        </Link>

        <Link to="/inbox" className="no-underline">
        <div className="mb-11 flex flex-row space-x-2">
        <div className="transform -rotate-12 p-1 bg-pink-500 text-white rounded-md shadow-lg"><p className="m-0 text-white transform rotate-12"><FaInbox /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Brief Inbox</p></div>
        </div>
        </Link>

        <div className="mb-8"><Resourcelinks /></div>

        <div className="mb-8"><Links /></div>

        <div className="lg:hidden inline mb-4">
                <Link to="/submit" className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105">
                    <button>
                        Submit your work!
                    </button>
                </Link>
        </div>


        <a href="https://twitter.com/briefrr_" target="_blank" rel="noreferrer" className="no-underline text-blue-500 dark:text-gray-300 mt-8 mb-4 text-lg hover:text-blue-700 dark:hover:text-green-300"><FaTwitter /></a>
        <p className="text-xs text-gray-500 dark:text-gray-300 mt-0">© Breifrr 2021</p>
       
        </nav>

    )
}

export default Mainmenu