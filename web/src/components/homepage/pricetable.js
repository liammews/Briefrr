import React from "react";
import { Link } from "gatsby"
import { FaCheckCircle } from "react-icons/fa";

const CreatedBy = () => {

  return (

<div className="lg:px-48">


        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">


            <div className="flex flex-col items-start bg-white dark:bg-darkgray-900 shadow-sm rounded-lg p-12">
            <p className="text-4xl font-semibold font-manrope mt-0 mb-2">Free Access</p>
            <p className="text-2xl font-semibold font-manrope text-gray-500 mt-0">Yeah that's right, free.</p>

            <div className="flex flex-col items-start space-y-4 mt-4">
                <div className="flex flex-row items-center space-x-4">
                    <div><p className="m-0 text-green-500"><FaCheckCircle  /></p></div>
                    <div><p className="m-0 text-gray-500">Access to all of our free practice briefs</p></div>
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <div><p className="m-0 text-green-500"><FaCheckCircle  /></p></div>
                    <div><p className="m-0 text-gray-500">Library of over 200 resources</p></div>
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <div><p className="m-0 text-green-500"><FaCheckCircle  /></p></div>
                    <div><p className="m-0 text-gray-500">Access to our learn-zone</p></div>
                </div>
                <div className="flex flex-row items-center space-x-4">
                    <div><p className="m-0 text-gray-500"><FaCheckCircle  /></p></div>
                    <div><p className="m-0 text-gray-500">Feedback from experienced professionals</p></div>
                </div>

                <Link to="/inbox">
                <button className="font-manrope mb-4 mt-8 px-4 py-2 text-sm bg-blue-500 text-white font-bold rounded-md shadow-md transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                    Get started!
                </button>
                </Link>

            </div>
            </div>



            <div className="flex flex-col relative items-start bg-white dark:bg-darkgray-900 shadow-sm rounded-lg p-12 overflow-hidden">

            <p className="z-10 text-4xl font-semibold font-manrope mt-0 mb-2">Premium brief packs</p>
            <p className="z-10 text-2xl font-semibold font-manrope text-gray-500 mt-0">Pay as you go.</p>

            <div className="flex flex-col items-start space-y-4 mt-4">
                
            <div><p className="z-10 m-0 text-gray-500 mt-0"><b>Want to step up your learning?</b> <br /> With our premium brief packs you can get a tailored course of 3 new and exclusive briefs + full feedback and support from a experienced professional designer.</p></div>

                <div className="z-10 flex flex-row items-center space-x-4">
                    <div><p className="m-0 text-green-500"><FaCheckCircle  /></p></div>
                    <div><p className="m-0 text-gray-500">Feedback from experienced professionals</p></div>
                </div>

                <Link to="/inbox">
                <button className="z-10 font-manrope mb-4 mt-10 px-4 py-2 text-sm bg-pink-500 text-white font-bold rounded-md shadow-md transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                    Get started!
                </button>
                </Link>

            </div>
            </div>












        </div>
</div>

  );
};

export default CreatedBy;