import react from "react";

const About = () => {
  return (
    <div className="grid  gird-cols-1 md:grid-cols-2  md:px-16 lg:px-36 pb-20 pt-10">
      <div className="h-fit my-auto px-5">
        <div className="font-bold md:text-3xl text-2xl pb-4">A PROPOS DE NOUS</div>
        <div className='text-md productDetails'>
        Indexa Braille, représentant et distributeur de grandes marques mondiales spécialisées dans les équipements et solutions destinées aux personnes malvoyantes et non voyantes.

        Indexa braille œuvre avec ses partenaires afin d’apporter des solutions adaptées permettant aux malvoyants et aux non-voyants d’avoir des équipements répondants à leurs besoins et leurs permettant d’apprendre, de s’informer et de s’amuser malgré leurs déficiences visuelles
        </div>
      </div>
      <div className="hidden md:block">
          <img src='/imgs/aboutUS.png' className="mx-auto w-1/2"></img>
      </div>
    </div>
  );
};

export default About;
