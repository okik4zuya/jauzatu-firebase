import React from "react";

function LayoutCoverThemeTwo({ slideIndex, value, slide, style }) {
  return (
    <div
      className={`slide-cover absolute top-0 bottom-0 right-0 left-0 ${
        slide !== slideIndex ? "animate-fadeOut" : ""
      }`}
    >
      <div
        className={`content-wrapper relative w-full px-4 ${
          window.screen.height > 700 ? "top-[17vh]" : "top-[10vh]"
        } h-[60vh] `}
      >
        <div
          className={`relative text-center top-[100px] sm:top-[70px] right-[50px] ${
            style.fontArt
          } text-[60px] sm:top-[220px] sm:text-[100px] sm:right-[100px] ${
            style.secondaryTextColor
          } ${
            slide === slideIndex && "animate-fadeInRight animation-delay-1000"
          } `}
        >
          {value.namaPria}
        </div>

        <div
          className={`relative text-center top-[80px] left-[50px] ${
            style.fontArt
          } text-[60px] sm:top-[50px] sm:text-[100px] ${
            style.secondaryTextColor
          } ${
            slide === slideIndex && "animate-fadeInLeft animation-delay-1000"
          } `}
        >
          {value.namaWanita}
        </div>

        <div
          className={`relative w-full text-center top-[200px] text-[30px] sm:top-[150px] font-montserrat sm:text-[50px] ${
            style.secondaryTextColor
          } ${
            slide === slideIndex && "animate-fadeInDown animation-delay-1500"
          } `}
        >
          {value.teksTanggalDepan}
        </div>
      </div>
    </div>
  );
}

export default LayoutCoverThemeTwo;
