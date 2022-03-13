import React from "react";
import CentreBox from "../components/partials/CentreBox";
import Centres from "../Data/Centres";
import frContent from "../public/locales/fr/common";
import arContent from "../public/locales/arab/common";
import {useRouter} from "next/router";

const Centre = () => {
  const router = useRouter();
  const { locale, locales, asPath } = useRouter();
  const content = locale === "fr" ? frContent : arContent;

  return (
    <div>
      <div className="w-full h-60 bg-gray-100 dark:bg-gray-800 mb-20 flex justify-between relative">
        <div className="mx-auto pt-20 text-5xl md:text-6xl font-bold">
          {content.home.centres.sectionTitle}
          <div className="w-full h-2 -mt-1 bg-custom-green"></div>
        </div>
        <img src="/imgs/centreHeader.png" className="h-full ml-auto absolute md:hidden opacity-10 md:opacity-10"></img>
        <img src="/imgs/centreHeader.png" className="h-full ml-auto hidden md:block"></img>
      </div>
      <div className="px-5 md:px-28">
      {Centres.map((centre, key) => (
        <CentreBox
          location="https://www.google.com/maps/embed?pb=!1m22!1m8!1m3!1d1598.7651924490008!2d3.1749628!3d36.7338383!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m5!1s0x128e52016476d889%3A0xf8c3ddbbeaf84cd!2sINDEXA%20Centre%20d&#39;audiom%C3%A9trie%20et%20de%20proth%C3%A8se%20auditive%2C%20Mohammadia!3m2!1d36.734987!2d3.1752208!4m3!3m2!1d36.735119399999995!2d3.1750487!5e0!3m2!1sfr!2sdz!4v1646604548197!5m2!1sfr!2sdz"
          centerName={centre.centerName}
          phoneNumber="023 80 44 97"
          phoneNumber2="023 80 44 98"
          description={centre.description}
          key={key}
        ></CentreBox>
      ))}
      </div>
      
    </div>
  );
};

export default Centre;
