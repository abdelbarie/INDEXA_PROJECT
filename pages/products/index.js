import React, { useState } from "react";
import ProCatSection from "../../components/partials/ProductCategorySection";
import ProductsHeader from "../../components/partials/ProductsHeader";




const Products = () => {
  const [isCategoOpen, setCategoOpen] = useState(false);

  const handleClick = () => {
    setCategoOpen(!isCategoOpen);
   
  };


  return (
    <div>
    <ProductsHeader/>
      <div className="lg:px-32 lg:px-16 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-2">
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
