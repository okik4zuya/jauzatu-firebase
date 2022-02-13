import React from "react";

const Button = (props) => {
  return (
    <a className='bg-yellow-600 text-white py-2 px-6 mx-4 rounded-lg md:ml-8 hover:bg-yellow-200 duration-500 font-semibold sm:text-md text-md cursor-pointer text-center'>
      {props.children}
    </a>
  );
};

export default Button;
