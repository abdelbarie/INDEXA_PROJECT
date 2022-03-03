import React, { useState } from "react";
import ProCatSection from "../../components/partials/ProductCategorySection";
import ProductsHeader from "../../components/partials/ProductsHeader";

import frContent from "../../public/locales/fr/common";
import arContent from "../../public/locales/arab/common";
import {BsFillGrid3X3GapFill} from 'react-icons/bs'
import { FaBars } from "react-icons/fa";

import frProducts from "../../Data/Products";
import ProductsAR from "../../Data/ProductsAR";

import ProductBox from "../../components/partials/ProductBox";

import { useRouter } from "next/router";



const Products = () => {
  
  const router = useRouter() ; 
  const { locale, locales, asPath } = useRouter();
 
  /* Products */
  const ProductsData = locale === 'fr' ? frProducts : ProductsAR ; 
  /* internationalisation content */ 
  const content = locale === 'fr' ? frContent : arContent ;  

  /* categories */ 
  const [isCategoOpen, setCategoOpen] = useState(true);
  /* filter number of products to display*/ 
  const [filterNBRProducts , setNumberPro] = useState(10) ; 
  /* filter products per categories */ 
  const [produstFilter , setProductsFilter] = useState([false,false,false,false,false,false,false,false,false,false]) ; 
  /* display products on Grid or Rows */
  const [displayGrid , setGrid] = useState(true) ;  

  const handleGrid = (e) =>{
    setGrid(e) ; 
  }

  const handleNBRpro = (e) =>{
     setNumberPro(e.target.value) ; 
  }
  const handleClick = () => {
    setCategoOpen(!isCategoOpen);
  };
  const filter = (e) =>{
    setProductsFilter({...produstFilter ,[e.target.id] : e.target.checked })
  }

  return (
    <div>
    <ProductsHeader content = {content}></ProductsHeader>
      <div className="lg:px-32 lg:px-16 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-2">
            <div className="flex font-semibold text-xl py-2 border-b-2 categories border-custom-dark-blue dark:border-custom-green w-fit gap-3">
              {content.products.categories}
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
      
             <div className="dark:bg-custom-dark-green 00 bg-gray-100 flex justify-between mt-4 px-4 py-2">
               <div>
               <label>Filtere Par</label>
                <select id="cars" name="cars" className="mx-2 outline-none">
                  <option value="productName">Nom</option>
                  <option value="price">Prix</option>
                  <option value="category">Catégorie</option>
                </select>
               </div>
               <div>
               Afficher <input type="number" name="Numberproducts" placeholder="12" className="w-20 pl-2 border-2" onChange={handleNBRpro}></input>
               </div>
               <div className=" md:flex gap-1 hidden ">
               Afficher en 
               <div><button onClick={()=>handleGrid(true)}><BsFillGrid3X3GapFill className="text-xl my-auto "/></button></div>
               <div><button onClick={()=>handleGrid(false)}><FaBars className="text-xl my-auto "/></button></div>
               </div>
            </div>
             <div className={`${displayGrid ? 'grid md:grid-cols-3' : 'block'}`}>
             {
               ProductsData.map(( pro , key)=>(
                <div  className={`${filterNBRProducts > key ? 'block' : 'hidden'}   `}       key={key}>
                <ProductBox
                // disp={`${moreProducts && i > 4 ? "hidden" : "block"}`}
                className={`${filterNBRProducts > key ? 'block' : 'hidden'}`}
                product={pro}
                grid = {displayGrid}
                content = {content}
                id = {pro.id}
              ></ProductBox>
              <hr className={`${!displayGrid ? 'block' : 'hidden'}   `}  />
              </div>
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
