import HomeProduct from "../Data/HomeProduct";
import HomeProductBox from "../components/partials/HomeProductBox";
import CentreBox from "../components/partials/CentreBox";
import Centres from "../Data/Centres";
import AboutUsBox from "../components/partials/AboutUsBox";
import Questions from "../Data/Questions";

import QuestionBox from "../components/partials/QuestionBox" ; 
import { useState } from "react/cjs/react.development";


export default function Home() {
  const [moreCenters , setMoreCenters]= useState(true) ; 
  const showCenters = ()=>{
    setMoreCenters(!moreCenters)
  }
  return (
    <div className="relative overflow-x-hidden">
      <div className="HomePgeHeader grid md:grid-cols-2 px-10 md:px-32">
        <div className="h-fit my-auto ">
          <div className="font-extrabold text-4xl lg:text-6xl py-3">BRIGH YOUR FUTUR</div>
          <div className="font-semibold md:text-lg text-base">
            Destiné aussi bien aux enfants qu aux adultes atteints d une perte
            auditive sévère à profonde.
          </div>
          <div>
            <button className="font-bold text-xl md:text-2xl px-6 py-2 mt-6 shopNowButton text-white">
              SHOP NOW
            </button>
          </div>
        </div>
      </div>

      {/* Product Section */}
      <div className="Produit py-9">
        <div className="text-center font-bold text-4xl">NOS PRODUITS</div>
        <div className="grid grid-cols-1 md:grid-cols-3 px-10 md:px-32 gap-20 mt-20">
          {HomeProduct.map((product, key) => (
            <HomeProductBox
              category={product.category}
              img={product.productImg}
              key={key}
            ></HomeProductBox>
          ))}
        </div>
      </div>

      {/* Centers Section */}
      <div className="py-16">
        <div className="text-center font-bold text-4xl">NOS CENTRES</div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-20 px-10 md:px-32 gap-y-10">
          {Centres.map((center, key) => (
            <CentreBox
              location={center.location}
              centerName={center.centerName}
              phoneNumber={center.phoneNumber}
              description={center.description}
              key={key}
              id={center.id}
              disp={`${( moreCenters && key > 2)?'hidden' : 'block'}`}
            ></CentreBox>
          ))}
        </div>
        <div className="grid grid-cols-3 mt-10 px-10 md:px-32">
            
        </div>
        <div className="w-fit mx-auto mt-2">
          <button className="text-xl font-semibold px-7 py-1 border-2 rounded-xl voirPlusButton" onClick={showCenters}>
            {moreCenters?'VOIR PLUS...':'VOIR MOIN...'}
          </button>
        </div>
      </div>

      {/* About US Section */}
      <div className="px- mb-32">
         <AboutUsBox></AboutUsBox>
      </div>

      {/* Questions section */}
      <div className="px-4 md:mx-32 pb-10">
      <div className="text-center font-bold text-4xl mb-16">QUESTIONS</div>
        {
           Questions.map((question ,key)=>(
             <QuestionBox question={question.question} answer={question.answer} key={key}></QuestionBox>
           ))
        }
      </div>
      <img src="/imgs/questionMark.svg" className='absolute bottom-64 md:bottom-20 md:-right-52 -right-28 md:w-4/12 w-7/12 -z-50'></img>
    </div>
  );
}
