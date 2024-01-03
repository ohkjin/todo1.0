import React from 'react'
import TailBox from './TailBox'

export default function TailDay({text}) {
  return (
    <div>
        <div className="Monday12thMay left-[23.39px] top-[196.47px] absolute text-pink-600 text-base font-medium font-['Inter']">
            {text}
        </div>
        <TailBox/>
    </div>
  )
}
