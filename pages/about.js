import react from "react";

const About = () => {
  return (
    <div className="grid  gird-cols-1 md:grid-cols-2  md:px-16 lg:px-36 pb-20 pt-10">
      <div className="h-fit my-auto px-5">
        <div className="font-bold md:text-3xl text-2xl pb-4">A PROPOS DE NOUS</div>
        <div className='text-sm'>
          Comme le t-shirt classique, mais en légèrement plus près du corps.
          Coupe ajustée. Si vous préférez une coupe moins près du corps,
          commandez une taille au-dessus ou jetez un coup d œil au t-shirt
          classique. Le modèle mesure 1,83 m et porte une taille L. La modèle
          mesure 1,73 m et porte une taille S. Tissu de poids moyen : 145 g/m²
          (4,2 oz). Les t-shirts unis sont 100 % coton, les gris chinés 90 %
          coton et 10 % polyester, les gris anthracite chinés 52 % coton et 48 %
          polyester.
        </div>
      </div>
      <div className="hidden md:block">
          <img src='/imgs/aboutUS.png' className="mx-auto w-1/2"></img>
      </div>
    </div>
  );
};

export default About;
