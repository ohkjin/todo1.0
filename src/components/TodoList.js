import React from 'react'
import TailWeek from '../UI/TailWeek'

export default function TodoList() {
  return (
    <div className="AndroidLarge1 w-50 h-100  relative bg-slate-800 rounded-3xl shadow">
        <div className="ToDoList text-zinc-300 text-3xl font-semibold font-['Inter']">
            To Do List
        </div>
        <TailWeek text = 'This Week'/>
    </div>
  )
}
