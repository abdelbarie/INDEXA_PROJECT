import React from "react";
import ChariotContent from "../components/partials/ChariotContent";

const Payement = () => {
  return (
    <div >
      <div className="paymentHeader">
        <div className="md:w-1/2 md:float-right mx-auto md:text-5xl text-4xl font-extrabold pt-12 h-full bg-custom-light-blue bg-opacity-70 md:bg-opacity-0">
          <div className="w-fit mx-auto">
            OBTENIR VOTRE <br/> PRODUIT <br/> MAINTENENT 
            <label className="greenText">!!</label>
            
          </div>
        </div>
      </div>
      <div className="md:px-36 px-4 py-10">
      <ChariotContent></ChariotContent>
      </div>
 
    </div>
  );
};

export default Payement;
