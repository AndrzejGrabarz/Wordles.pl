import React from 'react';

function Key({ letter, handleKeyPress }) {
  return (
    <>
      <div onClick={handleKeyPress} id={letter} className={'keyboard_block'}>
        {letter}
      </div>
    </>
  );
}

export default Key;
