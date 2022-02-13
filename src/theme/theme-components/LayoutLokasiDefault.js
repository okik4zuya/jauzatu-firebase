import React from "react";

function LayoutLokasiDefault({ slideIndex, value, slide, style }) {
  return (
    <div
      className={`slide-lokasi absolute top-0 bottom-0 right-0 left-0 px-10 ${
        slide !== slideIndex ? "animate-fadeOut" : ""
      }`}
    >
      <div
        className={`content-wrapper relative w-full px-4 ${
          window.screen.height > 700 ? "top-[16vh]" : "top-[10vh]"
        } h-[60vh] `}
      >
        <div
          className={`relative top-[0px] ${style.judul}
              ${
                slide === slideIndex && "animate-fadeInUp animation-delay-500"
              } `}
        >
          Lokasi
        </div>
        <div
          className={`relative top-[20px] mx-auto h-[230px] w-[230px] sm:h-[400px] sm:w-[400px] z-[100] ${
            slide === slideIndex && "animate-zoomIn animation-delay-1500"
          }`}
        >
          <iframe
            className='rounded-xl shadow-lg '
            width={window.screen.width < 640 ? "230" : "400"}
            height={window.screen.width < 640 ? "230" : "400"}
            id='gmap_canvas'
            src={value.iFrameGoogleMapsUrl}
            frameBorder='0'
            scrolling='no'
            marginHeight='0'
            marginWidth='0'
          ></iframe>
        </div>
        <div
          className={`relative top-[70px] ${style.paragraf}
              ${
                slide === slideIndex && "animate-fadeInUp animation-delay-2000"
              } `}
        >
          {value.teksTempatAkad}
        </div>
        <div
          className={`relative text-center top-[100px] z-[100] ${
            slide === slideIndex && "animate-fadeInUp animation-delay-2500"
          }`}
        >
          <div className={`w-[200px] mx-auto ${style.button} `}>
            <a className={` `} href={value.linkGoogleMaps} target={"_blank"}>
              Buka Google Maps
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LayoutLokasiDefault;
