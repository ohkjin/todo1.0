import React from 'react'
import TailTag from './TailTag'
// import {FcMultipleCameras} from 'react-icons/fc'

export default function TailBox() {
    return (
        <div className="Group5 w-96 h-20 left-[23.39px] top-[230.38px] absolute">
            <div className="Rectangle1 w-96 h-20 left-0 top-0 absolute bg-white bg-opacity-80 rounded-xl shadow" />
    <div className="BuyGroceries left-[23.39px] top-[15.20px] absolute text-neutral-900 text-lg font-normal font-['Inter']">
                Buy groceries 
            </div>
            <div className="Group2 w-5 h-5 left-[297.04px] top-[26.90px] absolute justify-center items-center inline-flex">
      <div className="ClarityEditLine w-5 h-5 relative flex-col justify-start items-start flex" />
    </div>
            <div className="FluentDelete20Regular w-5 h-5 px-0.5 py-0.5 left-[329.78px] top-[26.90px] absolute justify-center items-center inline-flex" />
    <div className="Frame3 w-10 h-6 pl-2 pr-1.5 py-1 left-[23.39px] top-[46.78px] absolute bg-red-500 bg-opacity-50 rounded justify-center items-center gap-2.5 inline-flex">
                {/* <FontAwesomeIcon icon="fa-brands fa-react" /> */}
            </div>
            <div className="FluentDelete20Regular w-5 h-5 left-[329.78px] top-[26.90px] absolute" />
            <TailTag text = 'High'/>
        </div>
    )
}
