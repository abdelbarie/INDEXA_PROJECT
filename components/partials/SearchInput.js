import React, {useState} from 'react';
import {useRouter} from "next/router";
import {  FaSearch} from 'react-icons/fa';

const SearchInput = (props) => {
  const [searchValue , setSearchValue] = useState(" ") ; 
  const router = useRouter() ; 

  const handleSearchChange = (e) =>{
    setSearchValue(e.target.value) ; 
  }

  const handleSearch = (e) => {
    e.preventDefault() ; 
    router.push(`/products/search/${searchValue}`)
  };
      
    return (
      <div className="border-2 shadow-md font-light text-sm dark:bg-gray-800 bg-gray-50 rounded-full px-2">
      <form onSubmit={handleSearch} className={`${props.locale === 'fr' ? 'flex' : 'flex flex-row-reverse pl-5'} justify-between `}>
      <input
        placeholder={props.content.products.research}
        className={`${props.locale === 'fr' ? 'text-left' : 'text-right'} outline-none px-4 py-2 w-full bg-transparent `}
        type="search"
        onChange={handleSearchChange}
      ></input>
      <button type="submit"><FaSearch className="text-2xl text-custom-dark-blue dark:text-white"/></button>
      </form>
    
    </div>
    );
};

export default SearchInput;