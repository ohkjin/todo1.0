import React from 'react'

export default function TailTag({ text }) {
  return (
    <div className="Tag w-10 h-6 pl-2 pr-1.5 py-1 absolute bg-red-500 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
      <div className="High text-pink-950 text-xs font-semibold font-['Open Sans']">{text}
      </div>
    </div>
  )
}
