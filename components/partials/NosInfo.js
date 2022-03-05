import React from "react";

const NosInfo = (props) => {
  return (
    <div className="lg:w-8/12 md:w-10/12 mx-auto pt-4 pb-20 ">
      <div className="font-bold text-center py-2 text-2xl mb-5">
        {props.content.contact.title1}
      </div>
      <div className="grid md:grid-cols-2  rounded-2xl shadow-md bg-custom-light-blue relative text-custom-dark-blue dark:text-custom-dark-green opacity-80">
        <div className="md:w-12/12 mx-auto py-12 md:px-10 px-4 text-lg opacity-100">
          <img src="/imgs/logo-indexa.png" className="w-64 mb-5"></img>
          <div className="my-1 flex gap-2 mb-4   md:w-full ">
            <img src="/imgs/telephone.svg" width="20px" alt="phone icon" className="opacity-100"></img>{" "}
            023 80 44 97-98 
          </div>
          <div className="my-1  flex gap-2 w-fit  mb-4 md:w-full ">
            <img src="/imgs/mail.svg" width="20px" alt="mail icon"></img>
            Contact@indexa-braille.com
          </div>
          <div className="my-1 flex gap-1  md:w-full opacity-100 ">
            <img
              src="/imgs/position.svg"
              width="25px"
              alt="position icon"
              className=""
            ></img>
            {props.content.footer.location}
          </div>
        </div>
        <div className="relative h-full hidden md:block">
            <img src="/imgs/nosInfo.png" className="absolute  -bottom-1 w-11/12"></img>
            <img src="/imgs/smallCircles.svg" className="absolute  -bottom-10 w-20 left-14"></img>
        </div>

        {/* svgs */}
        <img src="/imgs/borderCircle.svg" className="absolute md:-top-12 md:-right-12 md:w-28 w-16 -top-6 -right-2"></img>
      </div>
    </div>
  );
};

export default NosInfo;
