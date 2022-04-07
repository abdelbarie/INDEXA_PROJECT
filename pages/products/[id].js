import react from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import ProductsData from "../../Data/Products";
import ProductsAR from '../../Data/ProductsAR' ; 
import ProCatSection from "../../components/partials/ProductCategorySection";

import frContent from "../../public/locales/fr/common";
import ArContent from "../../public/locales/arab/common";

const ProductDetails = (props) => {

  const router = useRouter();
  const {locale , locales , asPath} = router ; 

  const content = locale === 'fr' ? frContent : ArContent ; 
  const products = locale === 'fr' ? props.products : props.arProducts ; 
    const id = router.query.id;
  let Category ; 
    switch(products[id].category){
      case "MATERIEL INFORMATIQUE" : 
        Category =  locale === 'fr' ? "MATERIEL INFORMATIQUE" : 'اعلام الي' ; 
      break ;
      case "JEUX EDUCATIFS" : 
        Category =  locale === 'fr' ? "JEUX EDUCATIFS" : "الألعاب التعليمية" ; 
      break ;
      case "LOGICILE" : 
        Category =  locale === 'fr' ? "LOGICIEL" : "البرمجيات" ; 
      break ;
      case "Machine à écrire" : 
        Category =  locale === 'fr' ? "MACHINE À ÉCRIRE" : "أدوات الكتابة" ; 
      break ;
      case "HORLOGERIE" : 
        Category =  locale === 'fr' ? "HORLOGERIE" : "ساعات" ; 
      break ;
      case "CALCUL" : 
        Category =  locale === 'fr' ? "CALCUL" : "حساب" ; 
      break ;
      case "Tablette et Accessoires" : 
        Category =  locale === 'fr' ? "TABLETTES ET ACCESSOIRES" : ' الواح و ملحقات' ; 
      break ;
      case "DIVERS" : 
        Category =  locale === 'fr' ? "DIVERS" : "متنوع" ; 
      break ;
      case "DESSIN" : 
        Category =  locale === 'fr' ? "DESSIN" : ' رسم' ; 
      break ;
      case "Matériels Pédagogique" : 
        Category =  locale === 'fr' ? "Matériels Pédagogique" : "المواد التعليمية" ; 
      break ;

    }
  

  return (
    <div className={`${locale === 'fr' ? 'text-left' : 'text-right'} md:px-36 px-4`}>
       <div className={`${locale === 'fr' ? 'flex-row text-md md:text-xl ' : ' flex-row-reverse text-md md:text-xl' } py-2 font-semibold flex gap-2`}>
         <Link href="/products">{content.Navbar.produits}</Link> / <Link href={`/products/categories/${products[id].category}`}>{Category}</Link> / <span className="text-custom-green">{products[id].productName}</span>
       </div>
       <hr/>
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-2">
       
        <div className='place-content-center grid'>
          <img src={products[id].producImg} className="mx-auto w-52" alt={products[id].productName}></img>
        </div>
        <div className="h-fit my-auto md:px-20 px-4 ">
          <div className="font-bold text-2xl py-2">
            {products[id].productName}
          </div>
          <div className="productDetails">{products[id].longDescription}</div>
          {/* <div><button className="flex gap-2 px-4 mx-auto py-2 mt-5 text-white  font-semibold rounded-full shadow-xl hover:bg-custom-dark-green bg-custom-green"><img src="/imgs/chariot.svg" width="20px"></img>AJOUTER AU PANNIER</button></div> */}
        </div>
      </div>
      
      <div className="md:w-12/12">
          <div className="font-bold text-2xl mt-16">{content.Productdetails.details}<hr/></div>
          <div className="productDetails text-xl">{products[id].details}</div>
      </div>
      <div>
          <div className="font-bold text-2xl mt-16">{content.Productdetails.similaire} </div>
          <ProCatSection category ={products[id].category} productName={products[id].productName} content={content}></ProCatSection>
      </div>
    </div>
  );
};
export async function getStaticProps() {

    const products = ProductsData ; 
    const arProducts = ProductsAR ; 

    return {
        props: {
            products,
            arProducts
        },
    }
} ; 
export const getStaticPaths  = async () => {

    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}


export default ProductDetails;
