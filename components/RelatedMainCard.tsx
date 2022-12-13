import Link from 'next/link'
import React from 'react'

function RelatedMainCard({ title = '', excerpt = '', author = '', link = '', category = '', imgUrl = '' }: any) {
  return (
    <Link href={link}>
    <div className="my-4 flex sm:flex-row flex-col sm:items-start space-y-2 sm:space-x-3 sm:space-y-0">
        <div className="relative w-full sm:w-2/5 h-48">
          <img src={imgUrl} className="w-full h-48 object-cover" />
          <button className="absolute top-3 right-3 px-3 py-1 bg-pink-800/80 text-xs text-white font-semibold rounded-sm">TOP NEWS</button>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start space-y-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-xs">BY <span className="font-semibold">{author}</span></p>
            <div className="text-sm tracking-wide">{excerpt}</div>
            <button className="px-3 py-1 bg-gray-600 text-xs text-white font-semibold rounded-sm">READ MORE</button>
        </div>
    </div>
    </Link>
  )
}

export default RelatedMainCard