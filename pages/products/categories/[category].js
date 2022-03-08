import { useRouter } from 'next/router';
import Link from 'next/link';
import ProductBox from '../../../components/partials/ProductBox';
import Productsfr from '../../../Data/Products';
import ProductsAr from '../../../Data/ProductsAR'
import ProductsHeader from '../../../components/partials/ProductsHeader';

import frContent from '../../../public/locales/fr/common';
import arContent from '../../../public/locales/arab/common';

const ProductCatPage = ()=>{
    const router = useRouter() ;
    
    const {locale , locales, asPath} = router ; 
    const content = locale === 'fr' ? frContent : arContent ; 
    const ProductsData =  locale === 'fr' ? Productsfr : ProductsAr ;
    /* routing */ 
    const category = router.query.category ; 
    const i = 1 ; 
return(
    <div>
      <ProductsHeader content = {content}></ProductsHeader>

    <div className="lg:px-32 lg:px-16 px-4">
    <div className="py-2 font-semibold text-lg">
         <Link href="/products">PRODUITS</Link> / <span className='text-custom-green'>{category}</span> 
       </div>
       <hr/>
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div className="col-span-12">
            <div className="font-semibold md:text-3xl text-xl text-center md:pt-8 md:pb-12 py-6"> {category}</div>
           <div className='grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-y-8 bg-gray-50 dark:bg-gray-800 py-4 mb-4'>
           {ProductsData.map((product, key) => (
          <>
            {(product.category == category)&&(i++) &&(

              <ProductBox
              grid={true}
               content = {content}
                product={product}
                category={category}
                id = {product.id}
              ></ProductBox>
            )}
          </>
        ))}
           </div>
        </div>
      </div>
    </div>
  </div>
)
}

export default ProductCatPage ; 