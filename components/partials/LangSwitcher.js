import React, { useState } from 'react';

const LangSwitcher = () => {
    const [isOpen , setOpen]= useState(false) ; 
    const [lang , setLang] = useState('FR') ; 
    const openSwitcher = () =>{
        setOpen(!isOpen) ; 
    }
    return (
        <div className="md:px-2 px-1 flex font-bold gap-1" >
            <div>
            <div className="flex md:gap-2 gap-1">FR <img src="/imgs/france.png" className="w-4 h-4  md:w-6 md:h-6 md:mt-0" alt='fr flag'></img></div>
            <div className={`flex md:gap-2 gap-1 ${isOpen?'block':'hidden'} absolute shadow-md`}>AR <img src="/imgs/algeria.png" className="w-4 h-4  md:w-6 md:h-6 md:mt-0" alt='alg flag'></img></div>
            </div>
            <div className="pt-1 cursor-pointer" onClick={openSwitcher}>
            <img src={isOpen?'/imgs/up.png':'/imgs/Down.png'} alt="up icon" className="w-4 h-4  md:w-6 md:h-6 md:mt-0"></img>
            </div>
            
        </div>
    );
};

export default LangSwitcher;