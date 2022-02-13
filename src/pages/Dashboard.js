import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  updateDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import NavbarDashboard from "../components/dashboard/NavbarDashboard";

function Dashboard() {
  const [invitation, setInvitation] = useState([]);
  const [created, setCreated] = useState(true);
  const [authid, setAuthid] = useState("");
  const [authEmail, setAuthEmail] = useState("");

  // useState toggle
  const [toggle, setToggle] = useState({
    tema: true,
    dataMempelai: true,
    dataAcara: true,
    teks: true,
  });

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
  } = value;

  // Checking if user signed in or not
  const observeAuth = getAuth();
  onAuthStateChanged(observeAuth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      setAuthid(uid);
      setAuthEmail(user.email);
      // ...
    } else {
      // User is signed out
      const uid = "signed out";
      setAuthid(uid);
      // ...
    }
  });

  // Handler Function "Buat Undangan"
  const invitationsCollectionRef = collection(db, "invitations");
  let navigate = useNavigate();
  const buatUndangan = async () => {
    await addDoc(invitationsCollectionRef, {
      created,

      //waktuAkad,
      //waktuResepsi,
      //authorid: auth.currentUser.uid,
    });
    navigate("/dashboard");
    setCreated(true);
  };

  // Handler Function "Baca data dari Firebase"
  const url_string = window.location.href;
  const url = new URL(url_string);
  const searchParams = new URLSearchParams(url.search);
  const slugparam = searchParams.get("slug");
  console.log(url);
  console.log(slugparam);

  // Handler Function - Update Data Konten
  // const updateTema = async () => {
  //   await updateDoc(invitationsCollectionRef, {
  //     slug: "cewecowo",
  //     tema: "Tema 10",
  //   });
  //   navigate("/dashboard");
  //   setCreated(true);
  // };

  const updateMempelai = () => {};
  const updateAcara = () => {};
  const updateTeks = () => {};

  // //Console Log

  // console.log(value.slug);
  // console.log(value.tema);
  //console.log(authc);
  //console.log(auth.currentUser.uid);
  //console.log(invitation);
  //console.log(auth.currentUser.uid);

  // console.log(value.namaLengkapPria);
  // console.log(value.namaPria);
  // console.log(value.namaLengkapWanita);
  // console.log(value.namaWanita);
  // console.log(waktuAkad);
  // console.log(waktuResepsi);
  // console.log(tempatAkad);
  // console.log(tempatResepsi);
  // console.log(linkGoogleMaps);
  // console.log(teksSalamPembuka);
  // console.log(teksPendahuluan);
  // console.log(teksHariTanggalAkad);
  // console.log(teksHariTanggalResepsi);
  // console.log(teksOrangTuaPria);
  // console.log(teksOrangTuaWanita);
  // console.log(teksAyat);
  // console.log(teksPenutup);
  // console.log(teksSalamPenutup);

  return (
    <div>
      <div className=''>
        <NavbarDashboard />
      </div>
      {invitation.map((inv) => {
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
        } = inv;
        {
          /*Mulai Edit Dashboard*/
        }
        return (
          <div
            className={`mt-16 px-4 py-4 w-full sm:w-[540px] mx-auto bg-white ${
              created ? "h-full" : "h-full"
            }`}
          >
            <div
              className={`title-container px-4 py-4 mt-2 mb-4 ${
                created ? "" : "hidden"
              }`}
            >
              <div className=''>
                <h1 className='text-xl text-center font-bold'>
                  {created ? "Edit Undangan" : "Buat Undangan"}
                </h1>
              </div>
            </div>
            <div className='tabs-container'>
              {/*----------------Awal Tab 2-------------------*/}
              {/*-------------------\TEMA/---------------------*/}
              <div className={`single-tab mb-4 ${created ? "" : "hidden"}`}>
                <div className='title-tab'>
                  <div className='text-xl mt-1 w-5/6'>Tema</div>
                  <div className=' w-1/6'>
                    <div
                      className='toggler-tab'
                      onClick={
                        toggle.tema
                          ? () => {
                              setToggle({ ...toggle, tema: false });
                            }
                          : () => {
                              setToggle({ ...toggle, tema: true });
                            }
                      }
                    >
                      {toggle.tema ? "+" : "-"}
                    </div>
                  </div>
                </div>
                <div className={`content-tab  ${toggle.tema ? "hidden" : ""}`}>
                  <div className='input-container'>
                    <p className='label'>Slug</p>
                    <input
                      type='text'
                      placeholder='contoh: cintarangga'
                      className='input'
                      onChange={(event) => {
                        setValue({ ...value, slug: event.target.value });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Tema</p>
                    <input
                      type='select'
                      placeholder='Tema 01'
                      className='input '
                      onChange={(event) => {
                        setValue({ ...value, tema: event.target.value });
                      }}
                    />
                  </div>

                  <div className='btn-wrapper'>
                    <button className='btn'>Update</button>
                  </div>
                </div>
              </div>
              {/*-------------------/TEMA\---------------------*/}
              {/*----------------Akhir Tab 2-------------------*/}

              {/*----------------Awal Tab 3-------------------*/}
              {/*----------------\DATA MEMPELAI/-----------------*/}
              <div className={`single-tab mb-4 ${created ? "" : "hidden"}`}>
                <div className='title-tab'>
                  <div className='text-xl mt-1 w-5/6'>Data Mempelai</div>
                  <div className=' w-1/6'>
                    <div
                      className='toggler-tab'
                      onClick={
                        toggle.dataMempelai
                          ? () => {
                              setToggle({ ...toggle, dataMempelai: false });
                            }
                          : () => {
                              setToggle({ ...toggle, dataMempelai: true });
                            }
                      }
                    >
                      {toggle.dataMempelai ? "+" : "-"}
                    </div>
                  </div>
                </div>
                <div
                  className={`content-tab  ${
                    toggle.dataMempelai ? "hidden" : ""
                  }`}
                >
                  <div className='input-container'>
                    <p className='label'>Nama Lengkap Mempelai Pria</p>
                    <input
                      type='text'
                      placeholder='nama lengkap'
                      className='input'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          namaLengkapPria: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Nama Panggilan Mempelai Pria</p>
                    <input
                      type='text'
                      placeholder='nama panggilan'
                      className='input'
                      onChange={(event) => {
                        setValue({ ...value, namaPria: event.target.value });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Nama Lengkap Mempelai Wanita</p>
                    <input
                      type='select'
                      placeholder='nama lengkap'
                      className='input '
                      onChange={(event) => {
                        setValue({
                          ...value,
                          namaLengkapWanita: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Nama Panggilan Mempelai Wanita</p>
                    <input
                      type='select'
                      placeholder='nama panggilan'
                      className='input '
                      onChange={(event) => {
                        setValue({ ...value, namaWanita: event.target.value });
                      }}
                    />
                  </div>

                  <div className='btn-wrapper'>
                    <button className='btn'>Update</button>
                  </div>
                </div>
              </div>
              {/*----------------/DATA MEMPELAI\-----------------*/}
              {/*----------------Akhir Tab 3-------------------*/}

              {/*----------------Awal Tab 4-------------------*/}
              {/*----------------\DATA ACARA/------------------*/}
              <div className={`single-tab mb-4 ${created ? "" : "hidden"}`}>
                <div className='title-tab'>
                  <div className='text-xl mt-1 w-5/6'>Data Acara</div>
                  <div className=' w-1/6'>
                    <div
                      className='toggler-tab'
                      onClick={
                        toggle.dataAcara
                          ? () => {
                              setToggle({ ...toggle, dataAcara: false });
                            }
                          : () => {
                              setToggle({ ...toggle, dataAcara: true });
                            }
                      }
                    >
                      {toggle.dataAcara ? "+" : "-"}
                    </div>
                  </div>
                </div>
                <div
                  className={`content-tab  ${toggle.dataAcara ? "hidden" : ""}`}
                >
                  <div className='input-container'>
                    <p className='label'>Waktu Akad</p>
                    <input
                      type='text'
                      placeholder='waktu akad'
                      className='input'
                      onChange={(event) => {
                        setValue({ ...value, waktuAkad: event.target.value });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Waktu Resepsi</p>
                    <input
                      type='text'
                      placeholder='waktu resepsi'
                      className='input'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          waktuResepsi: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Tempat Akad</p>
                    <textarea
                      type='select'
                      placeholder='tempat akad'
                      className='input '
                      onChange={(event) => {
                        setValue({ ...value, tempatAkad: event.target.value });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Tempat Resepsi</p>
                    <textarea
                      type='select'
                      placeholder='tempat resepsi'
                      className='input '
                      onChange={(event) => {
                        setValue({
                          ...value,
                          tempatResepsi: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Link Google Maps</p>
                    <input
                      type='select'
                      placeholder='link Google Maps'
                      className='input '
                      onChange={(event) => {
                        setValue({
                          ...value,
                          linkGoogleMaps: event.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className='btn-wrapper'>
                    <button className='btn'>Update</button>
                  </div>
                </div>
              </div>
              {/*----------------/DATA ACARA\-----------------*/}
              {/*----------------Akhir Tab 4-------------------*/}

              {/*----------------Awal Tab 4-------------------*/}
              {/*------------------\TEKS/-------------------*/}
              <div className={`single-tab mb-4 ${created ? "" : "hidden"}`}>
                <div className='title-tab'>
                  <div className='text-xl mt-1 w-5/6'>Teks</div>
                  <div className=' w-1/6'>
                    <div
                      className='toggler-tab'
                      onClick={
                        toggle.teks
                          ? () => {
                              setToggle({ ...toggle, teks: false });
                            }
                          : () => {
                              setToggle({ ...toggle, teks: true });
                            }
                      }
                    >
                      {toggle.teks ? "+" : "-"}
                    </div>
                  </div>
                </div>
                <div className={`content-tab  ${toggle.teks ? "hidden" : ""}`}>
                  <div className='input-container'>
                    <p className='label'>Teks Salam Pembuka</p>
                    <input
                      type='text'
                      placeholder={`Assalamu'alaikum Wr Wb`}
                      className='input'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          teksSalamPembuka: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Teks Pendahuluan</p>
                    <textarea
                      type='text'
                      placeholder='Tanpa mengurangi rasa hormat, kami mengundang Bapak/Ibu untuk hadir di acara pernikahan putra-putri kami'
                      className='input h-36'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          teksPendahuluan: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Teks Hari Tanggal Akad</p>
                    <input
                      type='text'
                      placeholder='Sabtu, 20 Februari 2022'
                      className='input'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          teksHariTanggalAkad: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Teks Hari Tanggal Resepsi</p>
                    <input
                      type='text'
                      placeholder='Sabtu, 20 Februari 2022'
                      className='input'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          teksHariTanggalResepsi: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Teks Orang Tua Pria</p>
                    <textarea
                      type='text'
                      placeholder='Anak ke-2 dari Bapak Ahmad dan Ibu Mahmudah'
                      className='input'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          teksOrangTuaPria: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Teks Orang Tua Wanita</p>
                    <textarea
                      type='text'
                      placeholder='Anak ke-3 dari Bapak Amin dan Ibu Aminah'
                      className='input'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          teksOrangTuaWanita: event.target.value,
                        });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Teks Ayat </p>
                    <textarea
                      type='text'
                      placeholder='Dan di antara tanda-tanda kekuasaannya kami menciptakan pasangan dari diri kalian sendiri agar kalian merasa tenang kepadanya ....'
                      className='input h-36'
                      onChange={(event) => {
                        setValue({ ...value, teksAyat: event.target.value });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Teks Penutup </p>
                    <textarea
                      type='text'
                      placeholder='Besar harapan kami agar Bapak/Ibu/Saudara/I dapat berhadir di acara pernikahan putra-putri kami.'
                      className='input h-36'
                      onChange={(event) => {
                        setValue({ ...value, teksPenutup: event.target.value });
                      }}
                    />
                  </div>
                  <div className='input-container'>
                    <p className='label'>Teks Salam Penutup</p>
                    <input
                      type='text'
                      placeholder={`Wassalamu'alaikum Wr Wb`}
                      className='input'
                      onChange={(event) => {
                        setValue({
                          ...value,
                          teksSalamPenutup: event.target.value,
                        });
                      }}
                    />
                  </div>

                  <div className='btn-wrapper'>
                    <button className='btn'>Update</button>
                  </div>
                </div>
              </div>
              {/*-------------------/TEKS\--------------------*/}
              {/*----------------Akhir Tab 4-------------------*/}
            </div>
          </div>
        );
        {
          /*Akhir Edit Dashboard*/
        }
      })}
    </div>
  );
}

export default Dashboard;
