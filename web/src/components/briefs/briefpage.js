import { Link } from 'gatsby'
import React from 'react'
import { FaArrowCircleUp, FaImage, FaPaintBrush, FaSearch } from 'react-icons/fa'
import BlockContent from '../block-content'
import SignUp from '../forms/signup'

function BlogPost (props) {
  const { _rawOverview, avatar, title, from, subject, _rawClientBackground, _rawAudience, _rawObjectives, _rawDelivery  } = props
  return (

    <div>

    <div className="w-full bg-blue-500 rounded-md shadow-sm px-4 py-12 mb-8 flex flex-col items-center">
        <div className="rounded-full shadow-sm h-36 w-36 mb-8">
        <img className="rounded-full h-36 border-4 border-white" src={`${avatar.asset.fluid.src}`}  />
        </div>
        <h1 className="text-center mb-4 text-white text-3xl max-w-2xl">{title}</h1>
        <p className="mt-0 mb-2 text-xl max-w-xl text-center text-white">{subject}</p>

    </div>

    <div className="lg:grid lg:grid-cols-6 gap-12 bg-white dark:bg-darkgray-900 rounded-md shadow-sm p-8 lg:p-12 mb-12">

        <div className="lg:col-span-2 pr-8 border-b-2 lg:border-r-2 lg:border-b-0 border-gray-100 dark:border-darkgray-800">

        <div className="mb-20">
        <h3 className="text-3xl">{from}</h3>
            {_rawClientBackground && <BlockContent blocks={_rawClientBackground} />}
        </div>
        <div className="mb-20">
            <h3 className="text-3xl">Target Audience</h3>
            {_rawAudience  && <BlockContent blocks={_rawAudience } />}
        </div>
        </div>

        <div className="lg:col-span-4">

        <div className="mb-20">
            <h3 className="text-3xl">Project Overview</h3>
            {_rawOverview && <BlockContent blocks={_rawOverview} />}
        </div>

        <div className="mb-20">
            <h3 className="text-3xl">Project Objectives</h3>
            {_rawObjectives && <BlockContent blocks={_rawObjectives} />}
        </div>

        <div className="mb-20">
            <h3 className="text-3xl">Delivery and Timescale</h3>
            {_rawDelivery && <BlockContent blocks={_rawDelivery} />}
        </div>


        </div>

    </div>

    <div className="bg-white dark:bg-darkgray-900 grid lg:grid-cols-4  gap-10 rounded-md shadow-sm p-8 lg:p-12 mb-12">

        
        <div className="flex-col flex items-center">
            <div className="rounded-full h-24 w-24 mb-6 bg-blue-200 flex items-center justify-center"><div  className="text-4xl text-blue-700 m-0"><FaSearch /></div></div>
            <p className="text-lg font-bold font-manrope my-0 text-center mb-2">Step 1 - Research</p>
            <p className="my-0 text-center">Look into what others in this industry are doing and be aware of your clients background and audience. Need some inspiration? have a look around our <Link to="/inspiration">inspiration resources.</Link></p>
        </div>


        
        <div className="flex-col flex items-center">
        <div className="rounded-full h-24 w-24 mb-6 bg-pink-200 flex items-center justify-center"><div  className="text-4xl text-pink-700 m-0"><FaImage /></div></div>
            <p className="text-lg font-bold font-manrope my-0 text-center mb-2">Step 2 - Resources</p>
            <p className="my-0 text-center">Use our <Link to="/resources">resource library</Link> to find things like images, icons and fonts to use for your project. There are over 200 resources to help you with you.</p>
        </div>


        <div className="flex-col flex items-center">
        <div className="rounded-full h-24 w-24 mb-6 bg-green-200 flex items-center justify-center"><div  className="text-4xl text-green-700 m-0"><FaPaintBrush /></div></div>
            <p className="text-lg font-bold font-manrope my-0 text-center mb-2">Step 3 - Create</p>
            <p className="my-0 text-center">Get creating! Use your research combined with your resources to create the perfect design for your client. Remember to experiment and step outside your comfort zone. If you require software, check our list of <Link to="/software">the best software.</Link></p>
        </div>


        <div className="flex-col flex items-center">
        <div className="rounded-full h-24 w-24 mb-6 bg-orange-200 flex items-center justify-center"><div  className="text-4xl text-orange-700 m-0"><FaArrowCircleUp /></div></div>
            <p className="text-lg font-bold font-manrope my-0 text-center mb-2">Step 4 - Deliver</p>
            <p className="my-0 text-center">All done? Great! Designs always look better in mock-ups so take a look around our <Link to="/mockups">mock up resources</Link>. Once you're happy <Link to="/submit">submit your work!</Link> Don't forget to also share your work on social media, its a great way to network and get peer feedback. Tag us for extra cred!</p>
        </div>


    </div>

    <SignUp  />

    </div>
  )
}

export default BlogPost
