


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";


// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../styles/carouselStyle.css";
import { Typography } from "@mui/material";
import { connect } from 'react-redux/es/exports';
import { mapStateToProps } from "./store/Reducers"



// import required modules
import { Autoplay, Pagination, EffectCoverflow} from "swiper";

function Carousel(props) {
  return (
    <>
    <div style={{backgroundColor:props?.backgroundColor}} >
    <Typography color="text.primary" style={{margin:"0px",paddingTop:"15px",paddingBottom:"15px",textAlign:"center",fontFamily:"Roboto",fontSize:"4rem",textDecoration:"italic",marginTop:"0px",tetShadow:"-2px 2px 0 #FFF "}}>
        A little about MERAKI
      </Typography>
      <Typography color="text.primary"  style={{margin:"0px",paddingTop:"15px",paddingBottom:"15px",textAlign:"center",fontFamily:"Roboto",fontSize:"2.5rem",textDecoration:"italic",marginTop:"0px",tetShadow:"-2px 2px 0 #FFF "}}>
        Meraki is a non profitable organization which helps students  to select their future professional streams and their careers with the help of modern technology and the OCEAN test
      </Typography>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        
        autoplay={{
          delay: 1000,
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
    </div>

    </>
  );
}

export default connect(mapStateToProps) (Carousel)