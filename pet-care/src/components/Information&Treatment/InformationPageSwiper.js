import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../componentStyle/Information&Treatment/InfomrmationSwiperPage.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function InformationPageSwiper(props) {
  const swiper = props.Swiper;
  console.log(swiper[0]);

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
        {swiper.map((ele, index) => {
          console.log(ele.fileName);
          return (
            <SwiperSlide>
              <div
                className="swiper-image"
                style={{ backgroundImage: `url("${ele.fileName}")` }}
              ></div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
