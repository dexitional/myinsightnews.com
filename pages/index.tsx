import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import NavLink from '../components/NavLink'
import { HiOutlineMoon } from 'react-icons/hi'
import { FaTwitter,FaYoutube,FaSoundcloud,FaSearch,FaRegArrowAltCircleDown } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'

const Home: NextPage = () => {
  const links = [
     { name:'HOME', url: '/' },
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
    <div className="bg-white">
      {/* socials & Search */}
      <section className="hidden sm:flex w-full border-t-2 border-t-pink-300 border-b border-b-gray-200 ">
         <div className="mx-auto w-full max-w-6xl h-8 flex flex-row justify-end">
           <div className="h-full flex items-center justify-end space-x-6">
             <FaSearch className="h-4 w-4 cursor-pointer" />
             <span className="mx-4 text-xs text-gray-400/70 font-openSans">Saturday, December 3, 2022</span>
             <div className="flex items-center space-x-1">
                <div className="w-6 h-6 flex items-center justify-center bg-blue-900/80 text-lg text-white font-bold cursor-pointer">f</div>
                <FaTwitter className="p-1.5 w-6 h-6 flex items-center justify-center bg-blue-400/80 text-lg text-white font-bold cursor-pointer"/>
                <FaYoutube className="p-1 w-6 h-6 flex items-center justify-center bg-red-700/80 text-lg text-white font-bold cursor-pointer"/>
                <FaSoundcloud className="p-1 w-6 h-6 flex items-center justify-center bg-orange-400/80 text-lg text-white font-bold cursor-pointer"/>
             </div>
             <div className="px-0.5 py-1 w-12 h-6 flex items-center border rounded-2xl bg-gray-300/70 cursor-pointer">
               <HiOutlineMoon  className="p-0.5 w-5 h-5 shadow rounded-full text-gray-600 bg-white"/>
             </div>
           </div>
           
         </div>
      </section>

      {/* navigations */}
      <section className="h-12 border-b ">
        <nav className="mx-auto w-full max-w-6xl h-full hidden sm:flex items-center">
          <div className="px-4 h-full bg-pink-50 text-xl tracking-wider font-bold text-pink-700 flex items-center border-l-4 border-pink-600 font-kaushan">myinsightnews.com</div>
          <div className="h-full flex-1 flex justify-end">
              <div className="h-full flex items-center justify-end font-opensans">
                 { links.map( link => (<NavLink key={link} title={link.name} link={link.url} />)) }
              </div>
          </div>
        </nav>
        {/* Mobile Hamburger Menu */}
        <nav className="flex sm:hidden h-16 bg-pink-50"></nav>
      </section>

      {/* Title Section */}

      {/* top summary Sesction */}
      <section className="my-8 h-full w-full sm:max-w-6xl sm:h-96 mx-auto flex flex-col space-y-6 sm:flex-row sm:space-x-2 bg-slate-50 font-josefin">
        <div className="relative h-full flex-1 group">
            <img className="z-1 h-full object-cover transition-all duration-200 group-hover:scale-105" src={`https://citibusinessnews.com/wp-content/uploads/2022/12/ken-ofori-atta-speech-750x375-1.png`} />
            <div className="px-8 py-4 h-full w-full absolute top-0 z-2 bg-gradient-to-b from-black/10 via-black/10 to-black/70 flex flex-col space-y-2 justify-end">
                <span className="py-0.5 px-1 w-36 rounded shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">LOCAL ECONOMY</span>
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

      {/* Footer */}
      <section className="w-full bg-gray-800 ">
         <div className="px-2 sm:px-0 py-4 mx-auto w-full h-48 max-w-6xl flex space-x-6">
             <div className="mt-4 w-48 flex flex-col space-y-2 items-center">
                <span className="px-4 text-xl tracking-wider font-bold text-pink-700 flex items-center border-l-4 border-pink-600 font-kaushan">myinsightnews.com</span>
                <p className="text-slate-100 text-xs tracking-wide">© 2019 MyInsightNewsGH <br/><em>Ghana's #1 news agency.</em></p>
             </div>
             <div className="flex-1">sad</div>
             <div className="w-56 bg-yellow-50">sad</div>
         </div>
      </section>

    </div>
  )
}

export default Home
