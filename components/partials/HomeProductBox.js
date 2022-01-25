import React from "react";
import Link from "next/link";

const HomeProductBox = (props) => {
  return (
    <div className="w-full pt-5 pb-16">
      <div className="productBox relative w-9/12 mx-auto grid place-content-center">
        <div className="absolute -top-3 px-2 py-1 marks left-2 text-white font-semibold text-sm shadow-md">
          {props.category}
        </div>
        <div className="absolute -top-3 right-2 p-1 marks shadow-md">
          <img src="/imgs/star.png" width="20px"></img>
        </div>
        <img src={props.img} className="w-4/6 mx-auto"></img>
      </div>
      <div className="mx-auto w-fit mt-8">
        <Link href="/products">
        <button className="px-6 py-1 seeMoreButton text-white font-bold">
          SEE MORE
        </button>
        </Link>
       
      </div>
    </div>
  );
};

export default HomeProductBox;
