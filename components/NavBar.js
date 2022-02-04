import React, { useState } from "react";
import Link from "next/link";
import LangSwitcher from "./partials/LangSwitcher";

const NavBar = () => {
  const [isConnected, setConnected] = useState(false);
  const [isOpen , setOpen] = useState(false) ; 
  const handleClick = ()=>{
    setOpen(!isOpen) ; 
  }
  const userOrder = 0
  return (
    <div className="pt-1 mb-3">
      <div className="flex w-fit float-right mr-2 text-xs md:text-sm lg:text-base font-normal">
        <div className="px-1">023 80 44 97-98</div>|
        <div className="px-1">Allez au Menu</div>|
        <div className="px-1">Allez au Menu</div>|
        <div className="px-1">Allez au Menu</div>|
        <LangSwitcher></LangSwitcher>
      </div>
      <div className="flex px-3 lg:px-6 md:py-5 py-3 justify-between clear-right ">
        <Link href="/" className="">
          <a><img src="/imgs/logo-indexa.png" className="w-28 md:w-40"></img></a>
        </Link>
        <div className="w-fit grid grid-cols-1 md:grid-cols-6 hidden md:inline-flex">
          <div className="lg:px-6 px-4 font-normal lg:text-xl">
            {" "}
            <Link href="/">
              <a>Acceuil</a>
            </Link>
          </div>
          <div className="lg:px-6 px-4 font-normal lg:text-xl">
            {" "}
            <Link href="/products">
              <a>Produit</a>
            </Link>
          </div>
          <div className="lg:px-6 px-4 w-fit font-normal lg:text-xl">
            {" "}
            <Link href="/about">
              <a>A propos</a>
            </Link>
          </div>
          <div className="lg:px-6 px-4 w-fit font-normal lg:text-xl">
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>

          {/* if user is not connected then display profil and shop bag */}
          {isConnected && (<>
              <div className="w-fit ml-auto font-normal text-xl pl-6 pr-4">
                <Link href="/profil" >
                  <a className="flex gap-1 text-lg"><img src="/imgs/profilPic.png" alt="profilPic" className="rounded-full" width="30px"></img>profil</a>
                </Link>
      
              </div>
        
              <div className="font-semibold text-xl justify-between">
                <Link href="/payment" >
                  <a className="  w-fit ml-auto flex gap-2"><img src="/imgs/chariot.svg" alt="chariot icon" width='30px' className="-mt-1"></img>{userOrder}</a>
                </Link>
              </div>
              </>
            )}

          {/* if user not connected then display login and signUp buttons  */}
          {!isConnected && ( <>
              <div className="lg:px-3 px-1 font-semibold lg:text-xl ">
                <Link href="/logIn">
                  <button className="lg:text-sm text-xs font-bold loginButton py-2 rounded-lg">Connectez-vous</button>
                </Link>
              </div>
          
              <div className="lg:px-3 px-1 font-semibold lg:text-xl ">
                <Link href="/signUp">
                <button className="lg:text-sm text-xs font-bold signUpButton py-2 rounded-lg">Inscrivez-vous</button>
                </Link>
              </div>
              </>
            )}
        </div>


        {/* reponsive nav content */ }
        <div className="inline-flex md:hidden"><img src={isOpen?"/imgs/X.png":"/imgs/burger.png"} width="28px" onClick={handleClick}></img></div>
      </div>
      <div className={`${isOpen?'block' : 'hidden'} gap-y-2 grid md:hidden`}>
          <div className="px-6 font-normal text-xl w-fit mx-auto">
            {" "}
            <Link href="/">
              <a onClick={handleClick}>Acceuil</a>
            </Link>
          </div>
          <div className="px-6 font-normal text-xl w-fit mx-auto">
            {" "}
            <Link href="/products">
              <a onClick={handleClick}>Produit</a>
            </Link>
          </div>
          <div className="px-6 w-fit font-normal text-xl w-fit mx-auto">
            {" "}
            <Link href="/about">
              <a onClick={handleClick}>A propos</a>
            </Link>
          </div>
          <div className="px-6 w-fit font-normal text-xl w-fit mx-auto">
            <Link href="/contact">
              <a onClick={handleClick}>Contact</a>
            </Link>
          </div>

          {/* if user is not connected then display profil and shop bag */}
          {isConnected && (<>
              <div className="w-fit ml-auto font-normal text-xl pl-6 pr-4 w-fit mx-auto">
                <Link href="/profil" >
                  <a className="flex gap-1 text-lg"><img src="/imgs/profilPic.png" alt="profilPic" className="rounded-full" width="30px" onClick={handleClick}></img>profil</a>
                </Link>
      
              </div>
        
              <div className="font-semibold text-xl justify-between w-fit mx-auto">
                <Link href="/payment" >
                  <a className="  w-fit ml-auto flex gap-2" onClick={handleClick}><img src="/imgs/chariot.svg" alt="chariot icon" width='30px' className="-mt-1"></img>{userOrder}</a>
                </Link>
              </div>
              </>
            )}

          {/* if user not connected then display login and signUp buttons  */}
          {!isConnected && ( <>
              <div className="px-3 font-semibold text-xl w-fit mx-auto">
                <Link href="/logIn" >
                  <button className="text-sm font-bold loginButton py-2 rounded-lg" onClick={handleClick}>Connectez-vous</button>
                </Link>
              </div>
          
              <div className="px-3 font-semibold text-xl w-fit mx-auto">
                <Link href="/signUp">
                <button className="text-sm font-bold signUpButton py-2 rounded-lg" onClick={handleClick}>Inscrivez-vous</button>
                </Link>
              </div>
              </>
            )}
        </div>
    </div>
  );
};

export default NavBar;
