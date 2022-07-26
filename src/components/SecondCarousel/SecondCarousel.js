
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./SecondCarouselStyle.css"
import CarouselContent from "./CarouselContent";
import { Typography } from "@mui/material";
import { connect } from 'react-redux/es/exports';
import { mapStateToProps } from '../store/Reducers';




// import required modules
import { Pagination, Navigation } from "swiper";

 function SecondCarousel(props) {
  return (
    <>
    <Typography style={{color:props.contrastColor,textAlign:"center",fontSize:"3rem",backgroundColor:props.backgroundColor,margin:"0px",paddingTop:"15px",paddingBottom:"15px" }}>
        Our Reviews
    </Typography>
    <div style={{backgroundColor:props.backgroundColor}}>

    <Swiper
        style={{width:"90%"}}
        slidesPerView={3}
        spaceBetween={30}
        slidesPerGroup={2}
        loop={true}
        loopFillGroupWithBlank={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
        <SwiperSlide style={{backgroundColor:props.secondBackgroundColor,border:`1px solid ${props.contrastColor}`}}><CarouselContent  image={require("../../assets/review.jpg")} description={"Review 1"} /></SwiperSlide>
      </Swiper>

    </div>
    </>
  );
}


export default connect(mapStateToProps)(SecondCarousel);