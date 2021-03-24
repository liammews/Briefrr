import React, { useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import Mainmenu from "./mainmenu"
import { Link } from "gatsby"
import SearchBar from "./search"

function Header ({ siteTitle }) {

    const [isExpanded, toggleExpansion] = useState(false)

    return (

        <div>

        <header className="w-full z-50 fixed h-16 bg-white dark:bg-darkgray-900 px-4 lg:px-10 flex flex-row items-center border-b dark:border-darkgray-700 border-gray-200 justify-between">
            
            <Link to="/" className="no-underline">
            <div className="-ml-2 flex flex-row space-x-4 items-center">
            <div className="pl-3 w-9 h-9 transition duration-500 ease-in-out transform hover:scale-105">
            <svg width="30" viewBox="0 0 266 350" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.15372 81.8549C1.41197 75.3546 5.29496 68.6663 11.8266 66.9161L73.3251 50.4377C105.983 41.6869 139.518 60.9407 148.227 93.4422C156.936 125.944 137.521 159.385 104.862 168.136L43.3638 184.615C36.8322 186.365 30.1252 182.514 28.3835 176.014L3.15372 81.8549Z" fill="#2F80ED"/>
            <path d="M46.3597 243.102C44.6179 236.601 48.5009 229.913 55.0326 228.163L152.011 202.178C191.201 191.677 231.443 214.781 241.893 253.783L251.354 289.093C253.096 295.593 249.213 302.281 242.681 304.031L86.5698 345.861C80.0381 347.612 73.3312 343.761 71.5894 337.261L46.3597 243.102Z" fill="#2F80ED"/>
            <path d="M26.9165 49.7251C18.4289 51.9993 13.3489 60.7057 15.6258 69.2035L39.2144 157.237C41.4914 165.735 50.244 170.735 58.7316 168.461L116.23 153.054C149.144 144.235 168.746 110.515 159.955 77.7076C151.165 44.9 117.329 25.4991 84.4146 34.3185L26.9165 49.7251ZM67.312 200.483C58.8243 202.757 53.7443 211.463 56.0213 219.961L79.6098 307.995C81.8868 316.493 90.6394 321.493 99.1271 319.218L245.084 280.109C253.571 277.835 258.651 269.129 256.374 260.631L247.529 227.618C237.109 188.733 197.003 165.732 157.982 176.188L67.312 200.483Z" stroke="black" stroke-width="9"/>
            </svg>
            </div>
            <div><p className="font-bold font-manrope text-xl dark:text-white">Briefrr</p></div>
            </div>
            </Link>

            <div className="flex flex-row space-x-10 items-center">

                <div className="hidden lg:inline">
                <Link to="/submit" className="flex-shrink-0 bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105">
                    <button>
                        Submit your work!
                    </button>
                </Link>
                </div>

                <div className="flex justify-center lg:hidden">
                    <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `hidden` : `inline` } flex items-center py-2 text-blue-500 dark:text-green-300 text-lg`}>
                    <b className="text-sm font-normal mr-2 text-black dark:text-white">Menu</b> <FaBars  />
                    </button>
                    <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `inline` : `hidden` } flex items-center py-2 text-black dark:text-white text-xl`}>
                    <FaTimes  />
                    </button>
                </div>

            </div>
            



        </header>

        
<div className={`${ isExpanded ? `block` : `hidden` } lg:hidden flex`}>
<div className="w-screen h-screen bg-white dark:bg-darkgray-800 text-black dark:text-white fixed top-16 left-0 border-b-2 border-gray-300 dark:border-gray-400 z-50">

   <div className="px-10 pt-10">
   <Mainmenu  />
   </div>

</div>
</div>

</div>

    )
}

export default Header