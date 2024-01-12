import TailWeek from '../UI/TailWeek'
import TailInput from '../UI/TailInput'
import { RecoilRoot } from 'recoil'

export default function Todo() {
  return (
    <div className='Android bg-slate-800 w-[360px] h-[720px] rounded-lg flex flex-col justify-center items-center'>
      <RecoilRoot>
      <div className='Todo w-[90%] h-[90%] flex flex-col '>
        <div className="TodoTitle basis-1/12 my-5 text-zinc-300 text-3xl font-semibold font-['Inter']">
          To Do List
        </div>
        <div className='TodoList basis-10/12 container justify-self-start overflow-y-auto overflow-x-hidden w-full'>
          <TailWeek text={'This Week'} />
        </div>
        <div className='TodoInput basis-1/12'>
        <TailInput />
        </div>
      </div>
      </RecoilRoot>
    </div>
  )
}
