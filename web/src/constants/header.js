import React, { useState } from "react"
import { RiNotification2Line } from "react-icons/ri"
import { FaBars } from "react-icons/fa"
import Mainmenu from "./mainmenu"
import { Link } from "gatsby"

function Header ({ siteTitle }) {

    const [isExpanded, toggleExpansion] = useState(false)

    return (

        <div>

        <header className="w-full z-50 fixed h-16 bg-gray-50 dark:bg-gray-900 px-6 lg:px-10 flex flex-row items-center border-b dark:border-gray-700 border-gray-200 justify-between">
            
            <Link to="/" className="no-underline">
            <div className="flex flex-row space-x-2 items-center">
            <div className="pt-2 pl-3 bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-md shadow-lg w-9 h-9 transition duration-500 ease-in-out transform hover:scale-105">
            <svg className="fill-current text-white" width="12" viewBox="0 0 90 139" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path className="fill-current text-white shadow-lg" d="M0 5.86498C0 2.62584 2.65095 0 5.92105 0H36.7105C53.0611 0 66.3158 13.1292 66.3158 29.3249C66.3158 45.5206 53.0611 58.6498 36.7105 58.6498H5.92105C2.65095 58.6498 0 56.0239 0 52.7848V5.86498Z" fill="black"/>
            <path className="fill-current text-white shadow-lg" d="M0 86.2152C0 82.9761 2.65095 80.3502 5.92105 80.3502H54.4737C74.0943 80.3502 90 96.1053 90 115.54V133.135C90 136.374 87.3491 139 84.0789 139H5.92105C2.65094 139 0 136.374 0 133.135V86.2152Z" fill="black"/>
            </svg>
            </div>
            <div><p className="font-semibold dark:text-white">Briefrr</p></div>
            </div>
            </Link>

            <div className="flex flex-row space-x-10 items-center">

                <div className="pt-1">
                <button className="text-xl text-black dark:text-white">
                    <RiNotification2Line />
                </button>
                </div>

                <div className="flex justify-center lg:hidden">
                    <button onClick={() => toggleExpansion(!isExpanded)} className="flex items-center py-2 text-black dark:text-white text-lg">
                    <FaBars  />
                    </button>
                </div>

            </div>
            



        </header>

        
<div className={`${ isExpanded ? `block` : `hidden` } lg:hidden flex`}>
<div className="w-screen h-screen bg-white dark:bg-gray-800 text-black dark:text-white fixed top-16 left-0 border-b-2 border-gray-300 dark:border-gray-400 z-50">

   <div className="px-10 pt-10">
   <Mainmenu  />
   </div>

</div>
</div>

</div>

    )
}

export default Header