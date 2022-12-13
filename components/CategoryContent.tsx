import React from 'react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'
import LoadMore from './LoadMore'
import NewsCard from './NewsCard'
import SectionTitle from './SectionTitle'
import Sidebar from './Sidebar'
import SpotCard from './SpotCard'
import SpotMain from './SpotMain'


function CategoryContent() {
  const spotdata = [
    { title : 'Kobby debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'POLITICS', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'ENTERTAINMENT', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'BUSINESS', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'HEALTH', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
  ]

  const newsdata = [
    { title : 'Kobby debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'POLITICS', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'ENTERTAINMENT', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'BUSINESS', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'HEALTH', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'HEALTH', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'HEALTH', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'HEALTH', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'HEALTH', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
    { title : 'Domestic debt exchange: No haircut on treasury bills, principal bonds Govt', link : '/category/news', category : 'HEALTH', imgUrl : 'https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png' },
  ]
  return (
    <>
      <section className="my-2 px-4 py-1 mx-auto w-full border-t-2 sm:border-none border-pink-700/70 sm:max-w-6xl sm:rounded-lg bg-gradient-to-r from-slate-50 to-pink-200">
         <h1 className="text-sm sm:text-xl font-bold leading-20 tracking-widest text-pink-900">POLITICS</h1>
      </section>
      {/* Top summary Sesction */}
      <section className="my-2 mx-auto h-full w-full sm:max-w-6xl sm:h-96 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 bg-slate-50 font-josefin">
        <SpotMain title="Domestic debt exchange: No haircut on treasury bills, principal bonds Govt" link="/category/news" category="LOCAL ECONOMY" imgUrl="https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png" />
        <div className="px-2 sm:px-0 flex-1 grid sm:grid-cols-2 gap-1 sm:gap-2">
           {spotdata?.map((row,i) => (<SpotCard key={i} title={row.title} link={row.link} category={row.category} imgUrl={row.imgUrl} />))}
        </div>
      </section>

      {/* Main content */}
      <section className="my-8 w-full sm:max-w-6xl min-h-screen mx-auto flex flex-col sm:flex-row sm:space-x-4 ">
         {/* Content */}
         <div className="px-2 sm:px-0 flex-1">
            <div className="grid sm:grid-cols-3 sm:gap-4 font-opensans">
                {newsdata?.map((row,i) => (<NewsCard key={i} title={row.title} link={row.link} category={row.category} imgUrl={row.imgUrl} />))}
            </div>
            <LoadMore />
         </div>
         
         {/* Sidebar - AdBox */}
         <Sidebar />
      </section>
    </>
  )
}

export default CategoryContent