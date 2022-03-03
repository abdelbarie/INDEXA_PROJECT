import React from "react";
import Link from "next/link";

const AboutUsBox = (props) => {
  return (
    <div className= "aboutUs bg-custom-dark-blue dark:bg-custom-dark-green w-11/12 md:w-9/12 lg:w-7/12 rounded-3xl relative mx-auto overflow-hidden shadow-xl">
      <img
        src="/imgs/aboutbg.png"
        className="absolute -left-20 md:left-0 top-0 aboutimg rounded-l-3xl "
      ></img>
      <div className=" w-full md:w-1/2 h-fit relative float-right my-auto lg:pt-16 md:pt-16 pt-16 pr-8 pl-4">
        <div className="text-white text-3xl font-bold ">{props.content.home.quiSommeNous.sectionTitle}</div>
        <div className="text-white mt-4">
          {props.content.footer.description}
        </div>
        <Link href="/about">
        <button className="aboutButton rounded-lg px-5 py-2 mt-6 font-semibold flex gap-2 text-custom-dark-blue dark:text-custom-dark-green">{props.content.home.quiSommeNous.seeMoreButton} <img src="/imgs/arrow.png" width="20px" className="my-auto"></img> </button>
        </Link>
     
      </div>
    </div>
  );
};

export default AboutUsBox;
