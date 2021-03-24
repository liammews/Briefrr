import React from "react";

const CreatedBy = () => {

  return (

    <div className="mt-36 flex flex-col items-center max-w-2xl mx-auto">

      <div className="flex flex-row space-x-4 mb-4">
      <div><img className="h-28 w-28 rounded-brl border-white border-2 shadow-sm" src="https://pbs.twimg.com/profile_images/1374152003396452352/vMw5JgtS_400x400.jpg" alt="mock avatar" /></div>
      </div>

      <div>
      <h2 className="text-blue-500 dark:text-green-200 text-3xl lg:text-4xl text-center mt-4 mb-0">Created by creators,<br></br> for creators.</h2>
      <p className="text-xl text-gray-600 dark:text-white text-center">"Breifrr was create by me, for the 16-year-old me. Fresh from completing my A-Levels with no degree and seeking a job in Graphic Design. I wanted to give new designers the tools to kickstart their career and professional designers a fun tool to get creative outside of work."</p>
      <div><a href="https://liammews.com" className="no-underline"><p className="text-3xl text-gray-600 dark:text-white hover:text-blue-500 text-center font-bold font-caveat">- Liam</p></a></div>
      </div>
    </div>

  );
};

export default CreatedBy;