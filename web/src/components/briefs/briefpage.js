import { Link } from 'gatsby'
import React from 'react'
import { FaArrowCircleUp, FaImage, FaPaintBrush, FaSearch } from 'react-icons/fa'
import BlockContent from '../block-content'
import SignUp from '../forms/signup'

function BlogPost (props) {
  const { _rawOverview, avatar, title, from, _rawClientBackground, _rawAudience, _rawLookAndFeel, catagory  } = props
  return (

    <div>

    <div className="w-full bg-blue-500 rounded-md shadow-sm px-4 py-12 mb-8 flex flex-col items-center relative">
        <div className="rounded-brl shadow-sm h-36 w-36 mb-8">
        <img className="rounded-brl h-36 border-4 border-white" src={`${avatar.asset.fluid.src}`}  />
        </div>
        <h1 className="text-center mb-4 text-white text-3xl max-w-2xl">{title}</h1>
        <p className="mt-0 mb-2 text-xl max-w-xl text-center text-white">{catagory}</p>

        <div className="absolute left-4 top-0">
        <Link to="/inbox" className="no-underline">
        <button className="text-xs font-manrope mb-4 mt-4 px-2 py-2 bg-white text-black font-bold rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1">
                ← Back to inbox
        </button>
        </Link>
        </div>

    </div>

    <div className="lg:grid lg:grid-cols-6 gap-12 bg-white dark:bg-darkgray-900 rounded-md shadow-sm p-8 lg:p-12 mb-12">

        <div className="lg:col-span-2 pr-8 border-b-2 lg:border-r-2 lg:border-b-0 border-gray-100 dark:border-darkgray-800">

        <div className="mb-20">
        <h3 className="text-3xl">{from}</h3>
            {_rawClientBackground && <BlockContent blocks={_rawClientBackground} />}
            <h3 className="text-xl mt-8">Target Audience</h3>
            {_rawAudience  && <BlockContent blocks={_rawAudience } />}

            <button className="text-sm font-manrope mb-4 mt-4 px-4 py-4 bg-blue-500 text-white font-bold rounded-md shadow-md transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105">
                Download Brand Assets
            </button>

        </div>
        </div>

        <div className="lg:col-span-4">

        <div className="mb-20">
            <h3 className="text-3xl">The Brief</h3>
            {_rawOverview && <BlockContent blocks={_rawOverview} />}
            <h3 className="text-xl mt-8">Look and Feel</h3>
            {_rawLookAndFeel && <BlockContent blocks={_rawLookAndFeel} />}
        </div>


        </div>

    </div>

    <div className="bg-white dark:bg-darkgray-900 grid lg:grid-cols-4  gap-10 rounded-md shadow-sm p-8 lg:p-12 mb-12">

        
        <div className="flex-col flex items-center">
        <div className="flex flex-row">
                <div><p className="text-5xl my-4 mx-0 text-blue-300"><FaSearch  /></p></div>
                <div><p className="text-5xl my-4 mr-0 -ml-8 text-green-200 text-opacity-70"><FaSearch  /></p></div>
        </div>
            <p className="text-lg font-bold font-manrope my-0 text-center mb-2">Step 1 - Research</p>
            <p className="my-0 text-center">Look into what others in this industry are doing and be aware of your clients background and audience. Need some inspiration? have a look around our <Link to="/inspiration" className="border-b-2 border-dotted border-fuchsia-300 no-underline">inspiration resources.</Link></p>
        </div>


        
        <div className="flex-col flex items-center">
        <div className="flex flex-row">
                <div><p className="text-5xl my-4 mx-0 text-orange-300"><FaImage /></p></div>
                <div><p className="text-5xl my-4 mr-0 -ml-8 text-purple-200 text-opacity-70"><FaImage  /></p></div>
        </div>
            <p className="text-lg font-bold font-manrope my-0 text-center mb-2">Step 2 - Resources</p>
            <p className="my-0 text-center">Use our <Link to="/resources" className="border-b-2 border-dotted border-red-300 no-underline">resource library</Link> to find things like images, icons and fonts to use for your project. There are over 200 resources to help you with you.</p>
        </div>


        <div className="flex-col flex items-center">
        <div className="flex flex-row">
                <div><p className="text-5xl my-4 mx-0 text-pink-300"><FaPaintBrush /></p></div>
                <div><p className="text-5xl my-4 mr-0 -ml-8 text-lime-200 text-opacity-70"><FaPaintBrush  /></p></div>
        </div>
            <p className="text-lg font-bold font-manrope my-0 text-center mb-2">Step 3 - Create</p>
            <p className="my-0 text-center">Get creating! Use your research combined with your resources to create the perfect design for your client. Remember to experiment and step outside your comfort zone. If you require software, check our list of <Link to="/software" className="border-b-2 border-dotted border-pink-300 no-underline">the best software.</Link></p>
        </div>


        <div className="flex-col flex items-center">
        <div className="flex flex-row">
                <div><p className="text-5xl my-4 mx-0 text-red-300"><FaArrowCircleUp /></p></div>
                <div><p className="text-5xl my-4 mr-0 -ml-8 text-yellow-200 text-opacity-70"><FaArrowCircleUp  /></p></div>
        </div>
            <p className="text-lg font-bold font-manrope my-0 text-center mb-2">Step 4 - Deliver</p>
            <p className="my-0 text-center">All done? Great! Designs always look better in mock-ups so take a look around our <Link to="/mockups" className="border-b-2 border-dotted border-blue-300 no-underline">mock-up resources</Link>. Once you're happy <Link to="/submit" className="border-b-2 border-dotted border-green-300 no-underline">submit your work!</Link> Don't forget to also share your work on social media, its a great way to network and get peer feedback. Tag us for extra cred!</p>
        </div>


    </div>

    <SignUp  />

    </div>
  )
}

export default BlogPost
