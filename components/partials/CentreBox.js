import React from "react";
import Link from "next/link";
import { FaPhone } from 'react-icons/fa';

const CentreBox = (props) => {
  return (
    <div className={`xl:w-8/12  mx-auto pb-10 `}>
      <div className="centreMap mx-auto relative  rounded-3xl">
        <iframe
          src={props.location}
          width="100%"
          height="100%"
          loading="lazy"
          className="rounded-3xl"
        ></iframe>
      </div>
      <div className="mt-2 w-5/6 text-center mx-auto">
        <div className="mt-2 w-5/6 text-center  mx-auto font-semibold text-lg">
          {props.centerName}
        </div>
        <div className="mt-1 text-sm ">{props.description}</div>
        <div className="gap-4 mt-3 flex w-fit mx-auto">  
         <Link href="https://www.google.com/maps/place/INDEXA+Centre+d'audiométrie+et+de+prothèse+auditive/@36.7350235,3.1729652,17.06z/data=!4m9!1m2!2m1!1sIndexa+Braille,+Centre+commercial+et+d'affaires+Mohammadia+Mall++!3m5!1s0x128e52016476d889:0xf8c3ddbbeaf84cd!8m2!3d36.734987!4d3.1752208!15sCj9JbmRleGEgQnJhaWxsZSwgQ2VudHJlIGNvbW1lcmNpYWwgZXQgZCdhZmZhaXJlcyBNb2hhbW1hZGlhIE1hbGySAQthdWRpb2xvZ2lzdA">
          <a target="_blank"><img src="/imgs/GoogleMap.png" alt='google map' className="md:w-16 w-12 md:mt-2 mt-4 hover:animate-none animate-bounce"></img></a>
         </Link> 

        <div>
         <a className="text-lg font-semibold py-1 border-b-2 w-fit px-4 mx-auto flex gap-2" href="tel:tel:023 80 44 97"><FaPhone className="mt-1"/>{props.phoneNumber}</a> 
         <a className="text-lg font-semibold py-1 border-b-2 w-fit px-4 mx-auto  flex gap-2" href="tel:023 80 44 98"><FaPhone className="mt-1"/> {props.phoneNumber2}</a>
        </div> 
        </div>
        </div>
    </div>
  );
};

export default CentreBox;
