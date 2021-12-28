import React, { useState } from "react";
import ProCatSection from "../../components/partials/ProductCategorySection";

const Products = () => {
  const [isCategoOpen, setCategoOpen] = useState(false);
  const handleClick = () => {
    setCategoOpen(!isCategoOpen);
  };
  return (
    <div>
      <div className="productsHeader">
        <div className="w-1/2 md:float-right mx-auto text-5xl font-extrabold pt-16">
          <div className="w-fit mx-auto">
            SHOP <br /> NOW <label className="greenText">!!</label>
          </div>
        </div>
      </div>
      <div className="lg:px-32 lg:px-16 px-4">
        <div className="py-2 border-b-2 text-4xl font-bold products">
          Produits
        </div>
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-3">
            <div className="flex font-semibold text-xl py-2 border-b-2 categories w-fit gap-3">
              CATEGORIES{" "}
              <img
                src="/imgs/up.png"
                className="mt-2"
                onClick={handleClick}
              ></img>
            </div>
            <div className={`${isCategoOpen ? "block" : "hidden"}`}></div>
          </div>
          <div className="col-span-9">
             <div>
               {
                  ['MATERIEL INFORMATIQUE','LOGICIELS','MACHINES ET ACCESSOIRES',''].map((category , key)=>(
                    <ProCatSection key={key} category ={category}  id={key}></ProCatSection>
                  ))
               }
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
