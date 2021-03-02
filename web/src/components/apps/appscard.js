import { Link } from "gatsby";
import React from "react";

const appCard = ({ article }) => {
  return (

    <div className="flex w-full">
        <div className="mb-2 w-full flex flex-col bg-white dark:bg-gray-900 shadow-md hover:shadow-xl rounded-md p-4 transition duration-500 ease-in-out transform hover:-translate-y-1">

            <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4 mb-6">
            <div className="h-16 w-16 flex-shrink-0 shadow-md rounded-lg">
            <img className="rounded-lg" src={`${article.node.icon.asset.fluid.src}`} alt={`${article.node.name} logo`}  />
            </div>

            <div className="flex flex-col mb-4">
                <h3 className="text-black dark:text-white font-semibold text-base m-0">{article.node.name}</h3>
                <p className="text-gray-500 dark:text-white m-0 text-sm">{article.node.description}</p>
            </div>
            </div>

            <div className="flex flex-row justify-between space-x-4">

            <Link to={`/${article.node.catagory}`} className="no-underline">
            <div className={`${article.node.catagory} rounded-full px-3 py-1 shadow-sm transition duration-500 ease-in-out transform hover:scale-105`}>
                <p className={`${article.node.catagory}text capitalize m-0 text-sm`}>{article.node.catagory}</p>
            </div>
            </Link>

            <Link to={article.node.link} className="no-underline">
            <div className="flex flex-row px-3 py-1 rounded-full border border-gray-400 hover:bg-blue-200 hover:border-blue-200 dark:hover:bg-blue-600 dark:hover:border-blue-800 space-x-2 items-center transition duration-500 ease-in-out transform hover:scale-105">
                <div><p className="m-0 stroke-current text-blue-600 dark:text-white text-sm">Use</p></div>
                <div><p className="m-0 stroke-current text-blue-600 dark:text-white text-sm">→</p></div>
            </div>
            </Link>

            </div>


        </div>
        </div>
  );
};

export default appCard;