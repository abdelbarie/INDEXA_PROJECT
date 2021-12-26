import React, { useState } from "react";
import ProductsData from "../../Data/Products";
import ProductBox from "./ProductBox";

const ProCatSection = (props) => {
  const [moreProducts, setMore] = useState(true);
  let i = 1 ; 
  const getMoreProducts = () => {
    setMore(!moreProducts);
  };
  return (
    <div className="w-full py-5">
      <div className="w-fit mx-auto font-semibold text-xl">
        {props.category}
      </div>
      <div className="grid md:grid-cols-3 grid-cols-1 py-6 mt-5">
        {ProductsData.map((product, key) => (
          <>
          
            {(product.category == props.category)&&(i++) &&(
              <ProductBox
                key={key}
                disp={`${moreProducts && i > 4 ? "hidden" : "block"}`}
                product={product}
                category={props.category}
                id = {product.id}
              ></ProductBox>
            )}
          </>
        ))}
      </div>
      <div className={`w-fit mx-auto my-2 ${i<4?'hidden' : 'block'}`}>
        <button
          className="text-lg font-semibold px-5 py-1 border-2 rounded-xl voirPlusButton"
          onClick={getMoreProducts}
        >
          {moreProducts ? "AFFICHER PLUS..." : "AFFICHER MOIN..."}
        </button>
      </div>
      <hr/>
    </div>
  );
};

export default ProCatSection;
