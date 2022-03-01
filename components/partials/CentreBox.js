import React from "react";

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
        <div className="mt-1 text-sm">{props.description}</div>
        <div className="text-lg font-semibold py-1 border-b-2 w-fit px-4 mx-auto mt-3 flex gap-2" > <img src="/imgs/telephone.svg" width="20px"></img> {props.phoneNumber}</div>
        <div className="text-lg font-semibold py-1 border-b-2 w-fit px-4 mx-auto  flex gap-2" > <img src="/imgs/telephone.svg" width="20px"></img> {props.phoneNumber2}</div>
      </div>
     
    </div>
  );
};

export default CentreBox;
