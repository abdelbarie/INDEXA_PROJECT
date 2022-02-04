import React from "react";
import Link from "next/link";

const HomeProductBox = (props) => {
  return (
    <div className="w-full pt-5 pb-16">
      <Link href="/products">
        <a>
          <div className="productBox relative w-9/12 mx-auto grid place-content-center bg-white">
            <img src={props.img} className="w-4/6 mx-auto"></img>
          </div>
        </a>
      </Link>

      <div className="text-center mt-8">
      {props.productName}
      </div>

      </div>
  );
};

export default HomeProductBox;
