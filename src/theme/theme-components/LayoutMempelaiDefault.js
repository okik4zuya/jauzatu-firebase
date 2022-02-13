import React from "react";

function LayoutMempelaiDefault({ slideIndex, value, slide, style }) {
  return (
    <div
      className={`slide-mempelai absolute top-0 bottom-0 right-0 left-0 px-10 ${
        slide !== slideIndex ? "animate-fadeOut" : ""
      }`}
    >
      <div
        className={`content-wrapper relative w-full px-4 ${
          window.screen.height > 700 ? "top-[17vh]" : "top-[10vh]"
        } h-[60vh] `}
      >
        <div
          className={`relative  ${
            slide === slideIndex && "animate-fadeInUp animation-delay-500"
          } `}
        >
          <img
            className='w-3/4 mx-auto'
            src='https://www.freepnglogos.com/uploads/bismillah-png/bismillahirrahmanirrahim-lahiask-12.png'
            alt=''
          />
        </div>
        <div
          className={`relative ${style.paragraf} ${
            slide === slideIndex && "animate-fadeInUp animation-delay-1000"
          }`}
        >
          {value.teksSalamPembuka}
        </div>
        <div
          className={`relative top-[5px] ${style.paragraf} ${
            slide === slideIndex && "animate-fadeInUp animation-delay-1500"
          }`}
        >
          {value.teksPendahuluan}
        </div>
        <div
          className={`relative  top-[10px] ${style.namaMempelai} ${
            slide === slideIndex && "animate-fadeInDown animation-delay-2000"
          }`}
        >
          {value.namaLengkapPria}
        </div>
        <div
          className={`relative top-[10px] ${style.paragraf} ${
            slide === slideIndex && "animate-fadeInUp animation-delay-2000"
          }`}
        >
          {value.teksOrangTuaPria}
        </div>
        <div
          className={`relative top-[10px] ${style.namaMempelai} ${
            slide === slideIndex && "animate-zoomIn animation-delay-2500"
          }`}
        >
          &
        </div>
        <div
          className={`relative  top-[10px] ${style.namaMempelai} ${
            slide === slideIndex && "animate-fadeInDown animation-delay-3000"
          }`}
        >
          {value.namaLengkapWanita}
        </div>
        <div
          className={`relative top-[10px] ${style.paragraf} ${
            slide === slideIndex && "animate-fadeInUp animation-delay-3000"
          }`}
        >
          {value.teksOrangTuaWanita}
        </div>
      </div>
    </div>
  );
}

export default LayoutMempelaiDefault;
