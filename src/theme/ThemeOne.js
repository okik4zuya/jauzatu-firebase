import React, { useState, useEffect } from "react";
//Import komponen tema
import LayoutCoverThemeOne from "./theme-components/LayoutCoverThemeOne";
import LayoutMempelaiDefault from "./theme-components/LayoutMempelaiDefault";
import LayoutAcaraDefault from "./theme-components/LayoutAcaraDefault";
import LayoutLokasiDefault from "./theme-components/LayoutLokasiDefault";
import LayoutProtokolDefault from "./theme-components/LayoutProtokolDefault";
import LayoutPenutupDefault from "./theme-components/LayoutPenutupDefault";
import DefaultThumbnails from "./theme-components/DefaultThumbnails";
import DefaultModalCover from "./theme-components/DefaultModalCover";
import ParticlesDefault from "./theme-components/ParticlesDefault";

// BackgroundGerak ThemeOne
function BackgroundGerak({ slide, slideIndex, hiddenComponent }) {
  return (
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 z-10 w-screen sm:w-[640px]  h-screen mx-auto overflow-hidden z-30 ${
        slide !== slideIndex && "animate-fadeOut"
      } `}
    >
      <div
        className={`kiri-atas absolute w-[250px] sm:w-[450px] top-[-10px] left-[-100px] sm:left-[-180px] sm:top-[-20px]  ${
          slide === slideIndex && "animate-fadeInLeft animation-delay-1000"
        }`}
      >
        <img src='https://i.ibb.co/qF7wDSF/tema01-aset01.png' alt='' />
      </div>
      <div
        className={`kanan-bawah 
        absolute w-[250px] sm:w-[400px] bottom-[60px] sm:bottom-[60px]  right-[-70px] sm:right-[-80px]  ${
          slide === slideIndex && "animate-fadeInRight animation-delay-1000"
        }`}
      >
        <img src='https://i.ibb.co/1JpPKTH/tema01-aset04.png' alt='' />
      </div>
      <div
        className={`kiri-bawah absolute w-[200px] sm:w-[350px] bottom-[-50px] sm:bottom-[-100px] left-[-70px] sm:left-[-130px]  ${
          slide === slideIndex && "animate-fadeInLeft animation-delay-1000"
        }`}
      >
        <img src='https://i.ibb.co/dtG5nYV/tema01-aset02.png' alt='' />
      </div>
      <div
        className={`kanan-atas absolute w-[250px] sm:w-[450px] top-[0px] sm:top-[-20px] right-[-120px] sm:right-[-200px]  ${
          slide === slideIndex && "animate-fadeInRight animation-delay-1000"
        }`}
      >
        <img src='https://i.ibb.co/1rnbmyy/tema01-aet03.png' alt='' />
      </div>
      <div
        className={`absolute top-[20px] right-[20px] bottom-[90px] left-[20px] sm:top-[60px] sm:left-[60px] sm:bottom-[120px] sm:right-[60px] bg-white/70 rounded-xl  ${
          hiddenComponent && "hidden"
        } ${slide === slideIndex && slide !== 1 ? "animate-zoomIn" : ""} `}
      ></div>
    </div>
  );
}

export default function ThemeOne({ value }) {
  //Declaring useState object props as child prop of 'value'
  const {
    // Data Konten - Slug dan Tema
    slug,
    tema,

    // Data Konten - Data Mempelai
    namaLengkapPria,
    namaPria,
    namaLengkapWanita,
    namaWanita,

    // Data Konten - Data Acara
    waktuAkad,
    waktuResepsi,
    tempatAkad,
    tempatResepsi,
    linkGoogleMaps,
    iFrameGoogleMapsUrl,

    // Data Konten - Teks
    teksTanggalDepan,
    teksSalamPembuka,
    teksPendahuluan,
    teksHariAkad,
    teksTanggalAkad,
    teksJamAkad,
    teksHariResepsi,
    teksTanggalResepsi,
    teksJamResepsi,
    teksBulan,
    teksTahun,
    teksTempatAkad,
    teksTempatResepsi,
    teksOrangTuaPria,
    teksOrangTuaWanita,
    teksAyat,
    teksPenutup,
    teksSalamPenutup,
    teksKamiYangBerbahagia,
    teksKelPria,
    teksKelWanita,
  } = value;

  //Get URL Parameter
  const [invited, setInvited] = useState("");
  const [alamat, setAlamat] = useState("");
  const [sesi, setSesi] = useState("");
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setInvited(queryParams.get("to"));
    setAlamat(queryParams.get("alamat"));
    setSesi(queryParams.get("sesi"));
  });

  // Slide & Style State
  const [slide, setSlide] = useState(1);
  const [style, setStyle] = useState({
    paragraf:
      "font-montserrat text-center text-[calc(10px+0.6vh)] leading-5   sm:px-16 ",
    judul: "text-center  font-philosopher font-semibold text-[calc(12px+2vh)] ",
    ayat: "font-montserrat  italic text-center text-[calc(9px+0.6vh)] leading-5 sm:px-10 ",
    namaMempelai: "text-center font-greatVibes text-[calc(20px+1.6vh)]  ",
    thumbActive: "bg-[#AB4F3B] text-white font-montserrat",
    thumbNonActive: "bg-[#F8F2D8] text-[#AB4F3B] font-montserrat",
    button:
      "bg-[#AB4F3B] text-white hover:bg-[#AB4F3B]/60 hover:translate-y-1 active:bg-[#AB4F3B]/60 transform px-4 py-2 rounded-lg font-montserrat sm:text-xl sm:px-6 sm:py-3 animate-beat",
  });

  /* Edit tema mulai dari sini*/
  return (
    <div className='bg-[#F8F2D8] relative'>
      {/*--- Modal Cover ---*/}
      <DefaultModalCover
        invited={invited}
        alamat={alamat}
        sesi={sesi}
        style={style}
      />
      {/*--- Modal Cover---*/}
      {/*--- Awal Thumbnails ---*/}
      <DefaultThumbnails slide={slide} setSlide={setSlide} style={style} />
      {/*--- Akhir Thumbnails ---*/}

      {/*--- Kontainer Utama---*/}
      <div className='relative h-screen w-full sm:w-[640px] mx-auto bg-white overflow-hidden shadow-xl bg-white/70 '>
        {/*--- Awal Background Statik ---*/}
        <div>
          <div className='kanan-atas absolute right-0 top-0 bottom-0 left-0  z-10 '>
            <img
              className='object-cover h-screen w-full'
              //src='https://i.ibb.co/QKz8mtD/tema01-background.png'
              src='https://firebasestorage.googleapis.com/v0/b/jauzatu-c2ed1.appspot.com/o/tema01-background.png?alt=media&token=352a0967-a7de-403d-8819-1f6a38196a39'
              alt=''
            />
          </div>
        </div>
        {/*--- Akhir Background Statik ---*/}

        {/*--- Awal Background Gerak ---*/}
        <div className='absolute top-0 bottom-0 '>
          <BackgroundGerak
            slide={slide}
            slideIndex={1}
            hiddenComponent={true}
          />
          <BackgroundGerak slide={slide} slideIndex={2} />
          <BackgroundGerak slide={slide} slideIndex={3} />
          <BackgroundGerak slide={slide} slideIndex={4} />
          <BackgroundGerak slide={slide} slideIndex={5} />
          <BackgroundGerak slide={slide} slideIndex={6} />
        </div>
        {/*--- Akhir Background Gerak ---*/}

        {/*--- Awal Konten Layout ---*/}
        <div className='relative z-30'>
          <LayoutCoverThemeOne
            slideIndex={1}
            value={value}
            slide={slide}
            style={style}
          />
          <LayoutMempelaiDefault
            slideIndex={2}
            value={value}
            slide={slide}
            style={style}
          />
          <LayoutAcaraDefault
            slideIndex={3}
            value={value}
            slide={slide}
            style={style}
          />
          <LayoutLokasiDefault
            slideIndex={4}
            value={value}
            slide={slide}
            style={style}
          />
          <LayoutProtokolDefault
            slideIndex={5}
            value={value}
            slide={slide}
            style={style}
          />
          <LayoutPenutupDefault
            slideIndex={6}
            value={value}
            slide={slide}
            style={style}
          />
        </div>
        {/*--- Akhir Konten Layout ---*/}
      </div>
    </div>
  );
}
