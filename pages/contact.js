import react from "react";
import ContactezNous from "../components/partials/ContactezNous";
import NosInfo from "../components/partials/NosInfo";
import { useRouter } from "next/router";

import frContent from "../public/locales/fr/common";
import arContent from "../public/locales/arab/common";

const Contact = () => {

  const router = useRouter() ; 
  const { locale, locales, asPath } = useRouter();
 
  /* internationalisation content */ 
  const content = locale === 'fr' ? frContent : arContent ;  

  return (
    <div className={`${locale === 'fr' ? 'text-left' : 'text-right'} lg:px-36 md:px-16 relative px-4`}>
      <NosInfo content={content}></NosInfo>
      <ContactezNous locale={locale} content={content}></ContactezNous>
      <img src="/imgs/greenMail.svg" className="absolute top-64 -left-6 md:w-1/4  w-1/2  md:block -z-50"></img>
    </div>
  );
};

export default Contact;
