import React from 'react';

function Tile({ letter, state }) {
  return <div className={`state-colour-${state}  w-8 h-8 text-xs 2xl:w-18 2xl:h-18 2xl:text-2xl xl:w-16 xl:h-16 xl:text-xl lg:w-14 lg:h-14 lg:text-lg md:w-12 md:h-12 md:text-md sm:w-10 sm:h-10 sm:text-sm  bg-[#fafafa] flex border sm:border-2 border-solid border-[#d9d5d5] text-2xl items-center justify-center rounded-md`}><span className="uppercase">{letter}</span></div>;
}

export default Tile;
