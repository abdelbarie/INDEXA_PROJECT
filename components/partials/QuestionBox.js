import React, { useState } from "react";
import { useRouter } from "next/router";

const QuestionBox = (props) => {
    const [isOpen , setOpen]= useState(false)
    const { locale, locales, asPath } = useRouter();

    const handleClick =()=>{
        setOpen(!isOpen) ; 
    }
    return (
        <div className={`QAbox grid grid-cols-12 w-full gap-1 md:w-8/12 lg:w-7/12 mx-auto my-2 md:my-4 border-b-4 questionBox py-2 justify-between`}>
            <div className="col-span-11">
            <div className={ `${locale === 'fr' ? 'text-left' : 'text-right'} w-full font-semibold text-lg`}>{props.question}</div>
            <div className={`${isOpen?'block':'hidden'} ${locale === 'fr' ? 'text-left' : 'text-right'} text-md md:text-lg font-light pt-2 productDetails`}>{props.answer}</div>
            </div>
            <div className="relative w-fit ml-auto col-span-1 cursor-pointer">
                <img alt="open" src={isOpen?'/imgs/greenUp.png':'/imgs/greenDown.png'} width="25px" className="float-right  top-2 " onClick={handleClick}></img>
            </div>
        </div>
    );
};

export default QuestionBox;