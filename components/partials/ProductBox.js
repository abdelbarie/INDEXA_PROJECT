import React from "react";
import Link from "next/link";

const ProductBox = (props) => {
  return (
    <div className={`${props.disp} my-4`}>
      <div className="ProductBox relative mx-auto  grid place-content-center">
        <div className="absolute -top-3 px-2 py-1 marks left-2 text-white font-semibold text-xs shadow-md">
          {props.category}
        </div>
        <div className="absolute -top-3 right-2 p-1 marks shadow-md">
          <img src="/imgs/star.png" width="17px"></img>
        </div>
        <img src={props.product.producImg} className="w-4/6 mx-auto"></img>
        <Link href={`/products/${props.id}`}>
          <a>
            <div className="absolute bottom-2 right-2  text-white rounded-l-lg rounded-r-full pl-3 pr-2 py-1 flex gap-3 text-sm plusProduct">
              Plus <img src="/imgs/whiteArrow.png" width="20px"></img>
            </div>
          </a>
        </Link>
      </div>
      <div className="text-center pt-2 w-52 mx-auto  ">
        <div className="font-semibold">{props.product.productName}</div>
        <div className="text-sm text-gray-500">{props.product.description}</div>
        <div className="flex mt-2 justify-between">
          <div className="font-bold">{props.product.price} DA</div>
          <div className="flex w-fit">
            {["", "", "", "", ""].map((star, key) => (
              <img
                src="/imgs/star.png"
                key={key}
                className={`${
                  key + 1 > props.product.stars ? "opacity-20" : "opacity-1"
                } h-5 w-5`}
              ></img>
            ))}
          </div>
        </div>
      </div>
      <div className="mx-auto w-fit mt-8 text-sm">
        <button className="px-4 py-1 seeMoreButton text-white font-bold">
          AJOUTER AU PANNIER
        </button>
      </div>
    </div>
  );
};

export default ProductBox;
