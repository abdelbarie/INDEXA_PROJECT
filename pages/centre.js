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
          location={centre.location}
          centerName={centre.centerName}
          phoneNumber={centre.phoneNumber}
          description={centre.description}
          icon = {false}
          key={key}
        ></CentreBox>
      ))}
      </div>
      
    </div>
  );
};

export default Centre;
