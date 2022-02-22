import React from "react";

const ContactezNous = (props) => {
  return (
    <div className="lg:w-8/12 md:w-10/12 mx-auto pt-4 pb-20 relative">
      <div className="font-bold text-center py-2 text-2xl mb-5">
        {props.content.contact.contacts.title}
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4  md:gap-0 rounded-2xl shadow-md bg-custom-dark-blue dark:bg-custom-dark-green relative md:p-10 p-7">
        <div className="">
          <div className="text-white font-extrabold md:text-3xl text-2xl">{props.content.contact.contacts.bigdesc}</div>
          <div className="text-white font-light text-xs mt-2 w-11/12">{props.content.contact.contacts.smalldesc}</div>
        </div>
        <div className="relative h-fit my-auto w-full  md:pl-16">
            <input name="fullName" placeholder={props.content.contact.form.fullName} className="font-light bg-custom-light-blue p-2 w-full rounded-md mb-2 outline-none text-sm"></input>
            <input name="phoneNumber" placeholder={props.content.contact.form.PhoneNumber} className="font-light bg-custom-light-blue p-2 w-full rounded-md mb-2 outline-none text-sm"></input>
            <textarea placeholder={props.content.contact.form.maladie} className="font-light bg-custom-light-blue p-2 w-full rounded-md mb-2 outline-none text-sm h-20" ></textarea>
            <button className="font-bold text-white px-3 py-2 text-sm bg-custom-green rounded-md float-right">RAPPELEZ-NOUS</button>
        </div>

        {/* svgs */ }
        <img src="/imgs/greenCircle.svg" className="absolute top-32 -right-6 w-12"></img>
        <img src="/imgs/smallCircles.svg" className="absolute -bottom-6 -left-6 w-16"></img>
      </div>
    </div>
  );
};

export default ContactezNous;
