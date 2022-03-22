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
    let Category ; 
    switch(category){
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
    const i = 1 ; 
return(
    <div>
      <ProductsHeader content = {content}></ProductsHeader>

    <div className="lg:px-32 lg:px-16 px-4">
    <div className={`${locale === 'fr' ? 'flex-row text-md md:text-xl ' : ' flex-row-reverse text-xl md:text-2xl' } py-2 font-semibold flex gap-2`}>
         <Link href="/products">{content.Navbar.produits}</Link> / <span className='text-custom-green'>{Category}</span> 
       </div>
       <hr/>
      <div className="grid md:grid-cols-12 grid-cols-1">
        <div className="col-span-12">
            <div className="font-semibold md:text-3xl text-xl text-center md:pt-8 md:pb-12 py-6"> {Category}</div>
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