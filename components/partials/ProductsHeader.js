import React , {useState} from 'react';
import {useRouter} from "next/router";
import SearchInput from '../partials/SearchInput' ;

const ProductsHeader = (props) => {
    
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
        <div className="  ">
      <div className="productsHeader">
        <div className="w-1/2 md:float-right mx-auto text-5xl font-extrabold pt-16">
          <div className="w-fit mx-auto text-custom-dark-blue dark:text-custom-dark-green productDetails">
            {props.content.products.header} <label className="greenText">!!</label>
          </div>
        </div>
      </div>
      <div className="lg:px-32 md:px-16 px-4">
      <div className={`${props.locale === 'fr' ? 'flex-row' : 'flex-row-reverse '} py-2 border-b-2 lg:text-4xl text-xl font-bold border-custom-dark-blue dark:border-custom-green lg:flex  justify-between ` }>
          <div>{ props.content.products.produits }</div>
        </div>
      </div>
   
        </div>
    );
};

export default ProductsHeader;