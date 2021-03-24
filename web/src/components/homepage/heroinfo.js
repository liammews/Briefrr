import React from 'react'

function HeroInfo (props) {
  const { totalCount } = props
  return (

    <div className="w-full lg:mb-4 lg:max-w-3xl z-40 bg-opacity-90 rounded-lg">
    <h1 className="text-4xl lg:text-5xl text-black dark:text-darkgray-50 mb-4 text-center">The perfect practice ground <br className="hidden lg:inline"  />for<b className="text-blue-500 font-caveat text-5xl lg:text-7xl"> creators</b></h1>
    <h3 className="text-xl text-black dark:text-darkgray-50 font-normal mb-4 text-center">Briefrr gives you <b>realistic</b> practice briefs <br className="hidden lg:inline"  /> + a library of over <b>{totalCount}</b> resources.</h3>
    </div>

  )
}

export default HeroInfo
