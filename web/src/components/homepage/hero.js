import React from "react"
import HeroButtonsLG from "./hero-buttons-lg"

const Hero = () => {
    return(
        <div className="flex flex-col items-center w-full rounded-md bg-gradient-to-tr from-green-300 via-blue-400 to-green-300 shadow-md px-4 py-12 lg:py-40">
            <div className="w-full lg:mb-4 lg:max-w-3xl">
                <h1 className="text-4xl lg:text-5xl text-white font-semibold mb-4 text-center">Briefrr is the perfect practice ground for creatives</h1>
                <h3 className="text-xl text-white font-semibold mb-4 text-center">With a library of free practice briefs and resources, we have all you need <br  /> to grow as a maker.</h3>
                <h3 className="text-base  text-white font-normal mb-2 text-center">Let's get started! <br className="lg:hidden"  />What type of designer are you?</h3>
            </div>

            <div className="flex flex-row">
            <div className="flex"><HeroButtonsLG  /></div>
            </div>

        </div>
    )
}
export default Hero;