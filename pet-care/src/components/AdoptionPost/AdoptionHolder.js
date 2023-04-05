import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import AdoptionPostCard from "./AdoptionPostCard";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/scrollbar";

// import required modules
import { FreeMode, Scrollbar, Mousewheel } from "swiper";
function AdoptionHolder() {
  return (
    <div className="">
      <AdoptionPostCard></AdoptionPostCard>
    </div>
  );
}
export default AdoptionHolder;
