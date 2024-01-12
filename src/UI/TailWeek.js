import React from 'react'
import TailDay from './TailDay'

export default function TailWeek({ text }) {
  return (
    <div>
      <div className="Weekly mb-3 text-zinc-300 text-opacity-80 text-lg font-medium font-['Inter']">
        {text}
      </div>
      <div>
        <TailDay text='Monday, 12th May' />
      </div>
    </div>
  )
}
