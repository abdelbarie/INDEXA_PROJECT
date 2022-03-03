import react from "react";
import { useRouter } from "next/router";

import frContent from "../public/locales/fr/common";
import arContent from "../public/locales/arab/common";

const About = () => {
 const router = useRouter() ; 
 const { locale, locales, asPath } = useRouter();

 /* internationalisation content */ 
 const content = locale === 'fr' ? frContent : arContent ;  


  return (
    <div className={`${locale === 'fr' ? 'text-left' : 'text-right'} md:px-16 lg:px-36 pb-20 pt-5 `}>
      <div className=" dark:text-white md:gap-0 rounded-2xl mt-8  relative md:px-10 py-5 px-4 w-full mx-auto md:w-10/12">
        <span className=" text-3xl text-custom-green font-semibold">{content.aboutUS.title}</span>
        <hr/>
        <div className='text-md productDetails mt-2 font-light'>
        {content.aboutUS.description}  
         </div>
        {/* <img src="/imgs/greenCircle.svg" className="absolute top-32 -right-6 w-12"></img>
        <img src="/imgs/smallCircles.svg" className="absolute -bottom-6 -left-6 w-16"></img> */}
      </div>

      <div className=" dark:text-white md:gap-0 rounded-2xl mt-8  relative md:px-10 py-5 px-4 w-full mx-auto md:w-10/12">
        <span className=" text-3xl text-custom-green font-semibold">{content.NosRubrique.title}</span>
        <hr/>
        <div className='text-md productDetails mt-2 font-light'>
        {content.NosRubrique.content1}  
         </div>
         <div className='text-md productDetails mt-2 font-light'>
        {content.NosRubrique.content2}  
         </div>
        {/* <img src="/imgs/greenCircle.svg" className="absolute -bottom-6 -left-6  w-12"></img>
        <img src="/imgs/smallCircles.svg" className="absolute top-32 -right-6 w-16"></img> */}
        <div className="flex gap-1 mt-4">
          <img src="/imgs/marque1.jpg" width="20%"></img>
          <img src="/imgs/marque2.jpg" width="20%"></img>
          <img src="/imgs/marque3.jpg" width="37%"></img>
          <img src="/imgs/marque4.jpg" width="20%"></img>

        </div>
      </div>
    
    </div>
  );
};

export default About;
