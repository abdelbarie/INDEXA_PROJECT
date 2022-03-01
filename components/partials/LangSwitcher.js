import React, { useState } from 'react';
import {useRouter} from 'next/router' ; 
import Link from 'next/link'


const LangSwitcher = () => {
    const {locale , locales , asPath} = useRouter() ; 
    const [lang , setLang] = useState([locale != 'fr' , locale === 'fr']) ; 

    const handleClick= (i)=>{
        let ii = [false , false] ; 
        ii[i] = true ; 
        setLang(ii) ;
    }
    return (
        <div className="md:px-2 px-1 flex font-bold gap-1" >
            <div className="flex">
                <Link href={asPath} locale='fr' >
                    <a>
            <div className={`${lang[0] ? 'block' : 'hidden'} md:gap-2 gap-1 text-sm text-center ml-2 hover:text-custom-green`} onClick={()=>handleClick(1)}>Fancais</div>
            </a>
                </Link>
                <Link href={asPath} locale='arab' >
                    <a>
                <div className={`${lang[1] ? 'block' : 'hidden'} md:gap-2 gap-1 text-md  text-center ml-2 hover:text-custom-green`} onClick={()=>handleClick(0)}>عربي</div>
            </a>
                </Link> </div>  
        </div>
    );
};

export default LangSwitcher;