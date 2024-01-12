import React, { useRef, useState } from 'react'
import { inputArray } from '../components/TodoAtom';
import { useRecoilState } from 'recoil';

export default function TailInput() {
  const today = new Date();
  const inputText = useRef();
  // const [inputArray,setInputArray] = useState(['init']);
  const [inputArr,setInputArr] = useRecoilState(inputArray);
  const [testBox,setTestBox] = useState();
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleInput(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  const handleInput =(e)=>{
    e.preventDefault();
    if(inputText.current.value==="") return;
    inputArr.push(inputText.current.value);
    let tm = inputArr.map((i,idx)=><div key={`input${idx}`}className="InputTest w-5/6 h-10 bg-white bg-opacity-60 rounded-xl shadow shadow-white
                                      flex justify-center items-center" >{i}</div>)
    setTestBox(tm);
    console.log(inputArr)
  }
  return (
    <div className='Input flex flex-col'>
        {testBox}
    <div className="InputBox w-5/6 h-10 bg-white bg-opacity-60 rounded-xl shadow shadow-white
                             flex justify-center items-center" >
      <input type="text" ref={inputText} name="inputText" placeholder="input text" className='opacity-50 w-[90%]'/>
    </div>
    <div>
      <button type="submit" onClick={handleInput} onKeyPress={handleOnKeyPress} className='bg-red-400 bg-opacity-80 w-10 h-10 rounded-full ml-3'></button>
    </div>
    </div>
  )
}
