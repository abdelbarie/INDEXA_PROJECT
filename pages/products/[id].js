import react from "react";
import ProductsData from "../../Data/Products";
import { useRouter } from "next/router";
import ProCatSection from "../../components/partials/ProductCategorySection";

const ProductDetails = ({ProductsData}) => {
  const router = useRouter();
  const id = router.query.id;
  return (
    <div className="md:px-36 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-2">
        <div>
          <img src={ProductsData[id].producImg} className="mx-auto w-1/2"></img>
        </div>
        <div className="h-fit my-auto md:px-20 px-4 ">
          <div className="font-bold text-2xl py-2">
            {ProductsData[id].productName}
          </div>
          <div className="">{ProductsData[id].description}<br/>{ProductsData[id].description}</div>
          <div className="flex mt-2 justify-between">
            <div className="font-bold text-lg">{ProductsData[id].price} DA</div>
            <div className="flex w-fit">
              {["", "", "", "", ""].map((star, key) => (
                <img
                  src="/imgs/star.png"
                  key={key}
                  className={`${
                    key + 1 > ProductsData[id].stars
                      ? "opacity-20"
                      : "opacity-1"
                  } h-5 w-5`}
                ></img>
              ))}
            </div>
          </div>
          <div><button className="flex gap-2 px-4 mx-auto py-1 mt-5 text-white  font-semibold rounded-full bg-custom-green"><img src="/imgs/chariot.svg" width="20px"></img>AJOUTER AU PANNIER</button></div>
        </div>
      </div>
      <div className="md:w-8/12">
          <div className="font-bold text-2xl mt-16">Détails<hr/></div>
          <div >{ProductsData[id].details}</div>
      </div>
      <div>
          <div className="font-bold text-2xl mt-16">Produits similaire </div>
          <ProCatSection category ={ProductsData[id].category}></ProCatSection>
      </div>
    </div>
  );
};

export default ProductDetails;
