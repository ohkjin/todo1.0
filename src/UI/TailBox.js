import React from 'react'
import TailTag from './TailTag'
import {FcMultipleCameras} from 'react-icons/fc'

export default function TailBox() {
    return (
        <div className="Group5 w-96 h-20 left-[23.39px] top-[230.38px] absolute">
            <div className="Rectangle1 w-96 h-20 left-0 top-0 absolute bg-white rounded-xl shadow" />
            <div className="BuyGroceries left-[23.39px] top-[15.20px] absolute text-neutral-900 text-lg font-normal font-['Inter']">
                Buy groceries 
            </div>
            <div className="Group2 w-5 h-5 left-[297.04px] top-[26.90px] absolute">
                <div className="ClarityEditLine w-5 h-5 left-0 top-0 absolute" />
                <FontAwesomeIcon icon="fa-brands fa-react" />
            </div>
            <div className="FluentDelete20Regular w-5 h-5 left-[329.78px] top-[26.90px] absolute" />
            <TailTag text = 'High'/>
        </div>
    )
}
