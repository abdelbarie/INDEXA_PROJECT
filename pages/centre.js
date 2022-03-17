import React, { useState } from "react";
import CentresBox from "../components/partials/CentersBox";
import Centres from "../Data/Centres";
import frContent from "../public/locales/fr/common";
import arContent from "../public/locales/arab/common";
import { useRouter } from "next/router";

const Centre = () => {
  const router = useRouter();
  const { locale, locales, asPath } = useRouter();
  const content = locale === "fr" ? frContent : arContent;
  const locations = [
    "ALGER",
    "BLIDA",
    "TIZI OUZOU",
    "SIDI BEL ABBES",
    "ORAN",
    "CONSTANTINE",
    "EL OUED",
  ];
  const [filter, setFilter] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  const handleFilter = (e)=>{
    setFilter({ ...filter, [e]: !filter[e] });
  }
  return (
    <div>
      <div className="w-full h-60 bg-gray-100 dark:bg-gray-800 mb-10 flex justify-between relative">
        <div className="mx-auto pt-20 text-5xl md:text-6xl font-bold">
          {content.home.centres.sectionTitle}
          <div className="w-full h-2 -mt-1 bg-custom-green"></div>
        </div>
        <img
          src="/imgs/CenterHeader2.png"
          className="h-full ml-auto absolute md:hidden opacity-10 md:opacity-10"
        ></img>
        <img
          src="/imgs/CenterHeader2.png"
          className="h-full ml-auto hidden md:block"
        ></img>
      </div>
      <div className="px-5 md:px-28">
        <div className="w-fit mx-auto">
          {locations.map((loc, key) => (
            <button
              key={key}
              onClick={()=>handleFilter(key)}
              className={`${
                filter[key] ? "bg-custom-green" : "bg-gray-100 dark:bg-gray-700"
              } md:px-8 py-2 rounded-full  shadow-xl  text-sm my-2 w-36 md:w-fit md:text-md mx-2  md:mx-3 hover:bg-custom-green dark:hover:bg-custom-green `}
            >
              {loc}
            </button>
          ))}
        </div>
        {Centres.map(
          (centre, key) =>
            ((!filter[0] &&
              !filter[1] &&
              !filter[2] &&
              !filter[3] &&
              !filter[4] &&
              !filter[5] &&
              !filter[6]) ||
              filter[locations.indexOf(centre.wilaya)]) && (
              <CentresBox
                location={centre.location}
                centerName={centre.centerName}
                phoneNumber={centre.phoneNumber}
                description={centre.description}
                icon={false}
                key={key}
              ></CentresBox>
            )
        )}
      </div>
    </div>
  );
};

export default Centre;
