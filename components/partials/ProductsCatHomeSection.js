import Link from 'next/link';
import React from 'react';
import HomeProductfr from '../../Data/HomeProduct';
import HomeProductAr from '../../Data/HomeProductsAr' ; 
import HomeProductBox from './HomeProductBox';

const ProductsCatHomeSection = (props) => {
    const HomeProduct = props.locale === 'fr' ? HomeProductfr : HomeProductAr ; 
    return (
        <div className="mt-5 px-2 md:px-16 xl:px-52 lg:px-40  md:block">
            <div className="grid grid-cols-2 md:grid-cols-4 bg-white dark:bg-custom-dark-green">
            {HomeProduct.map((product , key)=>(
                    <Link href={`/products/categories/${product.category}`} key={key}>
                        <a>
                        <HomeProductBox 
                    productName={product.productName}
                    img={product.productImg}
                  ></HomeProductBox>
                        </a>
                    </Link>
              
            ))}
            </div>
       
        </div>
    );
};

export default ProductsCatHomeSection;