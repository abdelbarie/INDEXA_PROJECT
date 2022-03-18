import React from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import { useScrollTo } from "react-use-window-scroll";
import { useState , useEffect } from 'react';


const GoTop = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
      const handleScroll = () => {
        setScrollY(window.scrollY);
      };
  
      // just trigger this so that the initial state 
      // is updated as soon as the component is mounted
      // related: https://stackoverflow.com/a/63408216
      handleScroll();
  
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const GoTop = ()=>{
        scrollTo({ top: 0, left: 0, behavior: "smooth" })  
    }
    
    return (
        <div onClick={GoTop} className={`${scrollY > 400 ? 'fixed' : 'hidden'} z-50 cursor-pointer rounded-lg hover:opacity-80 text-custom-green md:text-5xl fixed text-4xl bottom-5 left-2 md:bottom-8 md:left-5`}>
            <BsFillArrowUpCircleFill></BsFillArrowUpCircleFill>
        </div>
    );
};

export default GoTop;