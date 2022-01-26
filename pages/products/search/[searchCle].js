import react, { useState } from "react";
import { useRouter } from "next/router";
import ProductsData from "../../../Data/Products";
import ProductBox from "../../../components/partials/ProductBox";
import ProductsHeader from "../../../components/partials/ProductsHeader";

const SearchProducts = ({ products }) => {
  const [isCategoOpen, setCategoOpen] = useState(false);
  const router = useRouter();

  const handleClick = () => {
    setCategoOpen(!isCategoOpen);
  };

  const searchCle = router.query.searchCle;
  return (
    <div>
   <ProductsHeader/>

      <div className="lg:px-32 lg:px-16 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-12  xl:px-28 lg:px-2 md:px-4 ">
              <div className="py-5">Products ont une relation avec: <b className="text-custom-green">{searchCle}</b> </div>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3">
              {products.map(
                (product, key) =>
                  (product.productName
                    .toUpperCase()
                    .includes(searchCle.toUpperCase()) ||
                    product.description
                      .toUpperCase()
                      .includes(searchCle.toUpperCase()) || 
                      product.category
                      .toUpperCase()
                      .includes(searchCle.toUpperCase()) ||
                      product.details
                      .toUpperCase()
                      .includes(searchCle.toUpperCase()) ) && (
                    <ProductBox
                     key ={key}
                      product={product}
                      category={product.category}
                      id={product.id}
                    ></ProductBox>
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export async function getStaticProps() {
  const products = ProductsData;

  return {
    props: {
      products,
    },
  };
}
export const getStaticPaths = async () => {
  return {
    paths: [], //indicates that no page needs be created at build time
    fallback: "blocking", //indicates the type of fallback
  };
};

export default SearchProducts;
