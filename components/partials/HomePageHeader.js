import React from 'react';
import Link from 'next/link';

const HomePageHeader = () => {
    return (
        <div className="HomePgeHeader bg-white grid md:grid-cols-2 px-10 md:px-20 lg:px-32 text-custom-dark-blue dark:text-custom-dark-bg">
        <div className="h-fit my-auto ">
          <div className="font-extrabold text-4xl lg:text-6xl py-3">
            BRIGH YOUR FUTUR
          </div>
          <div className="font-semibold md:text-lg text-base">
            Destiné aussi bien aux enfants qu aux adultes atteints d une perte
            auditive sévère à profonde.
          </div>
          <Link href='/products'>
            <button className="font-bold text-xl md:text-2xl px-6 py-2 mt-6 shopNowButton text-white">
              SHOP NOW
            </button>
          </Link >
        </div>
      </div>
    );
};

export default HomePageHeader;