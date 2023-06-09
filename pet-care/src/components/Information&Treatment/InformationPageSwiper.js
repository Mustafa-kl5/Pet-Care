import React from "react";
import "../../componentStyle/Information&Treatment/InfomrmationSwiperPage.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
export default function InformationPageSwiper(props) {
  const swiper = props.Swiper;
  return (
    <>
      <Swiper
        pagination={{
          type: "progressbar",
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="animal-breed-swiper"
      >
        {swiper.map((ele, index) => {
          return (
            <SwiperSlide key={index}>
              <img className="animal-breed-image" src={ele.fileName} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
