import react, { useState } from "react";
import { useRouter } from "next/router";
import ProductsFr from "../../../Data/Products";
import Productsar from "../../../Data/ProductsAR";
import ProductBox from "../../../components/partials/ProductBox";
import ProductsHeader from "../../../components/partials/ProductsHeader";
import Frcontent from "../../../public/locales/fr/common";
import Arcontent from "../../../public/locales/arab/common";

const SearchProducts = ({ productsfr, productsAr }) => {
  const [isCategoOpen, setCategoOpen] = useState(false);
  const router = useRouter();
  const { locale, locales, asPath } = router;
  const content = locale === "fr" ? Frcontent : Arcontent;

  const handleClick = () => {
    setCategoOpen(!isCategoOpen);
  };

  const searchCle = router.query.searchCle;
  const products = locale === "fr" ? productsfr : productsAr;

  return (
    <div>
      <ProductsHeader content={content}></ProductsHeader>
      <div className="lg:px-32 lg:px-16 px-4">
        <div className="grid md:grid-cols-12 grid-cols-1">
          <div className="col-span-12  xl:px-28 lg:px-2 md:px-4 ">
            <div className={`${locale === 'fr' ? 'text-left' : 'text-right'} py-5`}>
              {content.Search.relation + '  '}
              <b className="text-custom-green">{searchCle}</b>{" "}
            </div>
            <div className="grid grid-cols-1 bg-gray-50 dark:bg-gray-800 mb-4 lg:grid-cols-4 md:grid-cols-3">
              {products.map(
                (product, key) =>
                  ((locale === "fr" &&
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
                        .includes(searchCle.toUpperCase()))) ||

                    (locale != "fr" &&
                      (product.productName.includes(searchCle.toUpperCase()) ||
                        product.description.includes(searchCle.toUpperCase()) ||
                        product.category.includes(searchCle.toUpperCase())
                      )
                      )
                      ) && (
                    <ProductBox
                      key={key}
                      content={content}
                      product={product}
                      grid={true}
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
  const productsfr = ProductsFr;
  const productsAr = Productsar;

  return {
    props: {
      productsAr,
      productsfr,
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
