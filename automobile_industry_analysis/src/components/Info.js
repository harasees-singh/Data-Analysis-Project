import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";
import "./Info.css";
// import required modules
import { Pagination, Navigation } from "swiper";

function Info(props) {
    console.log(props)
    return (
        // <div>
        //     {props.list.map((put)=>{
        //         return(<div>{put}</div>)
        //     })}
        // </div>
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