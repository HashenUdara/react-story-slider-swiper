"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import "../swiper.css";

// import required modules
import SwiperCore, {
  Autoplay,
  Navigation,
  EffectCube,
  Pagination,
} from "swiper/modules";
import Image from "next/image";

import Img1 from "@/public/img/1.jpg";
import Img2 from "@/public/img/2.jpg";
import Img3 from "@/public/img/3.jpg";
export default function StorySlider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s: any, time: any, progress: any) => {
    // @ts-ignore
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    // @ts-ignore
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

  const handleTouchStart = (swiper: any) => {
    swiper.autoplay.stop();
  };

  const handleTouchEnd = (swiper: any) => {
    swiper.autoplay.start();
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
          onAutoplayTimeLeft={onAutoplayTimeLeft}
          pagination={false}
          navigation={false}
          modules={[Autoplay, Pagination]}
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
                  // pauseOnMouseEnter: true,
                  // stopOnLastSlide: true,
                  //   waitForTransition: true,
                }}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                // noSwiping={true}
                pagination={{
                  clickable: true,
                }}
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
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
