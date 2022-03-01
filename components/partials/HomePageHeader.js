import React from 'react';
import Link from 'next/link';

const HomePageHeader = (props) => {
    return (
        <div className="HomePgeHeader bg-white md:text-left grid md:grid-cols-2 px-10 md:px-20 lg:px-32 text-custom-dark-blue dark:text-custom-dark-bg">
        <div className="h-fit my-auto ">
          <div className="font-extrabold text-4xl lg:text-6xl py-3">
            {props.content.home.header.title}
          </div>
          <div className="font-semibold md:text-lg text-base">
            {props.content.home.header.description}
          </div>
          <Link href='/products'>
            <button className="font-bold text-xl md:text-2xl px-6 py-2 mt-6 bg-custom-green hover:bg-custom-dark-green text-white">
              {props.content.home.header.shopButton}
            </button>
          </Link >
        </div>
      </div>
    );
};

export default HomePageHeader;