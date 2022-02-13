import React from "react";

function LayoutCoverThemeOne({ slideIndex, value, slide, style }) {
  return (
    <div
      className={`slide-cover absolute top-0 bottom-0 right-0 left-0 ${
        slide !== slideIndex ? "animate-fadeOut" : ""
      }`}
    >
      <div
        className={`relative font-bold  text-center font-montserrat text-3xl top-[120px] sm:text-5xl sm:top-[180px] ${
          slide === slideIndex && "animate-fadeInUp animation-delay-500"
        } `}
      >
        The Wedding of
      </div>
      <div
        className={`relative text-center top-[150px] right-[50px] font-greatVibes text-[60px] sm:top-[220px] sm:text-[100px] sm:right-[100px] ${
          slide === slideIndex && "animate-fadeInRight animation-delay-1000"
        } `}
      >
        {value.namaPria}
      </div>
      <div
        className={`relative w-full text-center top-[120px] font-greatVibes text-[60px] sm:top-[150px] sm:text-[120px] ${
          slide === slideIndex && "animate-fadeInDown animation-delay-1000"
        } `}
      >
        &
      </div>
      <div
        className={`relative text-center top-[100px] left-[50px] font-greatVibes text-[60px] sm:top-[100px] sm:text-[100px] ${
          slide === slideIndex && "animate-fadeInLeft animation-delay-1000"
        } `}
      >
        {value.namaWanita}
      </div>

      <div
        className={`relative w-full text-center top-[200px] sm:top-[150px] sm:text-[30px] font-montserrat ${
          slide === slideIndex && "animate-fadeInUp animation-delay-1500"
        } `}
      >
        SAVE THE DATE
      </div>

      <div
        className={`relative w-full text-center top-[200px] sm:top-[150px] font-montserrat sm:text-[50px] ${
          slide === slideIndex && "animate-fadeInDown animation-delay-1500"
        } `}
      >
        {value.teksTanggalDepan}
      </div>
    </div>
  );
}

export default LayoutCoverThemeOne;
