import Link from 'next/link'
import React from 'react'

function RelatedMainCard({ title = '', excerpt = '', author = '', link = '', category = '', imgUrl = '' }: any) {
  return (
    <Link href={link}>
    <div className="my-4 flex items-start space-x-3">
        <img src={imgUrl} className="w-2/5 h-48 object-cover" />
        <div className="flex-1 flex flex-col items-start justify-start space-y-2">
            <h1 className="text-xl font-semibold">{title}</h1>
            <p className="text-xs">BY <span className="font-semibold">{author}</span></p>
            <div className="text-sm tracking-wide">{excerpt}</div>
            <button className="px-3 py-1 bg-pink-800 text-xs text-white font-semibold rounded-sm">READ MORE</button>
        </div>
    </div>
    </Link>
  )
}

export default RelatedMainCard