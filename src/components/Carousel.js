

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/carouselStyle.css";

// import required modules
import { Autoplay, Pagination, Navigation, EffectCoverflow} from "swiper";

export default function App() {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        
        autoplay={{
          delay: 1500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[Autoplay,EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide><img src={require("../assets/img1.jpg")} alt="not loaded" /></SwiperSlide>
        <SwiperSlide><img src={require("../assets/img2.jpg")} alt="not loaded" /></SwiperSlide>
        <SwiperSlide><img src={require("../assets/img3.jpg")} alt="not loaded" /></SwiperSlide>
        <SwiperSlide><img src={require("../assets/img4.jpg")} alt="not loaded" /></SwiperSlide>
        <SwiperSlide><img src={require("../assets/img1.jpg")} alt="not loaded" /></SwiperSlide>
        <SwiperSlide><img src={require("../assets/img2.jpg")} alt="not loaded" /></SwiperSlide>
        <SwiperSlide><img src={require("../assets/img3.jpg")} alt="not loaded" /></SwiperSlide>
        <SwiperSlide><img src={require("../assets/img4.jpg")} alt="not loaded" /></SwiperSlide>
        <SwiperSlide><img src={require("../assets/img1.jpg")} alt="not loaded" /></SwiperSlide>
      </Swiper>
    </>
  );
}
