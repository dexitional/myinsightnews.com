import React from 'react'
import Image from 'next/image'
import NavLink from '../components/NavLink'
import { HiOutlineMoon } from 'react-icons/hi'
import { FaTwitter,FaYoutube,FaSoundcloud,FaSearch,FaRegArrowAltCircleDown,FaFacebookF,FaHamburger } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { IoMdMenu,IoMdSearch } from 'react-icons/io'
import { useRouter } from 'next/router'
import moment from 'moment'
import TopSocials from './TopSocials'
import { links } from '../menu'


function Header() {
    const newtime = moment().format()
    const router = useRouter()
    const { slug } = router.query
   
  return (
    <>
     <section className="hidden sm:flex w-full border-t-2 border-t-pink-300 border-b border-b-gray-200 ">
         <div className="mx-auto w-full max-w-6xl h-8 flex flex-row justify-end">
           <div className="h-full flex items-center justify-end space-x-6">
             <FaSearch className="h-4 w-4 cursor-pointer" />
             <span className="mx-4 text-xs text-gray-400/70 font-openSans">{moment().format('dddd, LL')}</span>
              <TopSocials />
             <div className="px-0.5 py-1 w-12 h-6 flex items-center border rounded-2xl bg-gray-300/70 cursor-pointer">
               <HiOutlineMoon  className="p-0.5 w-5 h-5 shadow rounded-full text-gray-600 bg-white"/>
             </div>
           </div>
         </div>
      </section>

      {/* navigations */}
      <section className="h-12 border-b">
        <nav className="mx-auto w-full max-w-6xl h-full hidden sm:flex items-center">
          <div className="px-4 h-full bg-pink-50 text-xl tracking-wider font-bold text-pink-700 flex items-center border-l-4 border-pink-600 font-kaushan">myinsightnews.com</div>
          <div className="h-full flex-1 flex justify-end">
              <div className="h-full flex items-center justify-end font-opensans">
                 { links?.map( link => (<NavLink key={link} title={link.name} link={link.url} active={ slug?.toString() == '' || slug === link.url } />)) }
              </div>
          </div>
        </nav>
        {/* Mobile Hamburger Menu */}
        <nav className="px-4 flex items-center justify-between sm:hidden h-16 bg-pink-50 border-b-2 border-pink-800">
           <IoMdSearch className="h-8 w-8 p-1 rounded-md bg-white/20 text-black"/>
           <span className="px-3 py-1 pt-0.5 text-sm tracking-wider font-bold text-pink-700 flex items-center justify-center font-kaushan bg-white rounded-lg border-2 border-dotted border-pink-700">myinsightnews.com</span>
           <IoMdMenu className="h-8 w-8 p-1 bg-white/20 text-black"/>
        </nav>
      </section>
    </>
  )
}

export default Header