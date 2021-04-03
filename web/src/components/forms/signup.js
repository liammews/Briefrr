import React from "react";

const Signup = () => {
  return (
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end w-full rounded-md shadow-sm bg-white bg-opacity-50 dark:bg-darkgray-900 p-6 lg:px-10 lg:py-10 mb-12 overflow-hidden relative">
                
                <div className="bg-blue-50 h-xl w-xl rounded-full absolute -bottom-80 -left-60 md:-left-24 z-0">
                    <p></p>
                </div>
                
                <div className="w-full mb-8 lg:mb-0 z-10">
                    <h2 className="text-blue-600 dark:text-green-200 text-3xl  m-0 font-bold">Join the community!</h2>
                    <h3 className="text-black dark:text-white text-base mt-2 m-0 font-normal">Sign up to our email list and stay up to date!</h3>
                </div>

                <div className="w-full z-10">
                <form name="signup" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/signup-thankyou">

                <input type="hidden" name="form-name" value="signup" />

                <div class="text-gray-700 dark:text-gray-300 flex flex-row pb-1">
                    <input class="mr-2 w-full h-10 px-3 text-base text-black placeholder-gray-300 border rounded-md rounded-r-none rounded-br-none focus:shadow-outline" type="text" placeholder="Email address" name="email"/>
                    <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-md rounded-l-none rounded-bl-none px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105">
                Subscribe
                </button>
                </div>
                </form>
                </div>
    
            </div>

  );
};

export default Signup;