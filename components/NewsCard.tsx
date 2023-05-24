import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function NewsCard({ title = '', link = '', category = '', imgUrl = '' }: any) {
  return (
    <Link href={link}>
      <div className="w-full">
          <div className="relative w-full h-48 ">
            <Image src={imgUrl} alt={title} className="object-cover object-top" fill />
            <span className="absolute bottom-3 left-3 py-0.5 px-1 w-36 shadow-sm bg-pink-700/70 text-xs font-semibold tracking-wider text-white text-center">{category?.toUpperCase()}</span>
          </div>
          <p className="py-3 text-base text-gray-700 font-semibold">{title}</p>
      </div>
    </Link>
  )
}

export default NewsCard