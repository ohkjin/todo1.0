import React from 'react'
import TailDay from './TailDay'

export default function TailWeek({text}) {
  return (
    <div>
         <div className="ThisWeek text-stone-300 text-lg font-semibold font-['Inter']">
            {text}
        </div>
        <TailDay text ='Monday, 12th May'/>
    </div>
  )
}
