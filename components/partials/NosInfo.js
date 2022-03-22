import React from "react";
import {
  FaFacebookSquare,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useRouter } from "next/router";

const NosInfo = (props) => {
  const { locale, locales, isPath } = useRouter();
  return (
    <div className="lg:w-8/12 md:w-10/12 mx-auto pt-4 pb-20 ">
      <div className="font-bold text-center  py-2 text-2xl mb-5">
        {props.content.contact.title1}
      </div>
      <div
        className="grid md:grid-cols-2  rounded-3xl shadow-md dark:border-custom-dark-green border-custom-light-blue md:border-4 relative text-custom-dark-blue dark:text-custom-dark-green "
        
      >
        <div className="md:w-12/12 w-full bg-custom-light-blue  dark:bg-custom-dark-green rounded-2xl md:rounded-r-none mx-auto py-12 md:px-10 px-4 text-lg opacity-100">
          <div className="w-fit mx-auto md:w-full">
            {locale === "fr" ? (
              <>
                <img
                  src="/imgs/logo/logofullcolourdarkfrench.svg"
                  className="w-52 mx-auto mb-8 dark:hidden"
                ></img>
                <img
                  src="/imgs/logo/logofullcolourlightfrench.svg"
                  className="w-52 mx-auto mb-8 hidden dark:block"
                ></img>
              </>
            ) : (
              <>
                <img
                  src="/imgs/logo/logofullcolourdarkarabic.svg"
                  className="w-44 mx-auto mb-8 dark:hidden"
                ></img>
                <img
                  src="/imgs/logo/logofullcolourlightarabic.svg"
                  className="w-44 mx-auto mb-8 hidden dark:block"
                ></img>
              </>
            )}
          </div>

          <a
            href="tel:023 80 44 97"
            className="my-1 mx-auto   flex dark:text-white gap-2 mb-1  rounded-full hover:text-custom-green dark:hover:text-custom-green hover:border-custom-green border-2 border-custom-dark-blue dark:border-custom-light-blue w-fit  px-5 py-1"
          >
            <FaPhone className="text-xl w-8  mt-1 text-center" />
            023 80 44 97
          </a>
          <a
            href="tel:023 80 44 98"
            className="my-1 flex mx-auto   dark:text-white gap-2 mb-4 rounded-full hover:text-custom-green dark:hover:text-custom-green hover:border-custom-green border-custom-dark-blue dark:border-custom-light-blue border-2 w-fit  px-5 py-1 "
          >
            <FaPhone className="text-xl w-8  mt-1  text-center" />
            023 80 44 98
          </a>
          <div className="my-1   flex gap-1 w-fit mx-auto mb-4 dark:text-white md:w-full ">
            <div className=" ">
            <FaEnvelope className="text-xl w-8 mt-1 text-center dark:hover:text-custom-dark-bg" />
            </div>Contact@indexabraille.com
          </div>
          <div className="my-1  flex gap-1 text-center md:text-left  md:w-full mx-auto w-fit dark:text-white opacity-100 ">
            <div className=" text-center">
              <FaMapMarkerAlt className="text-xl mt-1 w-8 text-center dark:hover:text-custom-dark-bg" />
            </div>
            {props.content.footer.location}
          </div>
        </div>
        <div className="relative h-full hidden md:block px-10">
          {/* <img src="/imgs/nosInfo.png" className="absolute  -bottom-1 w-11/12"></img> */}
          
          <img src="/imgs/contactMen.png" className="absolute bottom-0"></img>
          <img
            src="/imgs/smallCircles.svg"
            className="absolute  -bottom-5 w-20 left-14"
          ></img>
        </div>

        {/* svgs */}
        <img
          src="/imgs/borderCircle.svg"
          className="absolute md:-top-5 md:-right-5 md:w-28 w-16 -top-6 -right-2"
        ></img>
      </div>
    </div>
  );
};

export default NosInfo;
