import React from "react";
import AppsComponent from "../apps/apps"
import { graphql, useStaticQuery } from "gatsby"

const FeaturedResources = () => {
    const data = useStaticQuery(query);

  return (

    <div className="mt-12 flex flex-col items-center">
      <div>
      <h2 className="text-black dark:text-white text-4xl text-center mb-0 font-medium">Discover free resources</h2>
      <h3 className="text-gray-400 text-2xl text-center mt-2 mb-8 font-light">All you need to get started on your next brief</h3>
      </div>
      <div>
    <AppsComponent articles={data.allSanityApps.edges} />
    </div>
    <div>
    <button className="mt-8 bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105">
      View all
    </button>
    </div>
    </div>

  );
};

export default FeaturedResources;