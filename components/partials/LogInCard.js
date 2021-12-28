import react from "react";
import Link from "next/link";

const LogInCard = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-custom-dark-blue md:w-10/12 lg:w-8/12 mx-auto shadow-lg my-10 connectionBox">
      <div className="connectionCard md:rounded-l-2xl rounded-t-2xl">
        <div className="bg-custom-dark-blue w-full h-full md:rounded-l-2xl rounded-t-2xl  bg-opacity-70 md:py-32 py-10">
          <div className="text-white text-center h-fit my-auto text-xl font-bold py-4">
            CONTENT DE TE REVOIR
          </div>
          <p className='text-white font-light px-4 text-xs text-center'>
            Comme le t-shirt classique, mais en légèrement plus près du corps.
            Coupe ajustée. Si vous préférez une coupe moins près du corps,
            commandez une taille au-dessus ou jetez un coup d'œil au t-shirt
            classique
          </p>
        </div>
      </div>
      <div className="md:py-16 py-10 md:px-6 px-4">
        <div className="font-semibold text-xl text-white text-center">
          Connectez-Vous
        </div>
        <div className="font-light text-xs flex justify-between w-full text-white text-center gap-1  my-2 ">
          Vous n avez pas un compte ?
          <Link href="/signUp">
            <a className="text-custom-green font-semibold">Inscrivez-vous</a>
          </Link>
        </div>
        <div className="flex justify-between border-b-2 py-2 mt-16">
          <input
            className="bg-transparent w-full outline-none text-sm text-white font-light"
            placeholder="Email ou Nom  d’utilisateur"
          ></input>
          <img src="/imgs/whiteMail.png" width="20px"></img>
        </div>
        <div className="flex justify-between border-b-2 py-2 my-2">
          <input
            className="bg-transparent w-full outline-none text-sm text-white font-light"
            placeholder="Email ou Nom  d’utilisateur"
          ></input>
          <img src="/imgs/lock.png" width="15px"></img>
        </div>
        <div className="flex justify-between">
          <div className="text-white flex font-light text-xs gap-2">
            <input type="checkbox"></input> Se souvenir de moi
          </div>
          <div className="text-white  font-light text-xs ">
            Mot de passe oublié ?
          </div>
        </div>
        <div className="w-fit mx-auto mt-14">
          <button className="bg-custom-green rounded-full px-10 py-2 text-sm text-custom-dark-blue">
            Connectez-Vous
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogInCard;
