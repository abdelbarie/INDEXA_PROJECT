import React from "react";

const HomeProductBox = (props) => {
  return (
    <div className="w-full">
      <div className="productBox relative w-9/12 mx-auto pt-6">
        <div className="absolute -top-3 px-2 py-1 marks left-2 text-white font-semibold text-sm shadow-md">
          {props.category}
        </div>
        <div className="absolute -top-3 right-2 p-1 marks shadow-md">
          <img src="/imgs/star.png" width="20px"></img>
        </div>
        <img src={props.img} className="w-4/6 mx-auto"></img>
      </div>
      <div className="mx-auto w-fit mt-8">
        <button className="px-6 py-1 seeMoreButton text-white font-bold">
          {" "}
          SEE MORE
        </button>
      </div>
    </div>
  );
};

export default HomeProductBox;
