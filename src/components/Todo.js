import React from 'react'
import TailWeek from '../UI/TailWeek'

export default function Todo() {
  return (
    <div className='Android bg-slate-800 w-[360px] h-[720px] rounded-lg'>
      <div className='Todo'>
        <div className="TodoTitle text-zinc-300 text-3xl font-semibold font-['Inter']">
            To Do List
            <TailWeek text={'This Week'}/>
        </div>
      </div>
    </div>
  )
}
   