import React from "react"
import { Link } from "gatsby"

const ViewAll = () => {
    return(
        <div className="w-full flex flex-row justify-between my-8">
            <div>
                <Link to="/resources">
                <button className="mb-4 lg:mt-0 mt-4 px-4 py-2 border-2 border-blue-400 text-black dark:text-white text-sm font-semibold rounded-full transition duration-500 ease-in-out transform hover:-translate-y-0.5">
                View All Resources
                </button>
                </Link>
            </div>
            <div>
                <Link to="/suggest">
                <button className="mb-4 lg:mt-0 mt-4 px-4 py-2 border-2 border-blue-400 text-black dark:text-white text-sm font-semibold rounded-full transition duration-500 ease-in-out transform hover:-translate-y-0.5">
                Suggest a resource!
                </button>
                </Link>
            </div>
        </div>
    )
}
export default ViewAll;