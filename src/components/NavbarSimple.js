import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../firebase-config";
import Button from "./Button";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  {
    /*  Konten Utama  */
  }

  return (
    <div className='shadow-md w-full fixed top-0 left-0'>
      <div className='flex sm:item-center justify-between bg-white py-4 sm:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center  text-slate-800 mr-1'>
          <span>
            <img
              className='h-10 pr-4'
              src='https://i.ibb.co/wgJD0KF/logo-jauzatu-gold.png'
              alt='logo-jauzatu'
            />
          </span>
          Jauzatu
        </div>
        <div className='my-auto bg-yellow-600 text-white py-2 px-4 font-semibold rounded hover:bg-yellow-300 transition hover:translate-y-1 active:translate-y-1  cursor-pointer'>
          <a className='' onClick={() => setModalOpen(true)}>
            Login
          </a>
        </div>
      </div>
      {modalOpen && <LoginModal setOpenModal={setModalOpen} />}
    </div>
  );
}

export default Navbar;
