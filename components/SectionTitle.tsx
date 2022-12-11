import React from 'react'

function SectionTitle({ title }: any) {
  return (
    <div className="relative border-b-[3px] border-pink-800/50">
        <span className="text-lg font-semibold font-josefin">{title}</span>
        <span className="w-10 absolute left-0 -bottom-[0.19rem] border-b-[3px] border-gray-800">&nbsp;</span>
    </div>
  )
}

export default SectionTitle