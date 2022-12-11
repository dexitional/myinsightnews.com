import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavLink from '../../components/NavLink'
import { HiOutlineMoon } from 'react-icons/hi'
import { FaTwitter,FaYoutube,FaSoundcloud,FaSearch,FaRegArrowAltCircleDown,FaFacebookF,FaHamburger } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { IoMdMenu,IoMdSearch } from 'react-icons/io'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Layout from '../../components/Layout'

const Home: NextPage = () => {
  const links = [
     { name:'HOME', url: '/', active: true },
     { name:'NEWS', url: '/news' },
     { name:'POLITICS', url: '/politics' },
     { name:'EDUCATION', url: '/education' },
     { name:'ENTERTAINMENT', url: '/showbiz' },
     { name:'HEALTH', url: '/health' },
     { name:'ECONOMIC', url: '/economic' },
     { name:'LAW', url: '/law' },
     { name:'SPORTS', url: '/sports' }
  ]

  return (
    <Layout>
      {/* top summary Sesction */}
      <section className="my-2 mx-auto h-full w-full sm:max-w-6xl sm:h-96 flex flex-col space-y-2 sm:space-y-0 sm:flex-row sm:space-x-2 bg-slate-50 font-josefin">
        
        <div className="relative w-full flex-1 group bg-red-900">
          <img className="z-1 h-48 sm:h-96 object-cover transition-all duration-200 group-hover:scale-105" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
          <div className="px-8 py-4 h-full w-full absolute top-0 z-2 bg-gradient-to-b from-black/10 via-black/10 to-black/70 flex flex-col space-y-2 justify-end">
            <span className="py-0.5 px-1 w-36 rounded shadow-sm bg-pink-700/70 text-xs font-semibold tracking-widertext-white text-center">LOCAL ECONOMY</span>
            <h1 className="text-lg sm:text-2xl text-white font-bold shadow-sm leading-[1.3rem] sm:leading-0">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</h1>
          </div>
        </div>

        <div className="px-2 sm:px-0 flex-1 grid sm:grid-cols-2 gap-1 sm:gap-2">

          <div className="relative h-[8rem] sm:h-full flex-1 group overflow-hidden">
            <img className="z-1 h-full object-cover transition-all duration-200 group-hover:scale-105" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
            <div className="px-8 py-4 h-full w-full absolute top-0 z-2 bg-gradient-to-b from-black/10 via-black/10 to-black/70 flex flex-col space-y-2 justify-end">
              <span className="py-0.5 px-1 w-36 rounded shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
              <h1 className="text-sm sm:text-base text-white font-bold shadow-sm leading-[1.1rem] sm:leading-[1.5rem]">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</h1>
            </div>
          </div>
          <div className="relative h-[8rem] sm:h-full flex-1 group overflow-hidden">
            <img className="z-1 h-full object-cover transition-all duration-200 group-hover:scale-105" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
            <div className="px-8 py-4 h-full w-full absolute top-0 z-2 bg-gradient-to-b from-black/10 via-black/10 to-black/70 flex flex-col space-y-2 justify-end">
              <span className="py-0.5 px-1 w-36 rounded shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
              <h1 className="text-sm sm:text-base text-white font-bold shadow-sm leading-[1.1rem] sm:leading-[1.5rem]">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</h1>
            </div>
          </div>
          <div className="relative h-[8rem] sm:h-full flex-1 group overflow-hidden">
            <img className="z-1 h-full object-cover transition-all duration-200 group-hover:scale-105" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
            <div className="px-8 py-4 h-full w-full absolute top-0 z-2 bg-gradient-to-b from-black/10 via-black/10 to-black/70 flex flex-col space-y-2 justify-end">
              <span className="py-0.5 px-1 w-36 rounded shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
              <h1 className="text-sm sm:text-base text-white font-bold shadow-sm leading-[1.1rem] sm:leading-[1.5rem]">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</h1>
            </div>
          </div>
          <div className="relative h-[8rem] sm:h-full flex-1 group overflow-hidden">
            <img className="z-1 h-full object-cover transition-all duration-200 group-hover:scale-105" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
            <div className="px-8 py-4 h-full w-full absolute top-0 z-2 bg-gradient-to-b from-black/10 via-black/10 to-black/70 flex flex-col space-y-2 justify-end">
              <span className="py-0.5 px-1 w-36 rounded shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
              <h1 className="text-sm sm:text-base text-white font-bold shadow-sm leading-[1.1rem] sm:leading-[1.5rem]">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</h1>
            </div>
          </div>
        </div>
      </section>

      {/* main content */}
      <section className="my-8 w-full sm:max-w-6xl min-h-screen mx-auto flex flex-col sm:flex-row sm:space-x-4 ">
         {/* Content */}
         <div className="px-2 sm:px-0 flex-1">
            <div className="relative border-b-[3px] border-pink-800/50">
               <span className="text-lg font-semibold font-josefin">GENERAL NEWS</span>
               <span className="w-10 absolute left-0 -bottom-[0.19rem] border-b-[3px] border-gray-800">&nbsp;</span>
            </div>
            <div className="py-4 grid sm:grid-cols-3 sm:gap-4 font-opensans">
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold ">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold ">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold ">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold ">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold ">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold ">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold ">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
                 <div>
                     <div className="relative">
                       <img className="h-48 object-cover" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
                       <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
                     </div>
                     <p className="py-3 text-base text-gray-700 font-semibold ">Domestic debt exchange: No haircut on treasury bills, principal bonds Govt</p>
                 </div>
            </div>
            <div>
                 <div></div>
                 <div className="px-4 py-2 flex items-center justify-center space-x-4 rounded-lg bg-pink-50 cursor-pointer">
                     <span className="font-bold text-pink-800">LOAD MORE</span>
                     <FaRegArrowAltCircleDown className="w-5 h-5 text-pink-900"/>
                 </div>
            </div>
         </div>
         
         {/* Sidebar - AdBox */}
         <div className="sm:sticky sm:top-5 mx-auto my-4 sm:my-0 sm:mx-0 p-4 h-screen w-[95%] sm:w-[33%] rounded-lg bg-slate-100">
             <div>
                Advertisements
             </div>  
             <div>
                Top Stories
             </div>
         </div>
      </section>
      
    </Layout>
  )
}

export default Home
