import React from "react";
import { FaTwitter } from "react-icons/fa";

const Testimonial = () => {
  return (

    <div className="grid grid-cols-1 lg:grid-cols-3 mt-12 gap-12">

    <div className="w-full h-full rounded-md shadow-sm bg-white grid grid-cols-8 p-4 md:p-8 gap-4 justify-between">

    <div className="col-span-2">
        <img className="rounded-br max-h-20 max-w-20 border-4 border-white" src="https://pbs.twimg.com/profile_images/1374152003396452352/vMw5JgtS_400x400.jpg" alt="" />
    </div>

    <div className="col-span-6 flex flex-col justify-between">
        <div>
        <p className="m-0 mb-2 mt-4 text-gray-500"><b class="text-black font-semibold">Liam Mews</b> @liammews</p>
        <p className="m-0">Buy all the briefrr premium packs now. I want to get rich a buy a yatch, jet-ski and a rolex. Muaahah</p>
        </div>

        <div className="flex flex-row justify-end">
        <div><p className="m-0 text-xl text-blue-500"><FaTwitter /></p></div>
        </div>
    </div>

    </div>



    <div className="w-full h-full rounded-md shadow-sm bg-white grid grid-cols-8 p-4 md:p-8 gap-4 justify-between">

    <div className="col-span-2">
        <img className="rounded-br max-h-20 max-w-20 border-4 border-white" src="https://pbs.twimg.com/profile_images/1374152003396452352/vMw5JgtS_400x400.jpg" alt="" />
    </div>

    <div className="col-span-6 flex flex-col justify-between">
        <div>
        <p className="m-0 mb-2 mt-4 text-gray-500"><b class="text-black font-semibold">Liam Mews</b> @liammews</p>
        <p className="m-0">Yeah it's alright.</p>
        </div>

        <div className="flex flex-row justify-end">
        <div><p className="m-0 text-xl text-blue-500"><FaTwitter /></p></div>
        </div>

    </div>

    </div>



    <div className="w-full h-full rounded-md shadow-sm bg-white grid grid-cols-8 p-4 md:p-8 gap-4 justify-between">

    <div className="col-span-2">
        <img className="rounded-br max-h-20 max-w-20 border-4 border-white " src="https://pbs.twimg.com/profile_images/1374152003396452352/vMw5JgtS_400x400.jpg" alt="" />
    </div>

    <div className="col-span-6 flex flex-col justify-between">
        <div>
        <p className="m-0 mb-2 mt-4 text-gray-500"><b class="text-black font-semibold">Liam Mews</b> @liammews</p>
        <p className="m-0">I used Breirr for one day and now I am product lead at Apple! It's amazing!</p>
        </div>
        <div className="flex flex-row justify-end">
        <div><p className="m-0 text-xl text-blue-500"><FaTwitter /></p></div>
        </div>
    </div>

    </div>


    </div>

  );
};

export default Testimonial;