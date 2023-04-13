import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../componentStyle/Information&Treatment/InfomrmationSwiperPage.css";
import CatBreed from "../../Image/Cat-Breed1.png";
// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

export default function InformationPageSwiper() {
  return (
    <>
      <Swiper
        cssMode={true}
        navigation={true}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-image"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
