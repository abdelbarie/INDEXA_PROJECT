import React from 'react';
import HomeProduct from '../../Data/HomeProduct';
import HomeProductBox from './HomeProductBox';

const ProductsCatHomeSection = () => {
    return (
        <div className="mt-5 px-2 md:px-16 xl:px-52 lg:px-40  md:block">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white dark:bg-custom-dark-green">
            {HomeProduct.map((product , key)=>(
                    <HomeProductBox 
                    key={key}
                    productName={product.productName}
                    img={product.productImg}
                  ></HomeProductBox>
            ))}
            </div>
       
        </div>
    );
};

export default ProductsCatHomeSection;