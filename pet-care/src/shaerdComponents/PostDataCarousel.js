import React from "react";
import "../shaerdComponentStyle/PostDataCarousel.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import catImage from "../Image/cat.jpg";
export default function PostDataCarousel() {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="post-data-carousel-holder"
      >
        <SwiperSlide>
          <div
            className="SwiperSlide-image"
            style={{ backgroundImage: `url("${catImage}")` }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="SwiperSlide-image"
            style={{ backgroundImage: `url("${catImage}")` }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="SwiperSlide-image"
            style={{ backgroundImage: `url("${catImage}")` }}
          />
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="SwiperSlide-image"
            style={{ backgroundImage: `url("${catImage}")` }}
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
