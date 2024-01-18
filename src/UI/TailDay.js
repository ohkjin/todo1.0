import React from 'react'
import TailBox from './TailBox'
import { useRecoilValue } from 'recoil'
import { todoArray } from '../components/TodoAtom';

export default function TailDay({text}) {
  const todoList = useRecoilValue(todoArray);
  return (
    <div className='flex flex-col'>
        <div className="Monday12thMay mb-1 text-red-400 text-opacity-90 text-sm font-medium font-['Inter']">
            {text}
        </div>
        <div>
          {/* <TailBox item={test}/> */}
          {todoList.map((todo)=><div><TailBox key={`todo${todo.id}`} item={todo}/>
                                {/* <div className='text-white'>{todo.id}is{todo.text}and{todo.isComplete}</div> */}
                                </div>)}
        </div>
    </div>
  )
}
