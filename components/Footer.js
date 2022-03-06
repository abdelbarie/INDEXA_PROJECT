import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookSquare, FaLinkedinIn , FaInstagram , FaPhone , FaEnvelope ,FaMapMarkerAlt} from 'react-icons/fa';
 
import frContent from "../public/locales/fr/common";
import arContent from "../public/locales/arab/common";

const Footer = () => {
  const { locale, locales, asPath } = useRouter();
  /* internationalisation content */
  const content = locale === "fr" ? frContent : arContent;
  return (
    <div className={`${locale ==='fr' ? 'md:text-left' : 'md:text-right'} text-center`}>
      <div className="bg-custom-light-blue dark:bg-custom-dark-green grid md:grid-cols-3 grid-cols-1 lg:px-24 md:px-12 py-10 md:gap-32 gap-5 px-5">
        <div>
          <div className="w-fit md:w-full mx-auto">
            <img
              src="/imgs/logo-indexa.png"
              alt="logo-indexa"
              layout="fill"
              width="180px"
              className={`${locale === 'fr' ? 'mr-auto' : 'ml-auto'} dark:hidden`}
            ></img>
            <img
              src="/imgs/indexaLogoWhite.png"
              alt="logo-indexa"
              layout="fill"
              width="180px"
              className={`${locale === 'fr' ? 'mr-auto' : 'ml-auto'} dark:block hidden`}
            ></img>
          </div>
          <div className="my-3 font-normal">
            {content.footer.description}
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-3 ">
            {content.footer.contact}
          </div>
          <div className={`${locale === 'fr' ? 'flex-row' : 'flex-row-reverse'} my-6 font-normal  flex  gap-2 w-fit md:w-full mx-auto `}>
            <FaPhone className="text-xl w-8 text-center text-custom-dark-blue dark:text-white hover:text-custom-green dark:hover:text-custom-dark-bg"/>
            <a href="tel:023 80 44 97" className="w-full">023 80 44 97-98</a>
          </div>
          <div className={`${locale === 'fr' ? 'flex-row' : 'flex-row-reverse'} my-6 font-normal flex gap-2 w-fit md:w-full mx-auto  `}>
            <FaEnvelope className="text-xl w-8 text-center text-custom-dark-blue dark:text-white hover:text-custom-green dark:hover:text-custom-dark-bg"/>
            Contact@indexabraille.com
          </div>
          <div className={`${locale === 'fr' ? 'flex-row' : 'flex-row-reverse'} my-6 font-normal flex gap-2 w-fit md:w-full mx-auto  `}>
            <div className="text-center">
            <FaMapMarkerAlt className="text-xl w-8 text-center text-custom-dark-blue dark:text-white hover:text-custom-green dark:hover:text-custom-dark-bg"/>
            </div>
            {content.home.centres.location}
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-4 w-fit mx-auto md:w-full ">
            {content.footer.info}
          </div>
          <div className="my-4 font-normal w-fit mx-auto md:w-full ">
            <Link href="/products">
              <a>{content.Navbar.produits}</a>
            </Link>
          </div>
          <div className="my-4 font-normal w-fit mx-auto md:w-full ">
            <Link href="/contact">
              <a>{content.Navbar.contact}</a>
            </Link>
          </div>
          <div className="my-4 font-normal w-fit mx-auto md:w-full ">
            <Link href="/about">
              <a>{content.Navbar.propos}</a>
            </Link>
          </div>
          <div className="mx-auto w-fit md:w-full my-4">
          <div className={`${locale === 'fr' ? 'md:mr-auto' : 'md:ml-auto'} mt-3 flex w-fit  text-3xl gap-4`}>
            <FaFacebookSquare className="text-custom-dark-blue dark:text-white dark:hover:text-custom-dark-bg hover:text-custom-green hover:text-4xl cursor-pointer"/>
            <FaLinkedinIn className="text-custom-dark-blue dark:text-white dark:hover:text-custom-dark-bg hover:text-custom-green hover:text-4xl cursor-pointer"/>
            <FaInstagram className="text-custom-dark-blue dark:text-white dark:hover:text-custom-dark-bg hover:text-custom-green hover:text-4xl cursor-pointer"/>
          </div>
          </div>
         
        </div>
      </div>
      <div className=" bg-custom-dark-blue dark:bg-custom-dark-bg  text-center p-2 text-white">
        2022 © CREATED BY EDRAAK
      </div>
    </div>
  );
};

export default Footer;
