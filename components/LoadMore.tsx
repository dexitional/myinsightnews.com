import React from 'react'
import { FaRegArrowAltCircleDown } from 'react-icons/fa'

function LoadMore({ onClick = null }) {
   return (
    <div>
        <div></div>
        <div className="px-4 py-2 flex items-center justify-center space-x-4 rounded-lg bg-pink-50 cursor-pointer">
            <span className="font-bold text-pink-800">LOAD MORE</span>
            <FaRegArrowAltCircleDown className="w-5 h-5 text-pink-900"/>
        </div>
    </div>
  )
}

export default LoadMore