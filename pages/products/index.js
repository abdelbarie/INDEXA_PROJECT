import React, { useState } from "react";
import ProCatSection from "../../components/partials/ProductCategorySection";
import ProductsHeader from "../../components/partials/ProductsHeader";




const Products = () => {
  const [isCategoOpen, setCategoOpen] = useState(true);
  const [produstFilter , setProductsFilter] = useState([false,false,false,false,false,false,false,false,false,false]) ; 
  const handleClick = () => {
    setCategoOpen(!isCategoOpen);
  };

  const filter = (e) =>{
    setProductsFilter({...produstFilter ,[e.target.id] : e.target.checked })
  }
  return (
    <div>
    <ProductsHeader/>
      <div className="lg:px-32 lg:px-16 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-2">
            <div className="flex font-semibold text-xl py-2 border-b-2 categories border-custom-dark-blue dark:border-custom-green w-fit gap-3">
              CATEGORIES
              <img
                src={isCategoOpen?"/imgs/up.png" :"/imgs/down.png"}
                className="mt-2 cursor-pointer dark:hidden block"
                onClick={handleClick}
                width="25px"
              ></img>
              <img
                src={isCategoOpen?"/imgs/greenUp.png" :"/imgs/greenDown.png"}
                className="mt-2 cursor-pointer hidden dark:block"
                onClick={handleClick}
                width="22px"
              ></img>
            </div>
            <div className={isCategoOpen?'block':'hidden'}>
              {
                [
                  "MATERIEL INFORMATIQUE",
                  "HORLOGERIE",
                  "Matériels Pédagogique",
                  "JEUX EDUCATIFS",
                  "LOGICILE",
                  "CALCULE",
                  "Machine à écrire",
                  "DESSINS",
                  "Tablette et Accessoires",
                  "DIVERS",
                ].map((cat , key)=>(
                  <div key={key} className="text-sm w-full  flex justify-between py-1">
                    {cat}
                    <input type="checkbox" className="accent-custom-green cursor-pointer" onChange={filter} id={key} ></input>
                  </div>
                ))
              }
            </div>
            <div className={`${isCategoOpen ? "block" : "hidden"}`}></div>
          </div>
          <div className="col-span-10  xl:px-28 lg:px-12 md:px-4 ">
            <div className="">
              {[
                "MATERIEL INFORMATIQUE",
                "HORLOGERIE",
                "Matériels Pédagogique",
                "JEUX EDUCATIFS",
                "LOGICILE",
                "CALCULE",
                "Machine à écrire",
                "DESSINS",
                "Tablette et Accessoires",
                "DIVERS",
              ].map((category, key) => (
                (produstFilter[key] || (!produstFilter[0] && !produstFilter[1] && !produstFilter[2] && !produstFilter[3] && !produstFilter[4] && !produstFilter[5] && !produstFilter[6] && !produstFilter[7] &&!produstFilter[8] && !produstFilter[9] ) )&&
                <ProCatSection
                  key={key}
                  category={category}
                  id={key}
                ></ProCatSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
