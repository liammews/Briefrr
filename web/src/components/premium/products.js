import React from 'react'
import BlockContent from './block-content'

function BlogPost (props) {
  const { _rawFulldescription, name, description, itemid, price, link, image, guid } = props
  return (
    <div>
    <article className="pt-4">

            <div className="h-xl overflow-hidden relative flex flex-col items-center w-full rounded-md bg-blue-500 shadow-md px-4 py-12 lg:py-40">
            
            <h1 className="text-4xl text-white mb-2 mt-6">{name}</h1>
            <h2 className="text-2xl text-white font-sans font-normal mt-0 mb-12">{description}</h2>
            <button className="font-manrope px-6 py-4 bg-green-200 text-blue-500 font-bold rounded-md shadow-md transition duration-500 ease-in-out transform hover:shadow-lg hover:-translate-y-1 hover:scale-105"
            data-item-id={`${itemid}`}
            data-item-price={`${price}`}
            data-item-url={`/${link}`}
            data-item-description={`${description}`}
            data-item-image={`${image.asset.fluid.src}`}
            data-item-name={`${name}`}
            data-item-file-guid={`${guid}`}>
            Add to cart
          </button>

            </div>



            <div className="mt-12">
            {_rawFulldescription && <BlockContent blocks={_rawFulldescription} />}
            </div>

    </article>
    </div>
  )
}

export default BlogPost