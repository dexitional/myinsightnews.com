import Link from 'next/link'
import React from 'react'

function NavLink({ title,link }: any) {
  return (
    <Link href={link} className="h-full">
    <div className="px-3 w-full h-full flex items-center text-sm font-bold hover:bg-pink-50 cursor-pointer">
        { title }
    </div>
    </Link>
  )
}

export default NavLink