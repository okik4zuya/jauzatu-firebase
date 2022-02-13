import React from "react";

function LayoutAcaraDefault({ slideIndex, value, slide, style }) {
  return (
    <div
      className={`slide-acara absolute top-0 bottom-0 right-0 left-0 px-10 ${
        slide !== slideIndex ? "animate-fadeOut" : ""
      }`}
    >
      <div
        className={`content-wrapper relative w-full px-4 ${
          window.screen.height > 700 ? "top-[16vh]" : "top-[10vh]"
        } h-[60vh] `}
      >
        <div
          className={`relative ${
            style.secondaryTextColor
          } font-montserrat font-semibold text-md text-center
              ${
                slide === slideIndex && "animate-fadeInUp animation-delay-1000"
              } `}
        >
          {value.teksBulan.toUpperCase()}
        </div>
        <div className='relative  '>
          <div
            className={`relative w-[60px] mx-auto  text-center text-[30px] font-montserrat font-bold  ${
              style.secondaryTextColor
            }  ${
              slide === slideIndex && "animate-fadeInUp animation-delay-2000"
            } 
              `}
          >
            <div
              className={`absolute top-0 left-0 bottom-0 w-px ${style.secondaryBgColor} `}
            ></div>
            <div>{value.teksTanggalAkad}</div>
            <div
              className={`absolute top-0 right-0 bottom-0 w-px ${style.secondaryBgColor} `}
            ></div>
          </div>
          <div
            className={`absolute ${
              style.secondaryTextColor
            } top-[calc(50%-13px)] right-[calc(50%+40px)] text-lg  font-montserrat ${
              slide === slideIndex && "animate-fadeInRight animation-delay-2000"
            }`}
          >
            {value.teksHariAkad.toUpperCase()}
          </div>

          <div
            className={`absolute ${
              style.secondaryTextColor
            } top-[calc(50%-13px)] left-[calc(50%+40px)] text-lg font-montserrat ${
              slide === slideIndex && "animate-fadeInLeft animation-delay-2000"
            }`}
          >
            {value.teksTahun}
          </div>
        </div>

        <div
          className={`relative top-[20px] ${style.judul} ${
            slide === slideIndex && "animate-fadeInDown animation-delay-3000"
          }`}
        >
          Akad Nikah
        </div>
        <div
          className={`relative top-[20px] ${style.paragraf} ${
            slide === slideIndex && "animate-fadeInUp animation-delay-3500"
          }`}
        >
          Pukul : {value.teksJamAkad}
        </div>
        <div
          className={`relative top-[20px] ${style.paragraf} ${
            slide === slideIndex && "animate-fadeInUp animation-delay-3500"
          }`}
        >
          Tempat : {value.teksTempatAkad}
        </div>

        <div
          className={`relative top-[50px] ${style.judul} ${
            slide === slideIndex && "animate-fadeInDown animation-delay-4000"
          }`}
        >
          Resepsi
        </div>
        <div
          className={`relative top-[50px] ${style.paragraf} ${
            slide === slideIndex && "animate-fadeInUp animation-delay-4500"
          }`}
        >
          Pukul : {value.teksJamResepsi}
        </div>
        <div
          className={`relative top-[50px] ${style.paragraf} ${
            slide === slideIndex && "animate-fadeInUp animation-delay-4500"
          }`}
        >
          Tempat : {value.teksTempatResepsi}
        </div>
      </div>
    </div>
  );
}

export default LayoutAcaraDefault;
