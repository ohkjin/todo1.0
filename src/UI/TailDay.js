import React from 'react'
import TailBox from './TailBox'

export default function TailDay({text}) {
  return (
    <div className='flex flex-col'>
        <div className="Monday12thMay mb-2 text-red-400 text-opacity-90 text-sm font-medium font-['Inter']">
            {text}
        </div>
        <div>
          <TailBox text={'hiasdfsadfds'}/>
        </div>
    </div>
  )
}
