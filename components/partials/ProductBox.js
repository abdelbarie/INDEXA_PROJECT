import React from "react";
import Link from "next/link";

const ProductBox = (props) => {
  return (
    <div className={`${props.disp} pt-4 pb-8 ${props.grid ? 'block' : 'md:flex block'}`}>
  <Link href={`/products/${props.id}`}>
          <a>
      <div className="ProductBox relative mx-auto  grid place-content-center">
        <img src={props.product.producImg} className="w-4/6 mx-auto"></img>
      </div>
      </a>
        </Link>
    
      <div className=" w-full">
      <div className="text-center pt-2  mx-auto ">
        <div className="font-semibold">{props.product.productName}</div>
        <div className="text-sm text-gray-500 px-4">{props.product.description}</div>
        <div className="text-xs"><label className="m-1 text-custom-green font-semibold">Category:</label>{props.product.category}</div>
        <div className="font-bold text-lg pt-4 text-center">{props.product.price} DA</div>
 
      </div>
      <div className="mx-auto w-fit mt-4 text-sm">
        <button className="px-4 py-2 rounded-3xl hover:bg-custom-green border-2 border-custom-green bg-custom-dark-green text-white font-bold">
          {props.content.products.ajouterPanier}
        </button>
      </div>
      </div>
    </div>
  );
};

export default ProductBox;
