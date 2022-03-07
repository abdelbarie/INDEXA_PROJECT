import React from 'react';
import Link from 'next/link';

const HomePageHeader = (props) => {
    return (
        <div className="HomePgeHeader relative bg-white md:text-left grid md:grid-cols-2 px-10 md:px-20 lg:px-32 text-custom-dark-blue dark:text-custom-dark-bg" style={{backgroundImage:`url(${props.backGround})`}}>
          <div className="absolute w-full h-full bg-custom-dark-green opacity-50 dark:block hidden"></div>
        <div className="h-fit my-auto relative">
          <div className={`${props.greentext ? 'text-custom-green' : ''}  frop-shadow-md font-extrabold text-4xl drop-shadow-md lg:text-6xl py-3`}>
            {props.content.home.header.title}
          </div>
          <div className={`${props.greentext ? 'text-white' : ''} font-semibold md:text-lg text-base  drop-shadow-md`}>
            {props.content.home.header.description}
          </div>
          <Link href='/products'>
            <button className="font-semibold text-xl md:text-2xl px-6 py-2 mt-6 rounded-full dark:hover:bg-custom-dark-bg dark:bg-custom-dark-green bg-custom-green hover:bg-custom-dark-green text-white">
              {props.content.home.header.shopButton}
            </button>
          </Link >
        </div>
      </div>
    );
};

export default HomePageHeader;