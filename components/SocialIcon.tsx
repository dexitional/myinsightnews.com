import Link from 'next/link'
import React from 'react'
import { IconType } from 'react-icons'

interface Props {
  Icon: IconType;
  className: string;
  link: string;
  handle: string | undefined;
  handleColor: string | undefined;
}

function SocialIcon ({ Icon,className,link,handle,handleColor} : Props) {
  return (
   <Link href={link}>
     <div className={`sm:pr-4 flex flex-items items-center text-white ${handleColor}`}>
        <Icon className={className}/>
        { handle ? <span className="hidden sm:flex font-semibold text-sm">Share on {handle}</span>: null }
     </div>
   </Link>
  )
}

export default SocialIcon