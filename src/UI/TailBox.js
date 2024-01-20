import TailTag from './TailTag'
import { useRecoilState } from 'recoil'
import { todoArray } from '../components/TodoAtom';
import { RiEdit2Line, RiDeleteBin6Line } from "react-icons/ri";

export default function TailBox({ item }) {
    const [todoArr, setTodoArr] = useRecoilState(todoArray);
    const idx = todoArr.findIndex(arrItem => arrItem === item);
    let linetrough = item.isComplete? 'line-through text-zinc-500 italic':'text-slate-800';
    // console.log(idx)
    const editItem = ({target:{value}})=>{
        const newArr = replaceArrItemAtIdx(todoArr,idx,{
            ...item,
            text: value,
        })
        setTodoArr(newArr);
    }
    const deleteItem = () => {
        const newArr = removeArrItemAtIdx(todoArr, idx);
        setTodoArr(newArr);
    }
    const toggleComplete = () =>{
        const newArr = replaceArrItemAtIdx(todoArr, idx,{
            ...item,
            isComplete: !item.isComplete,
        });
        setTodoArr(newArr);
    }

    return (
        <div className="Box w-full my-2 h-20 flex justify-between items-center px-5 py-4 bg-slate-50 bg-opacity-70 rounded-xl shadow shadow-white" >
            <input type='checkbox' 
                   checked={item.isComplete}
                   onChange={toggleComplete}
                   className='border border-red-400'/>
            <div className='TextandTags flex flex-col justify-start items-start'>
                <input type='text'
                       value={item.text}
                       onChange={editItem}
                       className={`Text ${linetrough} bg-inherit appearance-none  text-base font-medium font-['Inter']`}/>
                {/* <TailTag text='High' /> */}
                <input type='text'
                       readOnly
                       value={item.createdDate}
                       className={`Text ${linetrough} bg-inherit appearance-none  text-base font-medium text-sm font-['Inter']`}/>
            </div>
            <div className='flex flex-row'>
                <button>
                    <RiEdit2Line className='w-5 h-5 text-red-700 opacity-50 mx-1' />
                </button>
                <button onClick={deleteItem}>
                    <RiDeleteBin6Line className='w-5 h-5 text-red-700 opacity-50 mx-1' />
                </button>
            </div>
        </div>
    )
}

function replaceArrItemAtIdx(arr, idx, newText){
    return [...arr.slice(0,idx),newText,...arr.slice(idx+1)]
}

function removeArrItemAtIdx(arr, idx){
    return [...arr.slice(0,idx),...arr.slice(idx+1)]
}
