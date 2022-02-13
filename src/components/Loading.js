import React from "react";

function Loading() {
  return (
    <div>
      <h1>Loading...</h1>

      <div className='bg-color-red-400'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          className='h-10 w-10 fill-red-600'
          viewBox='0 0 20 20'
        >
          <path
            fillRule='evenodd'
            d='M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </div>
  );
}

export default Loading;
