import React from 'react';

function Key({ letter, setKey }) {
  const updateKeyboardKey = (event) => {
    setKey({ letter: event.target.innerHTML });
  };

  return (
    <div onClick={updateKeyboardKey} id={letter} className={ "2xl:w-20 2xl:h-20 2xl:text-2xl bg-[#e1e0e0] border border-solid border-[#d9d5d5] flex text-2xl items-center justify-center rounded-md cursor-pointer sm:w-10 sm:h-10 sm:text-sm md:w-12 md:h-12 md:text-md " }>{letter}</div>
  );
}

export default Key;


// w-11 h-11 bg-gray-200 border border-gray-300 flex items-center justify-center rounded-md cursor-pointer