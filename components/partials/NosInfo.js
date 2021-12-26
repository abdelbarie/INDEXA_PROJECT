import React from "react";

const NosInfo = () => {
  return (
    <div className="w-8/12 mx-auto pt-4 pb-20">
      <div className="font-bold text-center py-2 text-2xl mb-5">
        NOS INFORMATIONS
      </div>
      <div className="grid grid-cols-2  rounded-2xl shadow-md bg-custom-light-blue relative">
        <div className="md:w-12/12 mx-auto py-16 px-10">
          <img src="/imgs/logo-indexa.png" className="w-40 mb-5"></img>
          <div className="my-1 font-semibold flex gap-2 w-fit mx-auto  md:w-full  text-center md:text-left ">
            <img src="/imgs/telephone.svg" width="20px" alt="phone icon"></img>{" "}
            +213 23 80 40 61
          </div>
          <div className="my-1 font-semibold flex gap-2 w-fit mx-auto  md:w-full text-center md:text-left">
            <img src="/imgs/mail.svg" width="20px" alt="mail icon"></img>
            info@indexapro.com
          </div>
          <div className="my-1 font-semibold flex gap-2 w-fit mx-auto md:w-full text-center md:text-left">
            <img
              src="/imgs/position.svg"
              width="25px"
              alt="position icon"
            ></img>
            Centre commercial Mohammadia Mall, 16058 Alger
          </div>
        </div>
        <div className="relative h-full">
            <img src="/imgs/nosInfo.png" className="absolute  -bottom-1 w-11/12"></img>
            <img src="/imgs/smallCircles.svg" className="absolute  -bottom-10 w-20 left-14"></img>
        </div>

        {/* svgs */}
        <img src="/imgs/borderCircle.svg" className="absolute -top-12 -right-12 w-28"></img>
      </div>
    </div>
  );
};

export default NosInfo;
