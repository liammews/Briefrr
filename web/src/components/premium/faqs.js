import React, { useState } from "react"
import { AiFillDownCircle, AiFillUpCircle } from "react-icons/ai"

const Accordion = ( { question, answer } ) => {
    const [isExpanded, toggleExpansion] = useState(false)

  return (

    <div className="flex flex-col items-center mb-4">
    <div className="flex flex-col space-y-4 justify-center w-xl bg-white shadow-sm rounded-md px-8 py-6">

                <div className="flex flex-row items-center">
                    <div>
                    <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `hidden` : `inline` } flex items-center text-blue-500 dark:text-green-300 text-lg`}>
                    <AiFillDownCircle />
                    </button>
                    </div>

                    <div>
                    <button onClick={() => toggleExpansion(!isExpanded)} className={`${ isExpanded ? `inline` : `hidden` } flex items-center text-blue-500 dark:text-green-300 text-lg`}>
                    <AiFillUpCircle />                       
                    </button>
                    </div>

                    <div><p className="ml-4 m-0 text-black font-manrope font-semibold">{question}</p></div>
                </div>

                <div className={`${ isExpanded ? `inline` : `hidden` }`}>
                    <p className="my-0 pl-8 text-grey-500">{answer}</p>
                </div>
        
    </div>
    </div>
  )
}
export default Accordion