import React from 'react'
import Link from 'next/link'

function NewsCard({ title = '', link = '', category = '', imgUrl = '' }: any) {
  return (
    <Link href={link}>
      <div>
          <div className="relative">
            <img className="h-48 object-cover" src={imgUrl} />
            <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">{category?.toUpperCase()}</span>
          </div>
          <p className="py-3 text-base text-gray-700 font-semibold">{title}</p>
      </div>
    </Link>
  )
}

export default NewsCard