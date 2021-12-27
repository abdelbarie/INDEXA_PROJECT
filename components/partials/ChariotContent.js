import React from "react";
import Chariot from "../../Data/Chariot";

const ChariotContent = () => {
  let total = 0;
  const calcTotal = () => {
    for (let i = 0; i < Chariot.length; i++) {
      total += Chariot[i].price;
    }
    return total;
  };
  calcTotal();
  return (
    <div className=" md:w-8/12 mx-auto">
      <div className="rounded-2xl shadow-md bg-custom-light-blue relative py-6  px-6">
        <div className="font-semibold text-2xl border-b-2 border-custom-dark-blue">
          Mon Pannier
        </div>
        <div className="md:px-20 px-2 py-4">
          {Chariot.map((product, key) => (
            <>
              <div className="flex justify-between py-2" key={key}>
                <div>{product.product}</div>
                <div>{product.price} DA</div>
              </div>
              <hr></hr>
            </>
          ))}
          <div className="flex justify-between py-2 text-xl font-bold">
            <div>Total</div>
            <div>{total} DA</div>
          </div>
        </div>
      </div>
      <div className=" grid justify-items-stretch"><button className="mt-5 rounded-lg md:px-8 px-4 py-2 font-semibold hover:text-custom-dark-blue text-white bg-custom-green justify-self-end shadow-md">CONFIRME ORDRE</button></div>
    
    </div>
  );
};

export default ChariotContent;
