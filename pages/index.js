import HomeProduct from "../Data/HomeProduct";
import HomeProductBox from "../components/partials/HomeProductBox";
import CentreBox from "../components/partials/CentreBox";
import Centres from "../Data/Centres";
import AboutUsBox from "../components/partials/AboutUsBox";
import Questions from "../Data/Questions";
import Link from "next/link";
import ProductsCatHomeSection from "../components/partials/ProductsCatHomeSection";
import QuestionBox from "../components/partials/QuestionBox";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";
import SwiperCore, { FreeMode, Pagination } from "swiper";
import HomePageHeader from "../components/partials/HomePageHeader";
import {Navigation} from 'swiper'
SwiperCore.use([FreeMode, Pagination]);

export default function Home() {
  const [moreCenters, setMoreCenters] = useState(true);
  const showCenters = () => {
    setMoreCenters(!moreCenters);
  };
  return (
    <div className="relative overflow-x-hidden  ">
      <Swiper>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
         <SwiperSlide> <HomePageHeader></HomePageHeader></SwiperSlide>
         <SwiperSlide> <HomePageHeader></HomePageHeader></SwiperSlide>
         <SwiperSlide> <HomePageHeader></HomePageHeader></SwiperSlide>
      </Swiper>
      </Swiper>

      {/* Product Section */}
      <div className="Produit py-9 relative bg-gray-50 dark:bg-custom-dark-bg">
        <div className="text-center font-bold text-4xl">CATALOGUE DE PRODUITS</div>
        <ProductsCatHomeSection/>
        <div className=" px-10 md:px-16 lg:px-32 gap-20 mt-20 md:hidden">
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            pagination={{
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {HomeProduct.map((product, key) => (
              <SwiperSlide key={key}>
                <HomeProductBox
                  productName={product.productName}
                  img={product.productImg}
                ></HomeProductBox>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>


        <img
          src="/imgs/bordercircle.svg"
          className="absolute -bottom-10 -right-10 -z-50 w-20"
        ></img>
      </div>

      {/* Centers Section */}
      <div className="pb-16 pt-8 relative">
        <div className="text-center font-bold text-4xl">NOS CENTRES</div>
        <div className="mt-10 px-10 md:px-16 lg:px-32 gap-y-10">
    
      
                <CentreBox
                  location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25258.545921267265!2d-6.42212315383798!3d32.32877377897835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38649419c7fc1%3A0x6236b3e9a12bafd9!2sB%C3%A9ni%20Mellal%2C%20Maroc!5e0!3m2!1sfr!2sdz!4v1640183919839!5m2!1sfr!2sdz"
                  centerName="CENTRE AUDITIF MOURADIA - ALGER"
                  phoneNumber="+213 5 61 66 60 30"
                  description="Centre Commercial et d’Affaire Mohammadia Mall, N°935, RDC. Cité djénina, Mohammadia"
                  id= "1"
                ></CentreBox>
         
        </div>
        <div className="grid grid-cols-3 mt-10 px-10 md:px-32"></div>
        <img
          src="/imgs/greenCircle.svg"
          className="absolute -bottom-2 -left-10 -z-50 w-20"
        ></img>
      </div>

      {/* About US Section */}
      <div className="mb-32">
        <AboutUsBox></AboutUsBox>
      </div>

      {/* Questions section */}
      <div className="px-4 md:px-16 lg:px-32 pb-20 relative ">
        <div className="text-center font-bold text-4xl mb-16">QUESTIONS</div>
        {Questions.map((question, key) => (
          <QuestionBox
            question={question.question}
            answer={question.answer}
            key={key}
          ></QuestionBox>
        ))}
        <img
          src="/imgs/questionMark.svg"
          className="absolute -top-40 md:bottom-20 md:-right-28 lg:-right-40 -right-20 md:w-3/12 w-5/12 -z-50"
        ></img>
        <img
          src="/imgs/smallCircles.svg"
          className="absolute bottom-5 -left-10 -z-50 w-20"
        ></img>
      </div>
    </div>
  );
}
