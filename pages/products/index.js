import React, { useState } from "react";
import ProCatSection from "../../components/partials/ProductCategorySection";
import {useRouter} from "next/router";



const Products = () => {
  const [isCategoOpen, setCategoOpen] = useState(false);
  const [searchValue , setSearchValue] = useState(" ") ; 
  const router  = useRouter() ; 

  const handleClick = () => {
    setCategoOpen(!isCategoOpen);
   
  };

  const handleSearchChange = (e) =>{
    setSearchValue(e.target.value) ; 
  }

  const handleSearch = (e) => {
    e.preventDefault() ; 
    router.push(`/products/search/${searchValue}`)
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
        <div className="py-2 border-b-2 text-4xl font-bold products flex justify-between">
          <div>Produits</div>
          
          <div className="border-b-2 font-light text-sm flex">
            <form onSubmit={handleSearch}>
            <input
              placeholder="chercher un produit .."
              className="px-3 outline-none py-2"
              type="search"
              onChange={handleSearchChange}
            ></input>
            <button type="submit" >click me</button>
            </form>
          
          </div>
        </div>
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
