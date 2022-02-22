import React, { useState } from 'react';
import {useRouter} from 'next/router' ; 
import Link from 'next/link'

const LangSwitcher = () => {
    const {locale , locales , asPath} = useRouter() ; 
    return (
        <div className="md:px-2 px-1 flex font-bold gap-1" >
            <div className="flex">
                <Link href={asPath} locale='fr'>
                    <a>
            <div className=" md:gap-2 gap-1 text-xs text-center ml-2 "><img src="/imgs/france.png" className="w-4 h-4  md:w-6 md:h-6 md:mt-0" alt='fr flag'></img>FR</div>
            </a>
                </Link>
                <Link href={asPath} locale='arab'>
                    <a>
                <div className={`md:gap-2 gap-1 text-xs text-center ml-2 `}> <img src="/imgs/algeria.png" className="w-4 h-4  md:w-6 md:h-6 md:mt-0" alt='alg flag'></img>AR</div>
            </a>
                </Link> </div>  
        </div>
    );
};

export default LangSwitcher;