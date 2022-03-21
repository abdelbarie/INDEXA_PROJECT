import React from "react";
import Link from "next/link";
import { FaPhone } from 'react-icons/fa';

const CentresBox = (props) => {
  return (
    <div className={`xl:w-9/12 md:grid md:grid-cols-2 my-20 mx-auto`}>
      <div className="w-full mx-auto mb-4 relative  rounded-3xl">
        <iframe
          src={props.location}
          width="100%"
          height="350px"
          loading="lazy"
          className="rounded-3xl shadow-xl "
        ></iframe>
      </div>
      <div className=" text-center h-fit my-auto mx-5">
        <div className=" w-5/6 text-center  mx-auto font-semibold text-xl md:text-2xl">
          {props.centerName}
        </div>
        <div className="mt-1 text-md ">{props.description}</div>

        <div className="gap-4 mt-3  w-fit mx-auto">
          {
            props.phoneNumber.map((phone , key)=>(
              <a key={key} className="text-md  py-2 rounded-full border-2 border-custom-dark-blue hover:border-custom-green dark:border-custom-white hover:text-custom-green dark:bor mb-2 hover:shadow-md w-fit px-4 mx-auto  flex gap-2" href={`tel:${phone}`}><FaPhone className="mt-1"/> {phone}</a>
            ))
          } </div> 

        <div className="w-fit mx-auto flex">
        <Link href="https://www.google.com/maps/place/INDEXA+Centre+d'audiométrie+et+de+prothèse+auditive/@36.7350235,3.1729652,17.06z/data=!4m9!1m2!2m1!1sIndexa+Braille,+Centre+commercial+et+d'affaires+Mohammadia+Mall++!3m5!1s0x128e52016476d889:0xf8c3ddbbeaf84cd!8m2!3d36.734987!4d3.1752208!15sCj9JbmRleGEgQnJhaWxsZSwgQ2VudHJlIGNvbW1lcmNpYWwgZXQgZCdhZmZhaXJlcyBNb2hhbW1hZGlhIE1hbGySAQthdWRpb2xvZ2lzdA">
          <a target="_blank" className={`${props.icon ? 'block' : 'hidden'}`}><img src="/imgs/GoogleMap.png" alt='google map' className="md:w-16 w-12 md:mt-2 mt-4 hover:animate-none animate-bounce"></img></a>
         </Link>
         <Link href="https://ul.waze.com/ul?ll=36.73518337%2C3.17514212&navigate=yes&utm_campaign=waze_website&utm_source=waze_website&utm_medium=lm_share_location">
          <a target="_blank" className={`${props.icon ? 'block' : 'hidden'}`}><img src="/imgs/Waze.png" alt='google map' className="md:w-16 w-12 md:mt-2 mt-4 hover:animate-none animate-bounce"></img></a>
         </Link>
        </div>
   
        </div>
    </div>
  );
};

export default CentresBox;
