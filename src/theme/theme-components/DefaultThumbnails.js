import React, { useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "../splidestyle.css";
import {
  FaBook,
  FaRegHeart,
  FaRegCalendarAlt,
  FaMapMarkedAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { BsShieldFillCheck } from "react-icons/bs";
import { ImExit } from "react-icons/im";
import { BiMap } from "react-icons/bi";

function DefaultThumbnails({ slide, setSlide, style }) {
  console.log(style.darkColor);
  return (
    <div className='fixed bottom-0 right-0 left-0 mx-auto z-50 drop-shadow-2xl'>
      <Splide
        options={{
          fixedWidth: window.screen.width < 640 ? 100 : 150,
          fixedHeight: window.screen.width < 640 ? 70 : 120,
          rewind: false,
          pagination: false,
          arrows: false,
          gap: -1,
          focus: "center",
          isNavigation: true,
          slideFocus: false,
        }}
        className=''
        id='thumbnail-slider'
      >
        <SplideSlide className=' '>
          <div
            className={`w-full h-full text-center pt-4 sm:pt-6  ${
              slide === 1 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => setSlide(1)}
          >
            <div className=''>
              <FaBook
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className='text-sm sm:text-xl sm:mt-2'>Cover</div>
          </div>
        </SplideSlide>
        <SplideSlide className=' '>
          <div
            className={`w-full h-full text-center pt-4 sm:pt-6 ${
              slide === 2 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => setSlide(2)}
          >
            <div className=''>
              <FaRegHeart
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className='text-sm sm:text-xl sm:mt-2'>Mempelai</div>
          </div>
        </SplideSlide>
        <SplideSlide className=' '>
          <div
            className={`w-full h-full text-center pt-4 sm:pt-6 ${
              slide === 3 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => setSlide(3)}
          >
            <div className=''>
              <FaRegCalendarAlt
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className='text-sm sm:text-xl sm:mt-2'>Acara</div>
          </div>
        </SplideSlide>
        <SplideSlide className=' '>
          <div
            className={`w-full h-full text-center pt-4 sm:pt-6 ${
              slide === 4 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => setSlide(4)}
          >
            <div className=''>
              <FaMapMarkedAlt
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className='text-sm sm:text-xl sm:mt-2'>Lokasi</div>
          </div>
        </SplideSlide>
        <SplideSlide className=' '>
          <div
            className={`w-full h-full text-center pt-4 sm:pt-6  ${
              slide === 5 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => setSlide(5)}
          >
            <div className=''>
              <BsShieldFillCheck
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className='text-sm sm:text-xl sm:mt-2'>Protokol</div>
          </div>
        </SplideSlide>
        <SplideSlide className=''>
          <div
            className={`w-full h-full text-center pt-4 sm:pt-6 ${
              slide === 6 ? style.thumbActive : style.thumbNonActive
            }`}
            onClick={() => setSlide(6)}
          >
            <div className=''>
              <ImExit
                size={window.screen.width < 640 ? 25 : 50}
                className='mx-auto'
              />
            </div>
            <div className='text-sm sm:text-xl sm:mt-2'>Penutup</div>
          </div>
        </SplideSlide>
      </Splide>
    </div>
  );
}

export default DefaultThumbnails;
