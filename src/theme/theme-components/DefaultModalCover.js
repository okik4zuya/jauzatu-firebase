import React, { useState } from "react";

function DefaultModalCover({ invited, alamat, sesi, style, setPlaying }) {
  console.log(style.button);
  //Handling Close Cover Modal
  const [showCoverModal, setShowCoverModal] = useState(true);

  const handleCloseCoverModal = () => {
    setShowCoverModal(false);
    setPlaying(true);
  };
  return (
    <div
      className={`${
        !showCoverModal && "hidden"
      } absolute top-0 bottom-0 right-0 left-0 bg-black/90 z-[100]`}
    >
      <div className='text-white text-center mt-[250px] '>
        <div className={`${style.fontArt} text-[30px] sm:text-[60px] mb-4`}>
          Omar & Hana
        </div>
        <div className={`sm:text-xl`}>Kepada Yth</div>
        <div className='paragraf sm:text-xl'>Bapak/Ibu/Saudara/I</div>
        <div className='font-bold text-lg sm:text-2xl'>{invited}</div>
        <div className='font-bold text-lg sm:text-2xl'>{alamat}</div>
        <div className='font-bold text-lg sm:text-2xl'>{sesi}</div>
        <div className='mt-6 relative text-center'>
          <button
            className={`${style.button} `}
            onClick={handleCloseCoverModal}
          >
            Buka Undangan
          </button>
        </div>
      </div>
    </div>
  );
}

export default DefaultModalCover;
