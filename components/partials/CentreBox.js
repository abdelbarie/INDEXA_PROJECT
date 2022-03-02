import React from "react";
import Link from "next/link";

const CentreBox = (props) => {
  return (
    <div className={`xl:w-8/12  mx-auto pb-10 `}>
      <div className="centreMap mx-auto relative border-t-4 rounded-3xl">
        <iframe
          src={props.location}
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
      </div>
      <div className="mt-2 w-5/6 text-center mx-auto">
        <div className="mt-2 w-5/6 text-center mx-auto font-semibold text-lg">
          {props.centerName}
        </div>
        <div className="mt-1 text-sm ">{props.description}</div>
        <div className="gap-4 mt-3 flex w-fit mx-auto">  
         <Link href="">
          <a><img src="/imgs/GoogleMap.png" alt='google map' className="w-16 mt-2 hover:animate-none animate-bounce"></img></a>
         </Link> 

        <div>
         <a className="text-lg font-semibold py-1 border-b-2 w-fit px-4 mx-auto flex gap-2" href="tel:tel:023 80 44 97"><img src="/imgs/telephone.svg" width="20px"></img> {props.phoneNumber}</a> 
         <a className="text-lg font-semibold py-1 border-b-2 w-fit px-4 mx-auto  flex gap-2" href="tel:023 80 44 98"><img src="/imgs/telephone.svg" width="20px"></img> {props.phoneNumber2}</a>
        </div> 
        </div>
        </div>
    </div>
  );
};

export default CentreBox;
