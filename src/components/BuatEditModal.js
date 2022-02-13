import React, { useState } from "react";

import {
  addDoc,
  collection,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./loginModal.css";
import { unhover } from "@testing-library/user-event/dist/hover";

function BuatEditModal({ setOpenModal }) {
  let navigate = useNavigate();
  const [activeEdit, setActiveEdit] = useState(true);
  const [openSelamat, setOpenSelamat] = useState(false);
  const [created, setCreated] = useState(false);
  const [authCode, setAuthCode] = useState("");
  const [prosesBuat, setProsesBuat] = useState(false);

  //useState Object
  const [value, setValue] = useState({
    // Data Konten - Slug dan Tema
    slug: "",
    tema: "",

    // Data Konten - Data Mempelai
    namaLengkapPria: "",
    namaPria: "",
    namaLengkapWanita: "",
    namaWanita: "",

    // Data Konten - Data Acara
    waktuAkad: "",
    waktuResepsi: "",
    tempatAkad: "",
    tempatResepsi: "",
    linkGoogleMaps: "",

    // Data Konten - Teks
    teksSalamPembuka: "",
    teksPendahuluan: "",
    teksHariTanggalAkad: "",
    teksHariTanggalResepsi: "",
    teksOrangTuaPria: "",
    teksOrangTuaWanita: "",
    teksAyat: "",
    teksPenutup: "",
    teksSalamPenutup: "",
    teksKamiYangBerbahagia: "",
    teksKelPria: "",
    teksKelWanita: "",
  });

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

    // Data Konten - Teks
    teksSalamPembuka,
    teksPendahuluan,
    teksHariTanggalAkad,
    teksHariTanggalResepsi,
    teksOrangTuaPria,
    teksOrangTuaWanita,
    teksAyat,
    teksPenutup,
    teksSalamPenutup,
    teksKamiYangBerbahagia,
    teksKelPria,
    teksKelWanita,
  } = value;

  // Handler Function "Buat Undangan"
  const invitationsCollectionRef = collection(db, "invitations");

  // Random generator
  const allCapsAlpha = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const allLowerAlpha = [..."abcdefghijklmnopqrstuvwxyz"];
  const allNumbers = [..."0123456789"];
  const base = [...allCapsAlpha, ...allNumbers, ...allLowerAlpha];
  const generator = (base, len) => {
    return [...Array(len)]
      .map((i) => base[(Math.random() * base.length) | 0])
      .join("");
  };
  const authCodeGenerator = () => {
    if (authCode == "") {
      setAuthCode(generator(base, 36));
    } else {
      setAuthCode(authCode);
    }
  };

  // Handle Function Buat Undangan
  const buatUndangan = async () => {
    setProsesBuat(true);
    await addDoc(invitationsCollectionRef, {
      created,
      slug: slug,
      authCode: authCode,
      tema: "Tema 01",
      // Data Konten - Data Mempelai
      namaLengkapPria: "Omar Abdurahman",
      namaPria: "Omar",
      namaLengkapWanita: "Hana Aisyah",
      namaWanita: "Hana",

      // Data Konten - Data Acara
      waktuAkad: "Sabtu, 20 Februari 2022",
      waktuResepsi: "Sabtu, 20 Februari 2022",
      tempatAkad: "Masjid Pusdai",
      tempatResepsi: "Masjid Pusdai",
      linkGoogleMaps: "https://google.maps",

      // Data Konten - Teks
      teksSalamPembuka: "Assalamu'alaikum Wr. Wb.",
      teksPendahuluan:
        "Dengan memohon rahmat Allah swt, insyaAllah kami akan menyelenggarakan akad nikah:",
      teksHariTanggalAkad: "Sabtu, 20 Februari 2022",
      teksHariTanggalResepsi: "Sabtu, 20 Februari 2022",
      teksOrangTuaPria: "Putra ke-2 dari Bapak Ahmad dan Ibu Mahmudah",
      teksOrangTuaWanita: "Putra ke-3 dari Bapak Amin dan Ibu Aminah",
      teksAyat:
        '"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang berpikir. QS. Ar-Rum: 21"',
      teksPenutup:
        "Merupakan seuatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/I dapat berkenan hadir dan memberikan doa restu dalam acara pernikahan kami",
      teksSalamPenutup: "Wassalamu'alaikum Wr. Wb.",
      teksKamiYangBerbahagia: "Omar & Hana",
      teksKelPria: "Kel. Bpk. Ahmad dan Ibu Mahmudah",
      teksKelWanita: "Kel. Bpk. Amin dan Ibu Aminah",
    });
    setOpenSelamat(true);
    setCreated(true);
  };
  console.log(prosesBuat);

  //Handle Function Edit Undangan
  const editUndangan = () => {};

  return (
    <div className='w-full h-screen absolute top-0 bottom-0 right-0 left-0 flex bg-black/40 justify-center items-center z-20 '>
      <div className='relative  w-full sm:w-96 h-3/4 rounded-none bg-gray-50 shadow-md flex flex-col mx-4 p-8 mb-20 z-10 sm:mt-16 mt-24'>
        <div
          onClick={() => setOpenModal(false)}
          className=' text-4xl cursor-pointer flex absolute right-2 top-2'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>

        <div className={`buatedit ${openSelamat ? "hidden" : ""}`}>
          <div className='grid grid-cols-2 -mb-4'>
            <div
              className='relative col-span-1 bg-gray-200 text-center py-3 text-lg cursor-pointer font-semibold '
              onClick={() => {
                setActiveEdit(true);
                setProsesBuat(false);
              }}
            >
              Buat
              <div
                className={`${
                  activeEdit ? "" : "hidden"
                }  absolute bottom-0 right-0 left-0 underline bg-yellow-700 border-2 border-yellow-700`}
              ></div>
            </div>
            <div
              className='relative col-span-1 bg-gray-200 text-center py-3 text-lg cursor-pointer font-semibold'
              onClick={() => {
                setActiveEdit(false);
              }}
            >
              Edit
              <div
                className={`${
                  activeEdit ? "hidden" : ""
                }  absolute bottom-0 right-0 left-0 underline bg-yellow-700 border-2 border-yellow-700`}
              ></div>
            </div>
          </div>
          <div className='bg-gray-100 h-96'>
            {/*----------------Awal Tab 1-------------------*/}
            {/*--------------\BUAT UNDANGAN/-----------------*/}
            <div className={`single-tab mt-4 ${activeEdit ? "" : "hidden"}`}>
              <div className={`content-tab-1 `}>
                <div className='input-container '>
                  <p className='label'>Slug</p>
                  <input
                    type='text'
                    placeholder='contoh: cintarangga'
                    className='input '
                    onChange={(event) => {
                      setValue({ ...value, slug: event.target.value });
                    }}
                  />
                </div>
                <div
                  className={`btn-wrapper ${authCode !== "" ? "hidden" : ""}`}
                >
                  <button
                    onClick={authCodeGenerator}
                    className='bg-yellow-600 rounded-md px-3 py-2 mt-3 text-gray-100 font-bold'
                  >
                    Generate Kode Otentifikasi
                  </button>
                </div>

                <div
                  className={`input-container ${
                    authCode !== "" ? "" : "hidden"
                  }`}
                >
                  <p className='label'>Kode otentifikasi anda:</p>
                  <div className='grid grid-cols-10 p-0 '>
                    <textarea
                      type='select'
                      placeholder='20 karakter alfanumerik'
                      className='input w-5/6 col-span-8'
                      value={authCode}
                      onChange={(event) => {
                        setValue({ ...value, tema: event.target.value });
                      }}
                      disabled
                    />
                    <div className='col-span-2'>
                      <button
                        className='bg-yellow-600 rounded-md
                      -ml-6 py-2 mt-3 text-gray-100 font-bold w-16 text-center'
                      >
                        Copy
                      </button>
                    </div>
                  </div>
                </div>

                <div className='btn-wrapper'>
                  <button
                    onClick={buatUndangan}
                    className={`btn disabled:bg-gray-400                  disabled:text-gray-100 ${
                      (slug == "") | (authCode == "") ? "" : "hidden"
                    }`}
                    disabled
                  >
                    {prosesBuat ? "membuat..." : "Buat Undangan"}
                  </button>
                  <button
                    onClick={buatUndangan}
                    className={`btn disabled:bg-gray-400                  disabled:text-gray-100 ${
                      slug !== "" && authCode !== "" ? "" : "hidden"
                    }`}
                  >
                    Buat Undangan
                  </button>
                </div>
              </div>
            </div>
            {/*----------------/BUAT UNDANGAN\---------------*/}
            {/*--------------Akhir Tab 1-----------------*/}

            {/*----------------Awal Tab 2-------------------*/}
            {/*--------------\EDIT UNDANGAN/-----------------*/}
            <div className={`single-tab mt-4 ${activeEdit ? "hidden" : ""}`}>
              <div className={`content-tab-1 `}>
                <div className='input-container '>
                  <p className='label'>Slug</p>
                  <input
                    id='slug-edit'
                    type='text'
                    placeholder='contoh: cintarangga'
                    className='input '
                    value={slug}
                    onChange={(event) => {
                      setValue({ ...value, slug: event.target.value });
                    }}
                  />
                </div>
                <div className='input-container'>
                  <p className='label'>Kode Otentifikasi</p>
                  <textarea
                    id='authcode-edit'
                    type='select'
                    placeholder='36 karakter alfanumerik'
                    value={authCode}
                    className='input '
                    onChange={(event) => {
                      setValue({ ...value, tema: event.target.value });
                    }}
                  />
                </div>
                <div className='btn-wrapper'>
                  <button
                    onClick={editUndangan}
                    className='bg-yellow-600 rounded-md px-3 py-2 mt-3 text-gray-100 font-bold'
                  >
                    Edit Undangan
                  </button>
                </div>
              </div>
            </div>
            {/*----------------/EDIT UNDANGAN\---------------*/}
            {/*--------------Akhir Tab 2-----------------*/}
          </div>
        </div>

        {/*----------------/SELAMAT\---------------*/}
        {/*--------------AWal SELAMAT-----------------*/}
        <div className={`selamat p-4 ${openSelamat ? "" : "hidden"}`}>
          <div className='text-xl sm:text-sm bg-yellow-100 rounded p-4'>
            <div className='text-center'>
              <em>
                <strong>Selamat!!!</strong> anda telah berhasil membuat undangan
                anda. Silahkan catat data "slug" dan "kode otentifikasi"
                berikut.
              </em>
            </div>
            <div className=' bg-gray-100 p-2 break-words  rounded-lg mt-2'>
              <strong>Slug: {slug}</strong>
              <br />
              <strong>Kode otentifikasi: {authCode}</strong>
            </div>
            <div className='btn-wrapper'>
              <button
                className='bg-yellow-600 rounded-md
                      -ml-6 px-2 py-1 border-orange-700py-1 mt-2 mb-2 text-gray-100 text-md  text-center'
              >
                Copy
              </button>
            </div>
            <div className='text-center'>
              <em>
                Keduanya akan anda perlukan ketika akan mengedit undangan anda
                di kemudian hari.
                <br />
                Klik tombol di bawah ini untuk melanjutkan mengedit undangan
                anda.
              </em>
            </div>
          </div>
          <div className='btn-wrapper'>
            <button
              onClick={() => {
                setOpenSelamat(false);
                setActiveEdit(false);
              }}
              className='bg-yellow-600 rounded-md
                       px-4 py-2 mt-4 mb-2 text-gray-100 w-full text-center text-md font-bold'
            >
              Lanjut Edit Undangan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BuatEditModal;
