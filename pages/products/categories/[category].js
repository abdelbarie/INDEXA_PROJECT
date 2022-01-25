import { useRouter } from 'next/router';
import react from 'react' ; 
import ProductBox from '../../../components/partials/ProductBox';
import ProCatSection from '../../../components/partials/ProductCategorySection';
import ProductsData from '../../../Data/Products';
import ProductsHeader from '../../../components/partials/ProductsHeader';

const ProductCatPage = ()=>{
    const router = useRouter() ;
    const category = router.query.category ; 
    const i = 1 ; 
return(
    <div>
      <ProductsHeader/>

    <div className="lg:px-32 lg:px-16 px-4">
     
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div className="col-span-3">
          <div className="flex font-semibold text-xl py-2 border-b-2 categories w-fit gap-3">
            CATEGORIES{" "}
            <img
              src="/imgs/up.png"
              className="mt-2"
            ></img>
          </div>
        </div>
        <div className="col-span-9">
            <div className="font-semibold md:text-3xl text-xl text-center md:pt-8 md:pb-12 py-6"> {category}</div>
           <div className='grid grid-cols-1 md:grid-cols-3 gap-y-8'>
           {ProductsData.map((product, key) => (
          <>
            {(product.category == category)&&(i++) &&(

              <ProductBox
                // disp={`${moreProducts && i > 4 ? "hidden" : "block"}`}
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