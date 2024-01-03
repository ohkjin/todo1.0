import React from 'react'
import TailWeek from '../UI/TailWeek'

export default function TodoList() {
  return (
    <div className="AndroidLarge1 w-96 h-96 relative bg-white rounded-3xl shadow ">
        <div className="ToDoList left-[23.39px] top-[70.17px] absolute text-black text-3xl font-semibold font-['Inter']">
            To Do List
        </div>
        <TailWeek text = 'This Week'/>
    </div>
  )
}
