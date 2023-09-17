import React from 'react';

function CustomAlert({ text }) {
  return (
    <div role="alert">
      <div className=" font-mono border border-black-400 rounded-md bg-black-100 px-4 py-8 text-black-700 sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CustomAlert;
