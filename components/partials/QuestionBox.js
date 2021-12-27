import React from 'react';
import { useState } from 'react/cjs/react.development';

const QuestionBox = (props) => {
    const [isOpen , setOpen]= useState(false)
    const handleClick =()=>{
        setOpen(!isOpen) ; 
    }
    return (
        <div className="QAbox flex w-full gap-1 md:w-8/12 lg:w-7/12 mx-auto my-2 md:my-4 border-b-4 questionBox py-2 justify-between">
            <div>
            <div className="font-bold md:text-xl">{props.question}</div>
            <div className={`${isOpen?'block':'hidden'} text-sm md:text-md`}>{props.answer}</div>
            </div>
            <div className="relative w-8">
                <img src={isOpen?'/imgs/greenUp.png':'/imgs/greenDown.png'} width="25px" className="absolute right-2 top-2" onClick={handleClick}></img>
            </div>
        </div>
    );
};

export default QuestionBox;