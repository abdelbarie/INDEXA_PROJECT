import React , {useState} from 'react';
import {useRouter} from "next/router";
const ProductsHeader = () => {
    
  const [searchValue , setSearchValue] = useState(" ") ; 
  const router  = useRouter() ; 

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
          <div className="w-fit mx-auto text-custom-dark-blue dark:text-custom-dark-green">
            SHOP <br /> NOW <label className="greenText">!!</label>
          </div>
        </div>
      </div>
      <div className="lg:px-32 lg:px-16 px-4">
      <div className="py-2 border-b-2 lg:text-4xl text-xl font-bold border-custom-dark-blue dark:border-custom-green lg:flex justify-between ">
          <div>Produits</div>
          
          <div className="border-b-2 font-light text-sm dark:bg-gray-800 bg-gray-100 pr-2">
            <form onSubmit={handleSearch} className="flex justify-between">
            <input
              placeholder="chercher un produit .."
              className="px-3 outline-none py-2 bg-transparent"
              type="search"
              onChange={handleSearchChange}
            ></input>
            <button type="submit"  ><img src='/imgs/search_icon.png' width="20px"></img></button>
            </form>
          
          </div>
        </div>
      </div>
   
        </div>
    );
};

export default ProductsHeader;