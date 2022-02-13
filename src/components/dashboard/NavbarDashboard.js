import React, { useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import Button from "../Button";
import LoginModal from "../LoginModal";
import { useNavigate } from "react-router-dom";

function Navbar() {
  let navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState(true);
  const [isAuth, setIsAuth] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const signUserOut = () => {
    signOut(auth).then(() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/";
    });
  };
  const Menu = () => {
    return (
      <div
        onClick={() => setOpenMenu(false)}
        className='sm:hidden text-3xl absolute right-8 top-6 cursor-pointer'
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
            d='M4 6h16M4 12h16M4 18h16'
          />
        </svg>
      </div>
    );
  };

  const Close = () => {
    return (
      <div
        onClick={() => setOpenMenu(true)}
        className='sm:hidden text-3xl absolute right-8 top-6 cursor-pointer'
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
    );
  };

  {
    /*  Konten Utama  */
  }

  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-white'>
      <div className='sm:flex sm:item-center justify-between bg-white py-4 sm:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center  text-slate-800 mr-1'>
          <span>
            <img
              className='h-10 pr-4'
              src='https://i.ibb.co/wgJD0KF/logo-jauzatu-gold.png'
              alt='logo-jauzatu'
            />
          </span>
          Dashboard
        </div>
        {openMenu ? <Menu /> : <Close />}
        <ul
          className={`z-[-1] shadow-sm shadow-yellow-700 sm:flex sm:items-center sm:pb-0 pb-12 absolute sm:static bg-white sm:z-auto  left-0 w-full sm:w-auto sm:pl-0 pl-9 transition-all duration-500 ease-in ${
            openMenu ? "top-[-490px]" : "top-20"
          } sm:opacity-100 `}
        >
          <li className='ml-4 text-lg sm:my-0 my-7'>
            <a
              href='/'
              className='text-slate-800 hover:text-slate-400 duration-500'
            >
              Kembali ke Halaman Utama
            </a>
          </li>
          <li className='ml-4 text-lg sm:my-0 my-7'>
            {isAuth ? (
              <a
                href='/'
                className='text-slate-800 hover:text-slate-400 duration-500'
                onClick={signUserOut}
              >
                Logout
              </a>
            ) : (
              <a
                href='#'
                className='text-slate-800 hover:text-slate-400 duration-500'
                onClick={() => setModalOpen(true)}
              >
                Login
              </a>
            )}
          </li>
        </ul>
      </div>
      {modalOpen && (
        <LoginModal setOpenModal={setModalOpen} setIsAuth={setIsAuth} />
      )}
    </div>
  );
}

export default Navbar;
