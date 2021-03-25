import React from "react";
import { FaPaperclip } from "react-icons/fa";
import { FiPenTool } from "react-icons/fi";
import { RiChatSmile2Line } from "react-icons/ri"
import { Link } from "gatsby"

const CreatedBy = () => {

  return (

<div className="mt-36 mb-44">

<div className="flex flex-col items-center">
<h2 className="text-4xl text-center mb-16">Level up your practice</h2>
</div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="flex flex-col items-center">
                <div className="flex flex-row">
                <div><p className="text-5xl my-4 mx-0 text-red-300"><FaPaperclip  /></p></div>
                <div><p className="text-5xl my-4 mr-0 -ml-8 text-green-200 text-opacity-70"><FaPaperclip  /></p></div>
                </div>
                <div><p className="text-2xl font-bold text-gray-700 dark:text-gray-50  text-center m-0 mb-2">Step One</p></div>
                <div><p className="text-lg text-gray-700 dark:text-gray-50  text-center m-0 max-w-sm">Purchase and download your brief pack using our secure checkout.</p></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-row">
                <div><p className="text-5xl my-4 mx-0 text-yellow-300"><FiPenTool  /></p></div>
                <div><p className="text-5xl my-4 mr-0 -ml-8 text-pink-200 text-opacity-70"><FiPenTool  /></p></div>
                </div>
                <div><p className="text-2xl font-bold text-gray-700 dark:text-gray-50 text-center m-0 mb-2">Step Two</p></div>
                <div><p className="text-lg text-gray-700 dark:text-gray-50  text-center m-0 max-w-sm">Get creating! Read through the briefs and use our resource library for any resources you may need to complete each brief in your pack.</p></div>
            </div>

            <div className="flex flex-col items-center">
                <div className="flex flex-row">
                <div><p className="text-5xl my-4 mx-0 text-lime-300"><RiChatSmile2Line /></p></div>
                <div><p className="text-5xl my-4 mr-0 -ml-8 text-fuchsia-200 text-opacity-70"><RiChatSmile2Line  /></p></div>
                </div>
                <div><p className="text-2xl font-bold text-gray-700 dark:text-gray-50  text-center m-0 mb-2">Step Three</p></div>
                <div><p className="text-lg text-gray-700 dark:text-gray-50  text-center m-0 max-w-sm">Submit your work and get feedback from an experienced professional designer. We will talk you through what you did great and areas in which you can work on.</p></div>
            </div>

        </div>


</div>

  );
};

export default CreatedBy;