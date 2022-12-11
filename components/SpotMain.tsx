import React from 'react'
import Link from 'next/link'


function SpotMain({ title = '', link = '', category = '', imgUrl = '', }: any) {
  return (
   <Link href={link} className="relative w-full flex-1 group bg-red-900">
    <div className="overflow-hidden">
     <img className="z-1 h-48 sm:h-96 object-cover transition-all duration-200 group-hover:scale-105" src={imgUrl} />
     <div className="px-8 py-4 h-full w-full absolute top-0 z-2 bg-gradient-to-b from-black/10 via-black/10 to-black/70 flex flex-col space-y-2 justify-end">
        <span className="py-0.5 px-1 w-36 flex items-center justify-center rounded shadow-sm group-hover:bg-pink-600/70 bg-pink-800/70 text-xs font-bold tracking-wider text-pink-100 text-center">{category?.toUpperCase()}</span>
        <h1 className="text-lg sm:text-2xl text-white font-bold shadow-sm leading-[1.3rem] sm:leading-0">{title}</h1>
     </div>
     </div>
   </Link>
  )
}

export default SpotMain