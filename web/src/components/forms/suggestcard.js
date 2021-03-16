import React from "react";

const contactCard = () => {
  return (
            <div className="flex flex-col items-center w-full rounded-md bg-white dark:bg-darkgray-900 border-gray-300 dark:border-gray-600 shadow-md mb-4 p-6 lg:px-20 lg:py-20">
                
                <div className="lg:w-3/5 w-full">
                    <h2 className="text-black dark:text-white text-4xl  m-0 font-bold">Suggest</h2>
                    <h3 className="text-gray-400 text-xl mt-2 mb-8 font-normal">We love hearing about new resources and apps, let us know your favourites.</h3>
                </div>

                <div className="lg:w-3/5 w-full">
                <form name="suggest" method="POST" data-netlify="true" data-netlify-honeypot="bot-field">

                <input type="hidden" name="form-name" value="suggest" />

                <div class="text-gray-700 dark:text-gray-300 mb-6">
                    <label class="block mb-1" for="forms-labelOverInputCode">Your name</label>
                    <input class="w-2/3 h-10 px-3 text-base  text-black placeholder-gray-300 border rounded-lg focus:shadow-outline" type="text" placeholder="Peter Casso" name="name"/>
                </div>

                <div class="text-gray-700 dark:text-gray-300 mb-6">
                    <label class="block mb-1" for="forms-labelOverInputCode">What's it called?</label>
                    <input class="w-full h-10 px-3 text-base text-black placeholder-gray-300 border rounded-lg focus:shadow-outline" type="text" placeholder="Briefrr" name="resourcename"/>
                </div>

                <div class="text-gray-700 dark:text-gray-300 mb-6">
                    <label class="block mb-1" for="forms-labelOverInputCode">Where can we find it?</label>
                    <input class="w-full h-10 px-3 text-base text-black placeholder-gray-300 border rounded-lg focus:shadow-outline" type="text" placeholder="briefrr.co" name="link"/>
                </div>

                <div class="text-gray-700 dark:text-gray-300 mb-6">
                <label class="block mb-1" for="forms-labelOverInputCode">Why do you love it?</label>
                <textarea name="message" class="w-full h-32 px-3 py-2 text-base text-black placeholder-gray-600 border rounded-lg focus:shadow-outline" name="why"></textarea>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105">
                Submit
                </button>



                </form>
                </div>
    
            </div>

  );
};

export default contactCard;