import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

function RelatedCard({ title = '', link = '', imgUrl = '' }: any) {
  return (
    <Link href={link}>
      <div className="col-span-1 flex flex-col sm:flex-row space-y-2 sm:space-x-2 sm:space-y-0">
          <div className="relative sm:w-32 w-full h-20">
            <Image src={imgUrl} alt={title} className="object-cover object-top" fill />
          </div>
          <h1 className="flex-1 text-xs sm:text-sm font-semibold">{title}</h1>
      </div>
    </Link>
  )
}

export default RelatedCard