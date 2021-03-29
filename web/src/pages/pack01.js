import { Link } from 'gatsby'
import React from 'react'
import Layout from "../constants/layout"
import SignUp from '../components/forms/signup'
import { FaCheckCircle } from "react-icons/fa"
import Stepbystep from "../components/premium/stepbystep"
import CreatedBy from "../components/homepage/createdby"
import Testimonials from "../components/homepage/testimonials"
import Faqs from "../components/premium/faqs"
import Briefpreview from '../components/premium/briefpreview'

function BlogPost () {

  return (

    <Layout>

        <div>

        <div className="w-full bg-teal-100 rounded-md shadow-sm px-4 py-36 mb-8 flex flex-col justify-center items-center relative">
            
            <div className="p-6 lg:p-12 bg-teal-200 rounded-md">
            <h1 className="text-center mb-4 text-teal-800 text-3xl lg:text-5xl md:max-w-3xl">Identity creator pack!</h1>
            <p className="mt-0 mb-2 text-xl max-w-3xl text-center text-teal-800">Pack 01 - Idenity design</p>
            
            <div className="mt-8 flex flex-row justify-center">
                    <button className="no-underline flex-shrink-0 bg-teal-700 rounded-md px-6 py-3 text-white font-semibold transition duration-500 ease-in-out transform hover:scale-105"
                    data-item-id="bp01"
                    data-item-price="9.99"
                    data-item-url="briefrr.co/pack01"
                    data-item-description="Identity Creator Pack - 01"
                    data-item-image=""
                    data-item-name="Identity Creator Pack"
                    data-item-file-guid="5506f0d4-0199-41bd-b632-0fd7f4567b7f">
                    Buy - £9.99
                    </button>
            </div>


            </div>

            <div className="absolute left-4 top-0">
            <Link to="/inbox" className="no-underline">
            <button className="text-xs font-manrope mb-4 mt-4 px-2 py-2 bg-white text-black font-bold rounded-md transition duration-500 ease-in-out transform hover:-translate-y-1">
                    ← Browse other packs
            </button>
            </Link>
            </div>

        </div>

        <div className="p-8 lg:p-12 mb-8 flex flex-col items-center">

        <h2 className="text-3xl mb-4 text-center">Whats Included?</h2>

        <div className="flex flex-col lg:flex-row justify-around lg:space-x-8 space-y-4 lg:space-y-0">

                <div className="flex flex-row items-start lg:items-center space-x-2">
                    <div><p className="m-0 text-green-500 pt-2 md:pt-0"><FaCheckCircle  /></p></div>
                    <div><p className="m-0 text-gray-500">3 exclusive briefs tailored to develop your skills</p></div>
                </div>

                <div className="flex flex-row items-start lg:items-center space-x-2">
                    <div><p className="m-0 text-green-500 pt-2 md:pt-0"><FaCheckCircle  /></p></div>
                    <div><p className="m-0 text-gray-500">Feedback from an experienced professional designer</p></div>
                </div>

        </div>
        </div>



        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-24">



        <Briefpreview

        name="Briefrr"
        title="Design Exercise"
        imageurl="https://pbs.twimg.com/profile_images/1374152003396452352/vMw5JgtS_400x400.jpg"
        category="Identity Design"

        />

        <Briefpreview

        name="Helf Foods"
        title="Identity design for national supermarket"
        imageurl="https://pbs.twimg.com/profile_images/1374152003396452352/vMw5JgtS_400x400.jpg"
        category="Identity Design"
        
        />

        <Briefpreview

        name="Kingdom"
        title="An evolving brand for a multi-genre music venue"
        imageurl="https://pbs.twimg.com/profile_images/1374152003396452352/vMw5JgtS_400x400.jpg"
        category="Identity Design"
        
        />


       </div>

    <Stepbystep  />

    <CreatedBy  />
    <Testimonials />

    <div className="mt-36">

    <h2 className="text-4xl mb-8 text-center">FAQs</h2>

    <Faqs
    question="What is a brief?"
    answer="A brief is a document including all the information about a design project, the brief is usually developed by a member of the design team after discussions with the client about their requirements. In the brief you will find information about the client and details about what they require. Briefs are great as they give you all the essential information that you need to get started, all in one document."
    />
    
    <Faqs
    question="What is a brief pack?"
    answer="A brief pack is a collection of carefully developed briefs which will help you develop your skills and portfolio in the design area of your choice."
    />

    <Faqs
    question="How do I get my brief pack?"
    answer="Once you've purchased your brief pack you will recieve an email containing the download link for your chosen pack. This will include all the briefs as PDF's as well as any brand assets you may need."
    />

    <Faqs
    question="What happens once I've completed a brief pack?"
    answer="Once you have finished your brief pack, you can submit your work using our submit page. You will then be contacted by an experienced designer who will give you feedback on how you did and answer any questions you may have."
    />

    <Faqs
    question="How will this make me a better designer?"
    answer="The best way to become a better designer is by making things. Using realistic practice briefs gives you an interesting way of practicing all whilst building up your portfolio with work from unique industries."
    />

    </div>

    <div className="mt-32">
        <SignUp  />
    </div>

        </div>

    </Layout>


  )
}

export default BlogPost
