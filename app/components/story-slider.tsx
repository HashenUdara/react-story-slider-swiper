//@ts-nocheck
"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "../swiper.css";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
} from "swiper/modules";
import Image from "next/image";

import Img1 from "@/public/img/1.jpg";
import Img2 from "@/public/img/2.jpg";
import Img3 from "@/public/img/3.jpg";
export default function App() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const handleTouchStart = (swiper: any) => {
    swiper.autoplay.pause();
  };

  const handleTouchEnd = (swiper: any) => {
    swiper.autoplay.resume();
  };

  return (
    <>
      <div className=" flex h-screen items-center justify-center bg-red-300">
        <Swiper
          effect={"cube"}
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            // pauseOnMouseEnter: true,
            // stopOnLastSlide: true,
            //   waitForTransition: true,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          navigation={true}
          modules={[Autoplay, EffectCoverflow, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <>
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
              >
                <SwiperSlide>
                  <Image src={Img1} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={Img2} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={Img3} alt="" />
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                  <svg viewBox="0 0 48 48" ref={progressCircle}>
                    <circle cx="24" cy="24" r="20"></circle>
                  </svg>
                  <span ref={progressContent}></span>
                </div>
              </Swiper>
            </>
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
