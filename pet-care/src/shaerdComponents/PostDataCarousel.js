import React from "react";
import "../shaerdComponentStyle/PostDataCarousel.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
export default function PostDataCarousel(props) {
  return (
    <>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="post-data-carousel-holder"
      >
        {props.postImage?.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img
                className="SwiperSlide-image"
                alt="post image"
                src={image.fileName}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
