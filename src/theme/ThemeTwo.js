import React, { useState, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
//Import komponen tema
import LayoutCoverThemeTwo from "./theme-components/LayoutCoverThemeTwo";
import LayoutMempelaiDefault from "./theme-components/LayoutMempelaiDefault";
import LayoutAcaraDefault from "./theme-components/LayoutAcaraDefault";
import LayoutLokasiDefault from "./theme-components/LayoutLokasiDefault";
import LayoutProtokolDefault from "./theme-components/LayoutProtokolDefault";
import LayoutPenutupDefault from "./theme-components/LayoutPenutupDefault";
import DefaultThumbnails from "./theme-components/DefaultThumbnails";
import DefaultModalCover from "./theme-components/DefaultModalCover";
import ParticlesDefault from "./theme-components/ParticlesDefault";

// BackgroundGerak ThemeOne
function BackgroundGerak({ slide, slideIndex, style, hiddenComponent }) {
  return (
    <div
      className={`absolute top-0 right-0 bottom-0 left-0 z-10 w-screen sm:w-[640px]  h-screen mx-auto overflow-hidden ${
        slide !== slideIndex && "animate-fadeOut"
      } `}
    >
      <div
        className={`kiri absolute w-[2px] top-[20px] left-[20px] bottom-[100px] ${
          style.secondaryBgColor
        }  ${
          slide === slideIndex && "animate-fadeInDown animation-delay-1000"
        }`}
      ></div>
      <div
        className={`atas absolute h-[2px] top-[20px] left-[20px] right-[20px] ${
          style.secondaryBgColor
        }  ${
          slide === slideIndex && "animate-fadeInLeft animation-delay-1000"
        }`}
      ></div>
      <div
        className={`kanan ${
          style.secondaryBgColor
        } absolute w-[2px] top-[20px] right-[20px] bottom-[100px]   ${
          slide === slideIndex && "animate-fadeInUp animation-delay-1000"
        }`}
      ></div>
      <div
        className={`bawah absolute h-[2px] bottom-[100px] left-[20px] right-[20px] ${
          style.secondaryBgColor
        }  ${
          slide === slideIndex && "animate-fadeInRight animation-delay-1000"
        }`}
      ></div>
    </div>
  );
}

export default function ThemeTwo({ value }) {
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
  console.log(value);

  //Get URL Parameter
  const [invited, setInvited] = useState("");
  const [alamat, setAlamat] = useState("");
  const [sesi, setSesi] = useState("");
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    setInvited(queryParams.get("to"));
    setAlamat(queryParams.get("alamat"));
    setSesi(queryParams.get("sesi"));
  }, []);

  // Audio Handler
  const [audio] = useState(
    new Audio(
      "https://firebasestorage.googleapis.com/v0/b/jauzatu-c2ed1.appspot.com/o/Maher%20Zain%20-%2005%20Baraka%20Allah%20Lakuma.mp3?alt=media&token=e38fe981-143c-4cd0-b8c0-9320c20db86a"
    )
  );
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  // Slide & Style State
  const [slide, setSlide] = useState(1);
  const [font, setFont] = useState({
    text: "font-montserrat leading-5",
    title: "font-philosopher",
    art: "font-greatVibes",
  });
  const [color, setColor] = useState({
    primary: "#DDDDDD",
    secondary: "#400000",
    tertiary: "#400000",
    primaryBg: "bg-[#FFFFFF]",
    secondaryBg: "bg-[#000000]",
    tertiaryBg: "bg-[#FF5706]",
    primaryText: "text-[#FFFFFF]",
    secondaryText: "text-[#000000]",
    tertiaryText: "text-[#400000]",
  });
  const [style, setStyle] = useState({
    primaryColor: `${color.primary}`,
    secondaryColor: `${color.secondary}`,
    tertiaryColor: `${color.tertiary}`,
    primaryBgColor: `${color.primaryBg}`,
    secondaryBgColor: `${color.secondaryBg}`,
    tertiaryBgColor: `${color.tertiaryBg}`,
    primaryTextColor: `${color.primaryText}`,
    secondaryTextColor: `${color.secondaryText}`,
    tertiaryTextColor: `${color.tertiaryText}`,
    fontText: `${font.text}`,
    fontTitle: `${font.title}`,
    fontArt: `${font.art}`,
    paragraf: `${font.text} ${color.secondaryText} text-center text-[calc(10px+0.6vh)] sm:px-16 `,
    judul: `text-center ${color.secondaryText} ${font.title} font-semibold text-[calc(12px+2vh)]`,
    ayat: `${font.text} ${color.secondaryText} italic text-center text-[calc(9px+0.6vh)] leading-5 sm:px-10`,
    namaMempelai: `text-center ${color.secondaryText} ${font.art} text-[calc(20px+1.6vh)] `,
    thumbActive: ` ${color.secondaryBg} ${font.text} ${color.primaryText}`,
    thumbNonActive: `${color.primaryBg} ${color.secondaryText} font-montserrat`,
    button: `${color.secondaryBg} ${color.primaryText}  hover:translate-y-1  transform px-4 py-2 rounded-lg font-montserrat sm:text-xl sm:px-6 sm:py-3 animate-beat`,
  });

  /* Edit tema mulai dari sini*/
  return (
    <div className={` ${style.primaryBgColor}  relative`}>
      {/*--- Modal Cover ---*/}
      <DefaultModalCover
        invited={invited}
        alamat={alamat}
        sesi={sesi}
        style={style}
        setPlaying={setPlaying}
      />
      {/*--- Modal Cover---*/}
      {/*--- Awal Thumbnails ---*/}
      <DefaultThumbnails slide={slide} setSlide={setSlide} style={style} />
      {/*--- Akhir Thumbnails ---*/}

      {/*--- Kontainer Utama---*/}
      <div className='relative h-screen w-full sm:w-[640px] mx-auto bg-white overflow-hidden shadow-xl bg-white/70 '>
        {/*--- Awal Background Statik ---*/}
        <div>
          <div
            className={`kanan-atas ${style.primaryBgColor} absolute right-0 top-0 bottom-0 left-0   `}
          ></div>
          <div
            className={`absolute top-0 right-0 bottom-0 left-0  w-screen sm:w-[640px]  h-screen mx-auto ${
              slide !== 1 ? "animate-fadeOut" : ""
            }`}
          >
            <ParticlesDefault className={``} style={style}></ParticlesDefault>
          </div>
        </div>
        {/*--- Akhir Background Statik ---*/}

        {/*--- Awal Audio ---*/}
        <div
          className={`absolute w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] top-[10px] right-[10px] rounded-full ${style.secondaryBgColor} animate-beat z-[40] cursor-pointer`}
          onClick={() => (playing ? setPlaying(false) : setPlaying(true))}
        >
          <div
            className={`relative w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] ${style.primaryTextColor}`}
          >
            <div className='absolute  transform top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 '>
              {playing ? (
                <FaPause size={window.screen.width < 640 ? 20 : 30} />
              ) : (
                <FaPlay size={window.screen.width < 640 ? 20 : 30} />
              )}
            </div>
          </div>
        </div>
        {/*--- Akhir Audio ---*/}

        {/*--- Awal Background Gerak ---*/}
        <div className='absolute top-0 bottom-0 '>
          <BackgroundGerak
            slide={slide}
            slideIndex={1}
            style={style}
            hiddenComponent={true}
          />
          <BackgroundGerak slide={slide} slideIndex={2} style={style} />
          <BackgroundGerak slide={slide} slideIndex={3} style={style} />
          <BackgroundGerak slide={slide} slideIndex={4} style={style} />
          <BackgroundGerak slide={slide} slideIndex={5} style={style} />
          <BackgroundGerak slide={slide} slideIndex={6} style={style} />
        </div>
        {/*--- Akhir Background Gerak ---*/}

        {/*--- Awal Konten Layout ---*/}
        <div className='relative z-30'>
          <LayoutCoverThemeTwo
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
