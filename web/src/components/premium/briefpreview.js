import React from "react"

const Briefpreview = ({ title, name, imageurl, category }) => {
    return(
<div>
<div className="flex flex-col w-full h-48 lg:h-56 justify-between bg-white dark:bg-darkgray-900 rounded-md shadow-sm p-4 lg:p-10 hover:shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1">

    <div className="flex flex-row space-x-8">
    <div className="flex-shrink-0">
        <img className="h-20 w-20 rounded-br border-2 border-gray-50 shadow-md" src={`${imageurl}`}></img>
    </div>
    <div>
        <p className="text-sm text-gray-500 font-medium m-0 mb-1">{name}</p>
        <p className="text-md lg:text-xl font-manrope text-black font-bold m-0">{title}</p>
    </div>
    </div>

    <div className="flex flex-row mt-8 justify-between">

        <div className="flex space-y-2 lg:space-y-0 flex-row flex-wrap">
        <div className="bg-green-200 rounded-full px-3 py-1 mr-2 shadow-sm transition duration-500 ease-in-out transform hover:scale-105 flex flex-row lg:justify-center flex-grow-0 items-center">
                <div><p className="capitalize m-0 text-sm text-green-700">{category}</p></div>
        </div>
        </div>

    </div>
</div>
</div>
    )
}
export default Briefpreview;