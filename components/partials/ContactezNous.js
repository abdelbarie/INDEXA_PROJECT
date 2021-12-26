import React from "react";

const ContactezNous = () => {
  return (
    <div className="w-8/12 mx-auto pt-4 pb-20 relative">
      <div className="font-bold text-center py-2 text-2xl mb-5">
        CONTACTEZ NOUS
      </div>
      <div className="grid grid-cols-2  rounded-2xl shadow-md bg-custom-dark-blue relative p-10">
        <div className="">
          <div className="text-white font-extrabold text-3xl">Laissez votre numéro, nos experts vous rappelerons</div>
          <div className="text-white font-light text-xs mt-2 w-11/12">Est-ce que vous souffrez, vous ou l’un de vos proches d’une déficience auditive ? Nous vous accompagnons dans votre parcours de soins et vous conseillons pour votre prise en charge médicale.</div>
        </div>
        <div className="relative h-full w-full mx-auto pl-16">
            <input name="fullName" placeholder="NOM ET PRENOM" className="font-light bg-custom-light-blue p-2 w-full rounded-md mb-2 outline-none"></input>
            <input name="phoneNumber" placeholder="NUMERO DE TELEPHONE..." className="font-light bg-custom-light-blue p-2 w-full rounded-md mb-2 outline-none"></input>
            <textarea placeholder="DE QUOI SOUFFREZ-VOUS ?" className="font-light bg-custom-light-blue p-2 w-full rounded-md mb-2 outline-none" ></textarea>
            <button className="font-bold text-white px-3 py-2 text-sm bg-custom-green rounded-md float-right">RAPPELEZ-MOI</button>
        </div>

        {/* svgs */ }
        <img src="/imgs/greenCircle.svg" className="absolute top-32 -right-6 w-12"></img>
        <img src="/imgs/smallCircles.svg" className="absolute -bottom-6 -left-6 w-16"></img>
      </div>
     
    </div>
  );
};

export default ContactezNous;
