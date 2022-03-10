import React, { useState } from "react";
import frProducts from "../../Data/Products";
import ProductsAR from "../../Data/ProductsAR";
import ProductBox from "./ProductBox";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import SwiperCore, { FreeMode, Pagination } from "swiper";
SwiperCore.use([FreeMode, Pagination]);

import { useRouter } from "next/router";

const ProCatSection = (props) => {
  const { locale, locales, aspath } = useRouter();

  const ProductsData = locale === "fr" ? frProducts : ProductsAR;

  let i = 1;
  return (
    <div className="w-full py-5" id="contenue">

      <div className=" py-6 mt-5 bg-gray-50 dark:bg-gray-800">
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
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          {ProductsData.map((product, key) => (
            <>
              {(product.category == props.category) && (i++) &&(product.productName != props.productName ) && (
                <SwiperSlide key={key}>
                  <ProductBox
                    product={product}
                    content={props.content}
                    category={props.category}
                    grid={true}
                    id={product.id}
                  ></ProductBox>
                </SwiperSlide>
              )}
            </>
          ))}
        </Swiper>
      </div>
      <div className={`w-fit mx-auto my-2 ${i < 4 ? "hidden" : "block"}`}>
        <Link href={`/products/categories/${props.category}`}>
          <button className="text-lg font-semibold px-5 py-1 border-2 rounded-full hover:bg-custom-green border-custom-dark-blue dark:border-custom-green">
            {props.content.products.voirPlusButton}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ProCatSection;
