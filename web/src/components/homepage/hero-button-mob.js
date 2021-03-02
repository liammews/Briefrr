import React from "react"

const Hero = () => {
    return(

        <div className="p-10">

        <div className="dropdown inline-block relative w-44">
        <button className="flex flex-row items-center justify-center px-4 py-4 w-44 bg-white dark:bg-blue-500 dark:text-white rounded-md shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <span className="mr-1">Dropdown</span>
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
        </button>
        <ul className="dropdown-menu absolute hidden text-gray-700 pt-1 pl-0 list-none mt-0 mb-0 w-44 shadow-lg">
            <li className="mt-0"><a className="rounded-t bg-white dark:bg-gray-800 hover:bg-gray-400 dark:text-white pb-2 pt-4 px-4 block whitespace-no-wrap no-underline" href="#">Graphic Designer</a></li>
            <li className="mt-0"><a className="bg-white dark:bg-gray-800 hover:bg-gray-400 dark:text-white pb-2 pt-2 px-4 block whitespace-no-wrap no-underline" href="#">Web Developer</a></li>
            <li className="mt-0"><a className=" bg-white dark:bg-gray-800 hover:bg-gray-400 dark:text-white pb-2 pt-2 px-4 block whitespace-no-wrap no-underline" href="#">UI Designer</a></li>
            <li className="mt-0"><a className="rounded-b bg-white dark:bg-gray-800 hover:bg-gray-400 dark:text-white pb-4 pt-2 px-4 block whitespace-no-wrap no-underline" href="#">Logo Designer</a></li>
        </ul>
        </div>

        </div>

    )
}
export default Hero;