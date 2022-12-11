import Link from 'next/link'
import React from 'react'

function NavLink({ title,link,active = false }: any) {
  return (
    <Link href={link} className="h-full">
    <div className={`
      ${active ? 
         'px-3 w-full h-full flex items-center text-sm font-bold hover:bg-pink-50 cursor-pointer rounded border-2 border-black bg-pink-50/70'
       : 'px-3 w-full h-full flex items-center text-sm font-bold hover:bg-pink-50 cursor-pointer'
      }`}>
        { title }
    </div>
    </Link>
  )
}

export default NavLink