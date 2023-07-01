import React from 'react';

function Tile({ letter, state }) {
  return <div className={`state-colour-${state}  w-16 h-16 bg-[#fafafa] flex border-2 border-solid border-[#d9d5d5] text-2xl items-center justify-center rounded-md`}><span className='big-letter'>{letter}</span></div>;
}

export default Tile;
