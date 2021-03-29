import { Link } from "gatsby";
import React from "react";

const contactCard = () => {
  return (
            <div className="flex flex-col items-center w-full rounded-md bg-white dark:bg-darkgray-900 border-grey-200 dark:border-gray-600 shadow-md mb-4 p-6 lg:px-20 lg:py-20">
                
                <div className="lg:w-3/5 w-full">
                    <h2 className="text-black dark:text-white text-4xl  m-0 font-bold">Submit your work!</h2>
                    <h3 className="text-gray-500 dark:text-gray-100 text-sm lg:text-xl mt-2 mb-8 font-normal">Use the form below to submit your work, we will be featuring our favourite submissions on our student page and socials.</h3>
                </div>

                <div className="lg:w-3/5 w-full">
                <form name="submit" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" action="/submit-thankyou">

                <input type="hidden" name="form-name" value="submit" />

                <div class="text-gray-700 dark:text-white mb-8">
                    <label class="block mb-1" for="forms-labelOverInputCode">Your full name</label>
                    <input class="mt-2 w-2/3 h-10 px-3 text-base  text-black placeholder-gray-300 border rounded-lg focus:shadow-outline" type="text" placeholder="Peter Casso" name="name"/>
                </div>

                <div class="text-gray-700 dark:text-white mb-8">
                    <label class="block mb-1" for="forms-labelOverInputCode">Email address</label>
                    <input class="w-full h-10 px-3 text-base text-black placeholder-gray-300 border rounded-lg focus:shadow-outline" type="text" placeholder="p.casso@outlook.com" name="email"/>
                </div>

                <div class="text-gray-700 dark:text-white mb-8">
                    <label class="block mb-1" for="forms-labelOverInputCode">Twitter name or link to online portfolio</label>
                    <input class="mt-2 w-2/3 h-10 px-3 text-base  text-black placeholder-gray-300 border rounded-lg focus:shadow-outline mb-2" type="text" placeholder="@pettercasso - pettercas.so" name="links"/>
                    <p className="text-gray-400 dark:text-darkgray-400 mt-0 mb-2 text-sm">If we share your project we would love to link to your socials or online portfolio, this is optional!</p>
                </div>

                <div class="text-gray-700 dark:text-white mb-8">
                    <label class="block mb-1" for="forms-labelOverInputCode">Link to your work</label>
                    <input class="mt-2 w-full h-10 px-3 text-base text-black placeholder-gray-300 border rounded-lg focus:shadow-outline mb-2" type="text" placeholder="www." name="resourcename"/>
                    <p className="text-gray-400 dark:text-darkgray-400 mt-0 mb-2 text-sm">We reccomend posting your completed project to either <a href="https://dribbble.com/">Dribble</a> or <a href="">Behance</a>. By sharing this way you can share your work with other designers and begin building an online collection of your work.</p>
                </div>

                <div class="text-gray-700 dark:text-white mb-8">
                <label class="block mb-1" for="forms-labelOverInputCode">Do you have any feedback for team briefrr about this brief?</label>
                <textarea name="message" class="mt-2 w-full h-32 px-3 py-2 text-base text-black placeholder-gray-600 border rounded-lg focus:shadow-outline" name="feedback"></textarea>
                <p className="text-gray-400 dark:text-darkgray-400 mt-0 mb-2 text-sm">Your feedback is greatly valued by us. We will use this feedback to improve briefs and create more awesome briefs for our community.</p>
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