import React from 'react';

function Key({ letter, setKey }) {
  const updateKeyboardKey = (event) => {
    setKey({ letter: event.target.innerHTML });
  };

  return (
    <div onClick={updateKeyboardKey} id={letter} className={ "w-7 h-7 text-xs 2xl:w-18 2xl:h-18 2xl:text-2xl xl:w-16 xl:h-16 xl:text-xl lg:w-14 lg:h-14 lg:text-lg md:w-12 md:h-12 md:text-md sm:w-10 sm:h-10 sm:text-sm bg-[#e1e0e0] border border-solid border-[#d9d5d5] flex text-2xl items-center justify-center rounded-md cursor-pointer   " }>{letter}</div>
  );
}

export default Key;


// w-11 h-11 bg-gray-200 border border-gray-300 flex items-center justify-center rounded-md cursor-pointer