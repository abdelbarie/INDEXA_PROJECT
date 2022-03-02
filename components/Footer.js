import React from "react";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useRouter } from "next/router";
import { FaFacebookSquare, FaLinkedinIn , FaInstagram} from 'react-icons/fa';

import frContent from "../public/locales/fr/common";
import arContent from "../public/locales/arab/common";

const Footer = () => {
  const { locale, locales, asPath } = useRouter();
  /* internationalisation content */
  const content = locale === "fr" ? frContent : arContent;
  return (
    <div className='text-center'>
      <div className="bg-custom-light-blue dark:bg-custom-dark-green grid md:grid-cols-3 grid-cols-1 lg:px-24 md:px-12 py-10 md:gap-32 gap-5 px-5">
        <div>
          <div className="w-fit mx-auto">
            <img
              src="/imgs/logo-indexa.png"
              alt="logo-indexa"
              layout="fill"
              width="180px"
              className="mx-auto md:ml-0 dark:hidden"
            ></img>
            <img
              src="/imgs/indexaLogoWhite.png"
              alt="logo-indexa"
              layout="fill"
              width="180px"
              className="mx-auto md:ml-0 dark:block hidden"
            ></img>
          </div>
          <div className="my-3 font-normal">
            {content.footer.description}
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-3 ">
            {content.Navbar.contact}
          </div>
          <div className="my-1 font-normal flex gap-2 w-fit mx-auto">
            <img src="/imgs/telephone.svg" width="20px" alt="phone icon"></img>{" "}
            <a href="tel:023 80 44 97" >023 80 44 97-98</a>
          </div>
          <div className="my-1 font-normal flex gap-2 w-fit mx-auto ">
            <img src="/imgs/mail.svg" width="20px" alt="mail icon"></img>
            Contact@indexa-braille.com
          </div>
          <div className="my-1 font-normal flex gap-2 w-fit mx-auto ">
            <img
              src="/imgs/position.svg"
              width="25px"
              alt="position icon"
            ></img>
            {content.home.centres.location}
          </div>
        </div>
        <div>
          <div className="font-bold text-2xl mb-3 w-fit mx-auto md:w-full ">
            {content.footer.info}
          </div>
          <div className="my-1 font-normal w-fit mx-auto md:w-full ">
            <Link href="/products">
              <a>{content.Navbar.produits}</a>
            </Link>
          </div>
          <div className="my-1 font-normal w-fit mx-auto md:w-full ">
            <Link href="/contact">
              <a>{content.Navbar.contact}</a>
            </Link>
          </div>
          <div className="my-1 font-normal w-fit mx-auto md:w-full ">
            <Link href="/about">
              <a>{content.Navbar.propos}</a>
            </Link>
          </div>
          <div className="mt-3 flex w-fit mx-auto text-3xl gap-4">
            <FaFacebookSquare className="text-custom-dark-blue dark:text-white hover:text-custom-green hover:text-4xl cursor-pointer"/>
            <FaLinkedinIn className="text-custom-dark-blue dark:text-white hover:text-custom-green hover:text-4xl cursor-pointer"/>
            <FaInstagram className="text-custom-dark-blue dark:text-white hover:text-custom-green hover:text-4xl cursor-pointer"/>
          </div>
        </div>
      </div>
      <div className=" bg-custom-dark-blue dark:bg-custom-dark-bg text-center p-2 text-white">
        2022 © CREATED BY EDRAAK
      </div>
    </div>
  );
};

export default Footer;
