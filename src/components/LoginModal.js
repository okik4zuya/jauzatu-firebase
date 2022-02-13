import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import "./loginModal.css";

function LoginModal({ setOpenModal, setIsAuth }) {
  let navigate = useNavigate();
  const [email, setEmail] = useState("a@gmail.com");
  const [password, setPassword] = useState("asdf");
  const auth = getAuth();
  console.log(email, password);

  //Handle Register
  const createUser = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true);
      navigate("/");
    });
  };

  return (
    <div className='w-full h-full fixed flex bg-black/40 justify-center items-center '>
      <div
        className='relative sm:w-[360px] w-full sm:h-3/4 h-full rounded-none bg-white shadow-md flex flex-col mx-2 p-4 mb-20 z-10'
        onClick={() => setOpenModal(false)}
      >
        <div
          onClick={() => setOpenModal(false)}
          className=' text-3xl cursor-pointer flex absolute right-2 top-2'
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

        <div className='text-center my-2 text-xl'>
          <h1>Masuk atau Daftar</h1>
        </div>

        <a
          href='#'
          onClick={createUser}
          className='rounded-md p-2 mt-6 bg-blue-600 hover:bg-blue-300 text-gray-100 transform hover:-translate-y-0.5 text-center'
        >
          Register
        </a>
      </div>
    </div>
  );
}

export default LoginModal;
