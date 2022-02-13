import React from "react";

function LayoutPenutupDefault({ value, slide, style }) {
  return (
    <div
      className={`slide-penutup absolute top-0 bottom-0 right-0 left-0 px-10 ${
        slide !== 6 ? "animate-fadeOut" : ""
      }`}
    >
      <div
        className={`content-wrapper relative w-full px-4 ${
          window.screen.height > 700 ? "top-[16vh]" : "top-[10vh]"
        } h-[60vh] `}
      >
        <div
          className={`relative  top-[0px] ${style.paragraf} ${
            slide === 6 && "animate-fadeInUp animation-delay-500"
          }`}
        >
          {value.teksPenutup}
        </div>
        <div
          className={`relative  top-[20px] ${style.ayat} ${
            slide === 6 && "animate-fadeInUp animation-delay-1500"
          }`}
        >
          {value.teksAyat}
        </div>
        <div
          className={`relative  top-[30px] ${style.paragraf} ${
            slide === 6 && "animate-fadeInUp animation-delay-2500"
          }`}
        >
          <em>{value.teksSalamPenutup}</em>
        </div>
        <div
          className={`relative  top-[40px] ${style.paragraf} ${
            slide === 6 && "animate-fadeInUp animation-delay-3000"
          }`}
        >
          {value.teksKamiYangBerbahagia}
        </div>
        <div
          className={`relative  top-[40px] ${style.namaMempelai} ${
            slide === 6 && "animate-fadeInUp animation-delay-3500"
          }`}
        >
          {value.namaWanita} & {value.namaPria}
        </div>

        <div
          className={`relative  top-[40px] ${style.paragraf} ${
            slide === 6 && "animate-fadeInUp animation-delay-4000"
          }`}
        >
          {value.teksKelPria}
        </div>
        <div
          className={`relative  top-[40px] ${style.paragraf} ${
            slide === 6 && "animate-fadeInUp animation-delay-4500"
          }`}
        >
          {value.teksKelWanita}
        </div>
      </div>
    </div>
  );
}

export default LayoutPenutupDefault;
