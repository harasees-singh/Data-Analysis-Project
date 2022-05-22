import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./CSS/styles.css";
import "./CSS/Info.css";
// import required modules
import { Pagination, Navigation } from "swiper";

function Info(props) {
    return (
        <Swiper
            pagination={{
                type: "fraction",
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {props.list.map((put)=>{
                return(<SwiperSlide><div className="text">{put}</div></SwiperSlide>)
            })}
        </Swiper>
        
    )
}
export default Info; 