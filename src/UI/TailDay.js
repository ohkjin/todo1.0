import React from 'react'
import TailBox from './TailBox'

export default function TailDay({text}) {
  return (
    <div className='flex flex-col'>
        <div className="Monday12thMay left-[23.39px] top-[196.47px] absolute text-red-500 text-base font-medium font-['Inter']">
            {text}
        </div>
        <TailBox/>
    </div>
  )
}
