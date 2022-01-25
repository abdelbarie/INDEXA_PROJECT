import React from 'react';
import HomeProduct from '../../Data/HomeProduct';
import HomeProductBox from './HomeProductBox';

const ProductsCatHomeSection = () => {
    return (
        <div className="mt-5 px-10 md:px-16 lg:px-32 gap-y-10 hidden md:block">
            <div className="grid grid-cols-4 ">
            {HomeProduct.map((product , key)=>(
                    <HomeProductBox
                    key={key}
                    category={product.category}
                    img={product.productImg}
                  ></HomeProductBox>
            ))}
            </div>
       
        </div>
    );
};

export default ProductsCatHomeSection;