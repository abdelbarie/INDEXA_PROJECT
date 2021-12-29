import HomeProduct from "../Data/HomeProduct";
import HomeProductBox from "../components/partials/HomeProductBox";
import CentreBox from "../components/partials/CentreBox";
import Centres from "../Data/Centres";
import AboutUsBox from "../components/partials/AboutUsBox";
import Questions from "../Data/Questions";

import QuestionBox from "../components/partials/QuestionBox";
import React, { useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore, { FreeMode, Pagination } from "swiper";
SwiperCore.use([FreeMode, Pagination]);

export default function Home() {
  const [moreCenters, setMoreCenters] = useState(true);
  const showCenters = () => {
    setMoreCenters(!moreCenters);
  };
  return (
    <div className="relative overflow-x-hidden">
      <div className="HomePgeHeader grid md:grid-cols-2 px-10 md:px-20 lg:px-32">
        <div className="h-fit my-auto ">
          <div className="font-extrabold text-4xl lg:text-6xl py-3">
            BRIGH YOUR FUTUR
          </div>
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
      <div className="Produit py-9 relative">
        <div className="text-center font-bold text-4xl">NOS PRODUITS</div>

        <div className=" px-10 md:px-16 lg:px-32 gap-20 mt-20">
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
                  category={product.category}
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
      <div className="py-16 relative">
        <div className="text-center font-bold text-4xl">NOS CENTRES</div>
        <div className="mt-20 px-10 md:px-16 lg:px-32 gap-y-10">
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
            {Centres.map((center, key) => (
              <SwiperSlide key={key}>
                <CentreBox
                  location={center.location}
                  centerName={center.centerName}
                  phoneNumber={center.phoneNumber}
                  description={center.description}
                  id={center.id}
                ></CentreBox>
              </SwiperSlide>
            ))}
          </Swiper>
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
