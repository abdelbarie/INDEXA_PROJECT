import React from 'react';
import {useRouter} from "next/router";

const SearchInput = () => {
    const handleSearchChange = (e) => {
        setSearchValue(e.target.value);
      };
    
      const handleSearch = (e) => {
        e.preventDefault();
        router.push(`/products/search/${searchValue}`);
      };
      
    return (
        <div>
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
    );
};

export default SearchInput;