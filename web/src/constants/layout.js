import React from "react"
import { Helmet } from "react-helmet"
import BriefLinks from "./brieflinks"
import Header from "./header"
import Mainmenu from "./mainmenu"

const Layout = ({ children }) => {
    
    return (
        <>
        <Helmet>
        </Helmet>
        
        <div className="bg-gray-50 dark:bg-gray-900 max-h-screen">
    
          <Header />
          <div className="grid grid-cols-12 h-screen">

            <aside className="h-screen w-2/12 hidden lg:fixed lg:block col-span-2 bg-gray-50 dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 pl-10 pr-2 pt-24 z-10">
              <Mainmenu  />
            </aside>

            <main className="max-h-full col-span-12 bg-gray-50 dark:bg-gray-800 pt-24 flex flex-row">
              <div className="w-2/12 hidden lg:block"></div>
              <div className="lg:w-10/12 w-full px-6">{children}</div>
            </main>

          </div>
          </div>
        </>
      )
    }

export default Layout