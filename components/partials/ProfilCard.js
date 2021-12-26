import React from "react";

const ProfilCard = (props) => {
  return (
      <div className="rounded-2xl shadow-md bg-custom-light-blue relative w-8/12 mx-auto pt-4 pb-20 px-6">
          <div className="font-semibold text-2xl">Profil <hr/></div>
          <div className="grid grid-cols-2">
              <div className="grid grid-cols-2 h-fit my-auto">
                  <div><img src={props.profil.photo} className='rounded-full w-1/2'></img>
                  <button className="bg-custom-green px-4 py-2 rounded-full">Chargez</button>
                  </div>
                  <div></div>
              </div>
              <div>
                  
              </div>
          </div>
      </div>

  );
};

export default ProfilCard;
