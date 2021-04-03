import React from "react"
import Links from "./links"
import { FaHome, FaInbox, FaTwitter, FaArrowCircleUp, FaStar } from "react-icons/fa"
import Resourcelinks from "./resourcelinks"
import { Link } from "gatsby"

function Mainmenu () {

    return (

        <nav className="flex flex-col space-y-14">

        <Link to="/" className="no-underline">
        <div className="flex flex-row space-x-2">
        <div className="transform -rotate-12 p-1 bg-pink-500 text-white rounded-md"><p className="m-0 text-white transform rotate-12"><FaHome /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Home</p></div>
        </div>
        </Link>

        {/*
        <Link to="/premium" className="no-underline">
        <div className="flex flex-row space-x-2">
        <div className="transform -rotate-12 p-1 bg-pink-500 text-white rounded-md shadow-lg"><p className="m-0 text-white transform rotate-12"><FaStar /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Premium</p></div>
        </div>
        </Link>
        */}

        <Link to="/inbox" className="no-underline">
        <div className="flex flex-row space-x-2">
        <div className="transform -rotate-12 p-1 bg-blue-500 text-white rounded-md shadow-lg"><p className="m-0 text-white transform rotate-12"><FaInbox /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Brief Inbox</p></div>
        </div>
        </Link>

        <div className=""><Resourcelinks /></div>

        <Link to="/submit" className="no-underline">
        <div className="flex flex-row space-x-2">
        <div className="transform -rotate-12 p-1 bg-purple-500 text-white rounded-md shadow-lg"><p className="m-0 text-white transform rotate-12"><FaArrowCircleUp /></p></div>
        <div><p className="font-semibold dark:text-white m-0 hover:text-blue-500 dark:hover:text-blue-400">Submit</p></div>
        </div>
        </Link>

        <div className=""><Links /></div>
        
        <div>


        <a href="https://twitter.com/briefrr_" target="_blank" rel="noreferrer" className="no-underline text-blue-500 dark:text-gray-300 m-0 text-lg hover:text-blue-700 dark:hover:text-green-300"><FaTwitter /></a>
        <p className="m-0 text-xs text-gray-500 dark:text-gray-300 mt-2">© Breifrr 2021</p>
        </div>

        </nav>
    )
}

export default Mainmenu