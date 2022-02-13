import React, { useEffect, useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
function CreateInvitation() {
  const [slug, setSlug] = useState("");
  const [tema, setTema] = useState("");
  const [fotoPria, setFotoPria] = useState("");
  const [fotoWanita, setFotoWanita] = useState("");
  const [namaLengkapPria, setNamaLengkapPria] = useState("");
  const [namaLengkapWanita, setNamaLengkapWanita] = useState("");
  const [namaPria, setNamaPria] = useState("");
  const [namaWanita, setNamaWanita] = useState("");
  const [teksOrtuPria, setTeksOrtuPria] = useState("");
  const [teksOrtuWanita, setTeksOrtuWanita] = useState("");
  const [teksPendahuluan, setTeksPendahuluan] = useState("");
  const [tanggalAkad, setTanggalAkad] = useState("DD/MM/YYY");
  const [hariAkad, setHariAkad] = useState("");
  const [jamAkad, setJamAkad] = useState("");
  const [tanggalResepsi, setTanggalResepsi] = useState("");
  const [hariResepsi, setHariResepsi] = useState("");
  const [jamResepsi, setJamResepsi] = useState("");
  const [urlGoogleMaps, setUrlGoogleMaps] = useState("");
  const [ayat, setAyat] = useState("");
  const [teksIsi1, setTeksIsi1] = useState("");
  const [teksIsi2, setTeksIsi2] = useState("");
  const [teksPenutup, setTeksPenutup] = useState("");

  const invitationsCollectionRef = collection(db, "invitations");
  let navigate = useNavigate();
  const createInvitation = async () => {
    await addDoc(invitationsCollectionRef, {
      slug,
      tema,
      namaLengkapPria,
      namaLengkapWanita,
    });
    navigate("/");
  };
  console.log(slug);
  console.log(tema);
  console.log(namaLengkapPria);
  console.log(namaLengkapWanita);

  return (
    <div className='text-center items-center'>
      <Navbar />
      <div className=' relative my-auto bg-slate-800 mx-auto p-10 rounded-xl w-96'>
        <h1 className='mb-4 font-bold text-2xl text-slate-100'>
          Buat Undangan
        </h1>
        <div className='inputGroup flex'>
          <div className='my-2'>
            <label htmlFor='' className='text-slate-100 mx-3 text-left'>
              Slug:{" "}
            </label>
          </div>
          <div>
            <input
              type='text'
              placeholder='title'
              className=' w-60 rounded-lg p-2 my-1'
              onChange={(event) => {
                setSlug(event.target.value);
              }}
            />
          </div>
        </div>
        <div className='inputGroup flex'>
          <div>
            <label htmlFor='' className='text-slate-100 mx-3'>
              Tema:{" "}
            </label>
          </div>
          <div>
            <input
              type='text'
              placeholder='post'
              className='w-60 rounded-lg p-2 my-1'
              onChange={(event) => {
                setTema(event.target.value);
              }}
            />
          </div>
        </div>
        <div className='inputGroup flex'>
          <div className='my-2'>
            <label htmlFor='' className='text-slate-100 mx-3 text-left'>
              Nama Lengkap Mempelai Pria:{" "}
            </label>
          </div>
          <div>
            <input
              type='text'
              placeholder='title'
              className=' w-60 rounded-lg p-2 my-1'
              onChange={(event) => {
                setNamaLengkapPria(event.target.value);
              }}
            />
          </div>
        </div>
        <div className='inputGroup flex'>
          <div className='my-2'>
            <label htmlFor='' className='text-slate-100 mx-3 text-left'>
              Nama Lengkap Mempelai Wanita:{" "}
            </label>
          </div>
          <div>
            <input
              type='text'
              placeholder='title'
              className=' w-60 rounded-lg p-2 my-1'
              onChange={(event) => {
                setNamaLengkapWanita(event.target.value);
              }}
            />
          </div>
        </div>
        <button
          onClick={createInvitation}
          className='bg-blue-500 rounded-md px-3 py-2 mt-3 text-gray-100 font-bold'
        >
          Buat Undangan
        </button>
      </div>
    </div>
  );
}

export default CreateInvitation;
