import React from 'react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
import LoadMore from './LoadMore'
import NewsCard from './NewsCard'
import SectionTitle from './SectionTitle'
import Sidebar from './Sidebar'
import SpotCard from './SpotCard'
import SpotMain from './SpotMain'
import { urlFor } from '../sanity'


function CategoryContent({data}: any) {
  
  const { news: newsdata, top: spotdata } = data
  const mainNews = spotdata && spotdata[0];
  
  return (
    <>
         {/* Top summary Sesction */}
      <section className="my-2 mx-auto h-full w-full sm:max-w-6xl sm:h-96 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 bg-slate-50 font-josefin">
        <SpotMain title={mainNews?.title} link={`/${mainNews?.slug.current}`} category={mainNews?.categories[0]?.title?.toUpperCase()} imgUrl={mainNews?.mainImage && urlFor(mainNews?.mainImage)?.url()} />
        <div className="px-2 sm:px-0 flex-1 grid sm:grid-cols-2 gap-1 sm:gap-2 overflow-hidden">
           {spotdata?.filter( (r: any, i: React.Key) => i !== 0 ).map((row: any,i:React.Key) => (<SpotCard key={i} title={row.title} link={`/${row?.slug.current}`} category={row?.categories[0]?.title?.toUpperCase()} imgUrl={row?.mainImage && urlFor(row?.mainImage)?.url()} />))}
        </div>
      </section>

      
      {/* Main content */}
      <section className="my-8 w-full sm:max-w-6xl min-h-screen mx-auto flex flex-col sm:flex-row sm:space-x-4 ">
         {/* Content */}
         <div className="px-2 sm:px-0 flex-1">
            <SectionTitle title={mainNews?.categories[0]?.title?.toUpperCase()} />
            <div className="py-4 grid sm:grid-cols-3 sm:gap-4 font-opensans">
              {newsdata?.map((row: any,i: React.Key) => (<NewsCard key={i} title={row?.title} link={`/${row?.slug.current}`} category={row?.categories[0].title} imgUrl={row?.mainImage && urlFor(row?.mainImage)?.url()} />))}
            </div>
            {/* <LoadMore /> */}
         </div>
         
         {/* Sidebar - AdBox */}
         <Sidebar />
      </section>
    </>
  )
}

export default CategoryContent