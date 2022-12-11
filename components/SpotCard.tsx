import React from 'react'
import Link from 'next/link'

function SpotCard({ title = '', link = '', category = '', imgUrl = '' }: any) {
  return (
    <Link href={link}>
      <div className="relative h-[8rem] sm:h-full flex-1 group overflow-hidden">
        <img className="z-1 h-full object-cover transition-all duration-200 group-hover:scale-105" src={imgUrl} />
        <div className="px-8 py-4 h-full w-full absolute top-0 z-2 bg-gradient-to-b from-black/10 via-black/10 to-black/70 flex flex-col space-y-2 justify-end">
          <span className="py-0.5 px-1 w-36 rounded shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">{category?.toUpperCase()}</span>
          <h1 className="text-sm sm:text-base text-white font-bold shadow-sm leading-[1.1rem] sm:leading-[1.5rem]">{title}</h1>
        </div>
      </div>
    </Link>
  )
}

export default SpotCard