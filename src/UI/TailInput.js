import React, { useState } from 'react'
import { todoArray } from '../components/TodoAtom';
import { useSetRecoilState } from 'recoil';

// 고유 id 생성용
let id =  0;
function getId(){
  return id++; // it strangely starts from 0
}

export default function TailInput() {
  const today = new Date();
  // const inputValue = useRef();
  const [inputValue,setInputValue] = useState('');
  const setInputArr = useSetRecoilState(todoArray);
  // const [testBox,setTestBox] = useState('');
  
  const handleInputChange = ({target: {value}}) =>{
    setInputValue(value);
  };
  const handleInput =()=>{
    if(inputValue==="") return;
    setInputArr((prevArr)=>[
      ...prevArr,
      {
        id: getId(),
        text: inputValue+id,
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
  const handleOnKeyPress = e => {
    if (e.key === 'Enter') {
      handleInput(); // Enter 입력이 되면 클릭 이벤트 실행
    }
  };
  return (
    <div className='Input flex flex-col'>
        {/* {testBox} */}
    <div className="InputBox w-5/6 h-10 bg-white bg-opacity-60 rounded-xl shadow shadow-white
                             flex justify-center items-center" >
      <input type="text" value={inputValue} onChange={handleInputChange} placeholder="input text" className='opacity-50 w-[90%]'/>
    </div>
    <div>
      <button type="submit" onClick={handleInput} onKeyPress={handleOnKeyPress} className='bg-red-400 bg-opacity-80 w-10 h-10 rounded-full ml-3'></button>
    </div>
    </div>
  )
}
