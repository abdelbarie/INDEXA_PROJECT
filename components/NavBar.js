import React, { useState } from "react";
import Link from "next/link";
import LangSwitcher from "./partials/LangSwitcher";

const NavBar = () => {
  const [isConnected, setConnected] = useState(true);
  const [isOpen , setOpen] = useState(false) ; 
  const handleClick = ()=>{
    setOpen(!isOpen) ; 
  }
  const userOrder = 0
  return (
    <div className="pt-1 mb-3">
      <div className="flex w-fit float-right mr-2 text-xs md:text-base">
        <div className="px-1">Allez au Menu</div>|
        <div className="px-1">Allez au Menu</div>|
        <div className="px-1">Allez au Menu</div>|
        <LangSwitcher></LangSwitcher>
      </div>
      <div className="flex px-3 md:px-6 md:py-5 py-3 justify-between clear-right ">
        <div className="">
          <img src="/imgs/logo-indexa.png" className="w-28 md:w-40"></img>
        </div>
        <div className="w-fit grid grid-cols-1 md:grid-cols-6 hidden md:inline-flex">
          <div className="px-6 font-semibold text-xl">
            {" "}
            <Link href="/">
              <a>Acceuil</a>
            </Link>
          </div>
          <div className="px-6 font-semibold text-xl">
            {" "}
            <Link href="/products">
              <a>Produit</a>
            </Link>
          </div>
          <div className="px-6 w-fit font-semibold text-xl">
            {" "}
            <Link href="/about">
              <a>A propos</a>
            </Link>
          </div>
          <div className="pl-6 w-fit font-semibold text-xl">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>

          {/* if user is not connected then display profil and shop bag */}
          {isConnected && (<>
              <div className="w-fit ml-auto font-semibold text-xl pl-6 pr-4">
                <Link href="/profil" >
                  <a className="flex gap-1 text-lg"><img src="/imgs/profilPic.png" alt="profilPic" className="rounded-full" width="30px"></img>profil</a>
                </Link>
      
              </div>
        
              <div className="font-semibold text-xl justify-between">
                <Link href="/" >
                  <a className="  w-fit ml-auto flex gap-2"><img src="/imgs/chariot.svg" alt="chariot icon" width='30px' className="-mt-1"></img>{userOrder}</a>
                </Link>
              </div>
              </>
            )}

          {/* if user not connected then display login and signUp buttons  */}
          {!isConnected && ( <>
              <div className="px-3 font-semibold text-xl">
                <Link href="/">
                  <button className="text-sm font-bold loginButton py-2 rounded-lg">Connectez-vous</button>
                </Link>
              </div>
          
              <div className="px-3 font-semibold text-xl">
                <Link href="/">
                <button className="text-sm font-bold signUpButton py-2 rounded-lg">Inscrivez-vous</button>
                </Link>
              </div>
              </>
            )}
        </div>
        <div className="inline-flex md:hidden"><img src={isOpen?"/imgs/X.png":"/imgs/burger.png"} width="28px" onClick={handleClick}></img></div>
      </div>
      <div className={`${isOpen?'block' : 'hidden'} gap-y-2 grid`}>
          <div className="px-6 font-semibold text-xl w-fit mx-auto">
            {" "}
            <Link href="/">
              <a>Acceuil</a>
            </Link>
          </div>
          <div className="px-6 font-semibold text-xl w-fit mx-auto">
            {" "}
            <Link href="/products">
              <a>Produit</a>
            </Link>
          </div>
          <div className="px-6 w-fit font-semibold text-xl w-fit mx-auto">
            {" "}
            <Link href="/">
              <a>A propos</a>
            </Link>
          </div>
          <div className="px-6 w-fit font-semibold text-xl w-fit mx-auto">
            <Link href="/">
              <a>Contact</a>
            </Link>
          </div>

          {/* if user is not connected then display profil and shop bag */}
          {isConnected && (<>
              <div className="w-fit ml-auto font-semibold text-xl pl-6 pr-4 w-fit mx-auto">
                <Link href="/" >
                  <a className="flex gap-1 text-lg"><img src="/imgs/profilPic.png" alt="profilPic" className="rounded-full" width="30px"></img>profil</a>
                </Link>
      
              </div>
        
              <div className="font-semibold text-xl justify-between w-fit mx-auto">
                <Link href="/" >
                  <a className="  w-fit ml-auto flex gap-2"><img src="/imgs/chariot.svg" alt="chariot icon" width='30px' className="-mt-1"></img>{userOrder}</a>
                </Link>
              </div>
              </>
            )}

          {/* if user not connected then display login and signUp buttons  */}
          {!isConnected && ( <>
              <div className="px-3 font-semibold text-xl w-fit mx-auto">
                <Link href="/">
                  <button className="text-sm font-bold loginButton py-2 rounded-lg">Connectez-vous</button>
                </Link>
              </div>
          
              <div className="px-3 font-semibold text-xl w-fit mx-auto">
                <Link href="/">
                <button className="text-sm font-bold signUpButton py-2 rounded-lg">Inscrivez-vous</button>
                </Link>
              </div>
              </>
            )}
        </div>
    </div>
  );
};

export default NavBar;
