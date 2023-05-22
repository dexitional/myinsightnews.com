import React from 'react'
import { FaTwitter,FaYoutube,FaSoundcloud,FaSearch,FaRegArrowAltCircleDown,FaFacebookF,FaHamburger } from 'react-icons/fa'


function TopSocials() {
  return (
    <div className="flex items-center space-x-1">
      <FaFacebookF className="p-1 w-6 h-6 flex items-center justify-center bg-blue-900/80 text-lg text-white font-bold cursor-pointer"/>
      <FaTwitter className="p-1.5 w-6 h-6 flex items-center justify-center bg-blue-400/80 text-lg text-white font-bold cursor-pointer"/>
      <FaYoutube className="p-1 w-6 h-6 flex items-center justify-center bg-red-700/80 text-lg text-white font-bold cursor-pointer"/>
      <FaSoundcloud className="p-1 w-6 h-6 flex items-center justify-center bg-orange-400/80 text-lg text-white font-bold cursor-pointer"/>
    </div>
  )
}

export default TopSocials