import React from "react";

const CreatedBy = () => {

  return (

    <div className="mt-36 flex flex-col items-center max-w-2xl mx-auto">

      <div className="flex flex-row space-x-4 mb-8">
      <div className="mx-h-24 mx-w-24 rounded-full bg-white dark:bg-gray-900 border-white border-2 shadow-md"><img src="https://cdn.sanity.io/images/j2di4tpb/production/825d36cb955230c5ee8653e15a7fa5ce29f116ce-200x200.png" alt="mock avatar" /></div>
      <div className="mx-h-24 mx-w-24 rounded-full bg-white dark:bg-gray-900 border-white border-2 shadow-md"><img src="https://cdn.sanity.io/images/j2di4tpb/production/918b8a0074725b148cda47d8fdda7ec15f36850a-200x200.png" alt="mock avatar" /></div>
      <div className="mx-h-24 mx-w-24 rounded-full bg-white dark:bg-gray-900 border-white border-2 shadow-md"><img src="https://cdn.sanity.io/images/j2di4tpb/production/b5c50ec229e5b2b37e387fe670b3aa1c6d3c01c9-200x200.png" alt="mock avatar" /></div>
      <div className="mx-h-24 mx-w-24 rounded-full bg-white dark:bg-gray-900 border-white border-2 shadow-md"><img src="https://cdn.sanity.io/images/j2di4tpb/production/3997cd5b57480e0a4d5709d86e1397dde15ca5bd-200x200.png" alt="mock avatar" /></div>
      <div className="mx-h-24 mx-w-24 rounded-full bg-white dark:bg-gray-900 border-white border-2 shadow-md"><img src="https://cdn.sanity.io/images/j2di4tpb/production/d726f7a1d543f78867612be99cda4a29b780794b-200x200.png" alt="mock avatar" /></div>
      </div>

      <div>
      <h2 className="text-blue-500 dark:text-green-200 text-3xl lg:text-4xl text-center mt-4 mb-0">Created by creators,<br></br> for creators.</h2>
      <p className="text-3xl text-gray-600 dark:text-white text-center font-caveat">"Breifrr was create by me, for the 16-year-old me. Fresh from completing my A-Levels with no degree and seeking a job in Graphic Design. I wanted to give new designers the tools to kickstart their career and professional designers a fun tool to get creative outside of work."</p>
      <a href="https://liammews.com" className="no-underline"><p className="text-3xl text-gray-600 dark:text-white hover:text-blue-500 text-center font-bold font-caveat">- Liam</p></a>
      </div>
    </div>

  );
};

export default CreatedBy;