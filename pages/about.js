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
    <div className={`${locale === 'fr' ? 'text-left' : 'text-right'} grid  gird-cols-1 md:grid-cols-2  md:px-16 lg:px-36 pb-20 pt-10`}>
      <div className="h-fit my-auto px-5">
        <div className="font-bold md:text-3xl text-2xl pb-4">{content.aboutUS.title}</div>
        <div className='text-md productDetails'>
        {content.aboutUS.description}  
         </div>
      </div>
      <div className="hidden md:block">
          <img src='/imgs/aboutUS.png' className="mx-auto w-1/2"></img>
      </div>
    </div>
  );
};

export default About;
