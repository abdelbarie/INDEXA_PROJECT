import { useRouter } from "next/router";
import HomeProduct from "../Data/HomeProduct";
import HomeProductBox from "../components/partials/HomeProductBox";
import CentreBox from "../components/partials/CentreBox";
import SearchInput from '../components/partials/SearchInput'
import AboutUsBox from "../components/partials/AboutUsBox";
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
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay } from "swiper";

SwiperCore.use([FreeMode, Pagination]);

import frContent from "../public/locales/fr/common";
import arContent from "../public/locales/arab/common";



export default function Home() {
  /*  */
  
 const router = useRouter() ; 
 const { locale, locales, asPath } = useRouter();

 /* internationalisation content */ 
 const content = locale === 'fr' ? frContent : arContent ;  

  const [moreCenters, setMoreCenters] = useState(true);
  const showCenters = () => {
    setMoreCenters(!moreCenters);
  };
  return (
    <div className= {`${locale === 'fr' ? 'text-left' : 'text-right'} relative overflow-x-hidden`}> 
      <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
      >
      <SwiperSlide>
        <HomePageHeader content={content}></HomePageHeader>
        </SwiperSlide>
        <SwiperSlide>
        <HomePageHeader content={content}></HomePageHeader>
        </SwiperSlide>
        <SwiperSlide>
        <HomePageHeader content={content}></HomePageHeader>
        </SwiperSlide>
        <SwiperSlide>
        <HomePageHeader content={content}></HomePageHeader>
        </SwiperSlide>
        <SwiperSlide>
        <HomePageHeader content={content}></HomePageHeader>
        </SwiperSlide>
      </Swiper>
    
     
      {/* Product Section */}
      <div className="Produit py-9 relative bg-gray-50 dark:bg-custom-dark-bg">
        <div className="text-center font-bold text-4xl">{content.home.catalogue}</div>
        <ProductsCatHomeSection/>
        {/* <div className=" px-10 md:px-16 lg:px-32 gap-20 mt-20 md:hidden">
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
        </div> */}


        <img
          src="/imgs/bordercircle.svg"
          className="absolute -bottom-10 -right-10 -z-50 w-20"
        ></img>
      </div>

      {/* Centers Section */}
      <div className="pb-16 pt-8 relative">
        <div className="text-center font-bold text-4xl">{content.home.centres.sectionTitle}</div>
        <div className="mt-10 px-10 md:px-16 lg:px-32 gap-y-10">
    
      
                <CentreBox
                  location="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25258.545921267265!2d-6.42212315383798!3d32.32877377897835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda38649419c7fc1%3A0x6236b3e9a12bafd9!2sB%C3%A9ni%20Mellal%2C%20Maroc!5e0!3m2!1sfr!2sdz!4v1640183919839!5m2!1sfr!2sdz"
                  centerName={content.home.centres.centerName}
                  phoneNumber="023 80 44 97"
                  phoneNumber2="023 80 44 98"
                  description={content.home.centres.location}
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
        <AboutUsBox content={content}></AboutUsBox>
      </div>

      {/* Questions section */}
      <div className="px-4 md:px-16 lg:px-32 pb-20 relative ">
        <div className="text-center font-bold text-4xl mb-16">{content.home.questions.sectionTitle}</div>
        {content.home.questions.questionsList.map((question, key) => (
          <QuestionBox
            question={question.question}
            answer={question.answer}
            key={key}
          ></QuestionBox>
        ))}
        <img
          src="/imgs/questionMark.svg"
          className="absolute -top-40 md:bottom-20 md:-right-28 lg:-right-28 -right-20 md:w-2/12 w-5/12 -z-50"
        ></img>
        <img
          src="/imgs/smallCircles.svg"
          className="absolute bottom-5 -left-10 -z-50 w-20"
        ></img>
      </div>
    </div>
  );
}

