import React from "react"
import { Link } from "gatsby"
import { AiFillPushpin } from "react-icons/ai"

const SubHero = () => {
    return(
        <div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <div className="flex relative flex-col w-full bg-white dark:bg-darkgray-900 rounded-md shadow-sm p-4 lg:p-10 mb-8 z-20 hover:shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1">

        <div className="h-8 w-8 rounded-full px-2 py-1 absolute -right-2 -top-2 bg-red-500 z-50">
                <p className="capitalize m-0 text-xl text-white"><AiFillPushpin /></p>
        </div>  

        <div className="flex flex-row space-x-8"> 
          <div className="flex-shrink-0">
            <img className="h-20 w-20 rounded-br border-2 border-gray-50 shadow-md"src="https://pbs.twimg.com/profile_images/1374152003396452352/vMw5JgtS_400x400.jpg"></img>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium m-0 mb-1">Liam @ Briefrr</p>
            <p className="text-xl font-manrope text-black font-bold m-0 mb-2">Hey! Welcome to your inbox.</p>
            <p className="text-base text-gray-500 font-normal m-0 mb-2">Find a brief you like, read it through and get creating. Once you're done, don't forget to submit your work for a chance to be featured on our students page.</p>
          </div>
        </div>
        </div>

        <div className="hidden lg:flex relative flex-col w-full bg-white dark:bg-darkgray-900 rounded-md shadow-sm p-4 lg:p-10 mb-8 z-20 hover:shadow-md transition duration-500 ease-in-out transform hover:-translate-y-1">

        <div className="h-8 w-8 rounded-full px-2 py-1 absolute -right-2 -top-2 bg-red-500 z-50">
                <p className="capitalize m-0 text-xl text-white"><AiFillPushpin /></p>
        </div>  

        <div className="flex flex-row space-x-8"> 
          <div className="flex-shrink-0">
            <img className="h-20 w-20 rounded-br border-2 border-gray-50 shadow-md"src="https://pbs.twimg.com/profile_images/1370716691970265088/9Gsvrlr2_400x400.jpg"></img>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium m-0 mb-1">Team Briefrr</p>
            <p className="text-xl font-manrope text-black font-bold m-0 mb-2">Todays tip!</p>
            <p className="text-base text-gray-500 font-normal m-0 mb-2">Take notice of the clients audience or clientelle, it can give you a key insight to who your design needs to resignate with.</p>
          </div>
        </div>
        </div>

        </div>

        </div>
    )
}
export default SubHero;