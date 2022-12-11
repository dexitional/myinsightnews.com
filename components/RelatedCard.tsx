import Link from 'next/link'
import React from 'react'

function RelatedCard({ title = '', link = '', imgUrl = '' }: any) {
  return (
    <Link href={link}>
    <div className="flex space-x-2">
        <img src={imgUrl} className="w-1/3 h-20 object-cover" />
        <h1 className="text-md font-semibold">{title}</h1>
    </div>
    </Link>
  )
}

export default RelatedCard