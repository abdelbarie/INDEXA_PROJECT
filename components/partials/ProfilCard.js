import React from "react";

const ProfilCard = (props) => {
  return (
    <div className="rounded-2xl shadow-md bg-custom-light-blue relative md:w-8/12 mx-auto pt-4 pb-10 px-6">
      <div className="font-semibold text-2xl border-b-2 border-custom-dark-blue">
        Profil 
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 md:gap-8 gap-4">
        <div className="grid grid-cols-2 h-fit my-auto pt-4">
          <div>
            <img src={props.profil.photo} className="rounded-full w-1/2 mx-auto" alt="profil image"></img>
            <div className="w-fit mx-auto"> <button className="bg-custom-green px-6 mt-3 py-1 rounded-full">
              Chargez
            </button></div>
           
          </div>
          <div className="pt-6">
            <div className="text-sm">Choisissez une image</div>
            <button className="bg-custom-dark-blue md:px-4 px-2 text-white text-sm font-light ">
              Choisir un fichier
            </button>
          </div>
        </div>
        <div className="p-5">
          <div>Nom</div>
          <input
            className="px-4 py-1 bg-custom-green mb-2 font-light"
            value={props.profil.firstName}
          ></input>
          <div>Nom</div>
          <input
            className="px-4 py-1 bg-custom-green mb-2 font-light"
            value={props.profil.lastName}
          ></input>
          <div>Nom</div>
          <input
            className="px-4 py-1 bg-custom-green mb-2 font-light"
            value={props.profil.email}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default ProfilCard;
