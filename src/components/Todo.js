import React from 'react'
import TailWeek from '../UI/TailWeek'
import TailInput from '../UI/TailInput'

export default function Todo() {
  return (
    <div className='Android bg-slate-800 w-[360px] h-[720px] rounded-lg flex flex-col justify-center items-center'>
      <div className='Todo w-[90%] h-[90%] grid'>
        <div className="TodoTitle my-8 text-zinc-300 text-3xl font-semibold font-['Inter']">
          To Do List
        </div>
        <div className='TodoList container flex flex-col justify-center items-center overflow-y-auto overflow-x-hidden w-full'>
          <TailWeek text={'This Week'} />
        </div>
        <TailInput />
      </div>
    </div>
  )
}
