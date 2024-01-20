import React, { useState } from 'react'
import { todoArray } from '../components/TodoAtom';
import { useSetRecoilState } from 'recoil';
import { IoMdSend } from "react-icons/io";

export default function TailInput() {
  const today = new Date();
  // const inputValue = useRef();
  const [inputValue, setInputValue] = useState('');
  const setInputArr = useSetRecoilState(todoArray);
  // const [testBox,setTestBox] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  const handleInput = (e) => {
    e.preventDefault();
    if (inputValue === "") return;
    setInputArr((prevArr) => [
      ...prevArr,
      {
        id: getId(),
        text: inputValue,
        createdDate: today,
        isComplete: false,
      },
    ]);
    setInputValue('');
    // inputArr.push(inputText.current.value);
    // let tm = inputArr.map((i,idx)=><div key={`input${idx}`}className="InputTest w-5/6 h-10 bg-white bg-opacity-60 rounded-xl shadow shadow-white
    //                                   flex justify-center items-center" >{i}</div>)
    // setTestBox(tm);
    // console.log(inputArr)
  }
  const handleOnKeyUP = (e) => {
    if (e.key === 'Enter') {
      handleInput(e); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  return (
    <div className='Input flex flex-row'>
      {/* {testBox} */}
      <div className="InputBox w-5/6 h-10 bg-white bg-opacity-60 rounded-xl shadow shadow-white
                             flex justify-center items-center" >
        <input type="text" value={inputValue} onChange={handleInputChange} onKeyUp={(e)=>handleOnKeyUP(e)} placeholder="input text" className='opacity-80 text-slate-900 placeholder-slate-500 bg-transparent w-[90%]' />
      </div>
      <div className='ml-3'>
        <button type="submit" onClick={handleInput} >
          <IoMdSend className='text-red-400 w-10 h-10 bg-opacity-80 -rotate-90' />
        </button>
      </div>
    </div>
  )
}

// 고유 id 생성용
let id = 0;
function getId() {
  return id++; // it strangely starts from 0
}
