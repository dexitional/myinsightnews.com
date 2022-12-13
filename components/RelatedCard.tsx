import Link from 'next/link'
import React from 'react'

function RelatedCard({ title = '', link = '', imgUrl = '' }: any) {
  return (
    <Link href={link}>
    <div className="flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0">
        <img src={imgUrl} className="w-full sm:w-1/3 h-20 object-cover" />
        <h1 className="text-xs sm:text-sm font-semibold">{title}</h1>
    </div>
    </Link>
  )
}

export default RelatedCard