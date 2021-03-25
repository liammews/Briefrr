import { Link } from "gatsby";
import React from "react";

const ProductCard = ({ article }) => {
  return (

    <div className="flex w-full">

    <div className="w-full flex flex-col p-4 rounded-md shadow-sm bg-white dark:bg-darkgray-900 border border-gray-200 dark:border-darkgray-700">

    <Link to={`/${article.node.link}`} className="no-underline">
    <div className="w-full rounded-md mb-4">
    <img className="rounded-md" src={`${article.node.image.asset.fluid.src}`} alt={`${article.node.name}`} />
    </div>
    

    <div className="flex flex-col">
    <div><p className="font-manrope font-bold text-black dark:text-white mt-2 mb-2">{article.node.name}</p></div>
    <div><p className="text-gray-700 dark:text-gray-300 mt-0 mb-4">{article.node.name}</p></div>

    <div className="flex flex-col md:flex-row items-end justify-between flex-wrap">
    <div><p className="text-black dark:text-white font-manrope font-bold my-0">£{article.node.price}</p></div>

    </div>

    </div>
    </Link>
    </div>

        </div>
  );
};

export default ProductCard;