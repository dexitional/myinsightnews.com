import React from 'react'
import NavLink from '../components/NavLink'
import { HiOutlineMoon } from 'react-icons/hi'
import { FaTwitter,FaYoutube,FaSoundcloud,FaSearch,FaRegArrowAltCircleDown,FaFacebookF,FaHamburger } from 'react-icons/fa'
import { BiSearch } from 'react-icons/bi'
import { IoMdMenu,IoMdSearch } from 'react-icons/io'

function Footer() {
  return (
   <section className="w-full bg-gray-800 ">
   <div className="px-2 sm:px-0 py-4 mx-auto w-full max-w-6xl flex flex-col space-y-4 items-center sm:flex-row sm:space-x-6">
       <div className="mt-4 w-48 flex flex-col space-y-2 items-center">
          <span className="px-4 text-xl tracking-wider font-bold text-pink-700 flex items-center border-l-4 border-pink-600 font-kaushan">myinsightnews.com</span>
          <p className="text-slate-100 text-xs tracking-wide">© 2019 MyInsightNewsGH <br/><em>Ghana's #1 news agency.</em></p>
       </div>
       <div className="flex-1 flex-col space-y-2">
          <div className="text-white text-xs tracking-wider font-bold">Navigate Site</div>
          <div className="px-0 py-3 sm:px-3 sm:py-0 w-full sm:w-4/5 flex flex-col justify-center sm:flex-row sm:justify-center space-y-2 sm:space-x-2 sm:space-y-0 text-[0.7rem] text-center text-white font-medium border rounded divider divide-y-2 sm:divide-y-0 sm:divide-x-4 divide-pink-600">
              <div className="py-0 pl-2">HOME</div>
              <div className="py-0 pl-2">NEWS</div>
              <div className="py-0 pl-2">POLITICS</div>
              <div className="py-0 pl-2">EDUCATION</div>
              <div className="py-0 pl-2">ENTERTAINMENT</div>
              <div className="py-0 pl-2">ECONOMIC</div>
              <div className="py-0 pl-2">LAW</div>
              <div className="pl-2">SPORTS</div>
          </div>
       </div>
       <div className="w-56">
          <h1 className="py-1 text-lg text-white text-center font-bold font-josefin ">Follow Us</h1>
          <div className="px-4 py-1 flex flex-row space-x-10 border border-white rounded-lg">
            <FaFacebookF className="w-5 h-5 flex items-center justify-center  text-lg text-white font-bold cursor-pointer"/>
            <FaTwitter className="w-6 h-6 flex items-center justify-center text-lg text-white font-bold cursor-pointer"/>
            <FaYoutube className="w-7 h-6 flex items-center justify-center  text-lg text-white font-bold cursor-pointer"/>
            <FaSoundcloud className="w-8 h-7 flex items-center justify-center text-lg text-white font-bold cursor-pointer"/>
          </div>
       </div>
   </div>
</section>

  )
}

export default Footer