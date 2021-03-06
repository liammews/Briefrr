import React from "react";

const contactCard = () => {
  return (
            <div className="flex flex-col items-center justify-center w-full rounded-md bg-white dark:bg-darkgray-900 border-gray-300 dark:border-gray-600 shadow-md  mb-12 p-6 py-20">
                
                <div className="max-w-7xl mx-auto">

                <div className="max-w-2xl">
                    <h2 className="text-black dark:text-white text-4xl  m-0 font-bold">Contact</h2>
                    <h3 className="text-gray-400 text-xl mt-2 mb-8 font-normal">Whether it's to suggest a feature or just a chat, get in touch.</h3>
                </div>

                <div className="w-full">
                <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/contact-thankyou">

                <input type="hidden" name="form-name" value="contact" />

                <div class="text-gray-700 dark:text-gray-300 mb-6">
                    <label class="block mb-1" for="forms-labelOverInputCode">Full name</label>
                    <input class="w-2/3 h-10 px-3 text-base text-black placeholder-gray-300 border rounded-lg focus:shadow-outline" type="text" placeholder="Peter Casso" name="name"/>
                </div>

                <div class="text-gray-700 dark:text-gray-300 mb-6">
                    <label class="block mb-1" for="forms-labelOverInputCode">Email address</label>
                    <input class="w-full h-10 px-3 text-base text-black placeholder-gray-300 border rounded-lg focus:shadow-outline" type="text" placeholder="p.casso@outlook.com" name="email"/>
                </div>

                <div class="text-gray-700 dark:text-gray-300 mb-6">
                <label class="block mb-1" for="forms-labelOverInputCode">Message</label>
                <textarea name="message" class="w-full h-32 px-3 py-2 text-base text-black placeholder-gray-600 border rounded-lg focus:shadow-outline" name="message"></textarea>
                </div>

                <button type="submit" className="bg-blue-500 hover:bg-blue-600 rounded-md px-4 py-2 text-white font-semibold text-sm transition duration-500 ease-in-out transform hover:scale-105">
                Submit
                </button>



                </form>
                </div>
                </div>
    
            </div>

  );
};

export default contactCard;