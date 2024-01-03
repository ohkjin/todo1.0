import React from 'react'
import TailDay from './TailDay'

export default function TailWeek({text}) {
  return (
    <div>
        <div className="ThisWeek left-[23.39px] top-[146.18px] absolute text-black text-lg font-semibold font-['Inter']">
            {text}
        </div>
        <TailDay text ='Monday, 12th May'/>
    </div>
  )
}
