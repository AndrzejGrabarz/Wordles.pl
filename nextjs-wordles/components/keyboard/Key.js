import React from 'react';

function Key({ letter, setKeyboardKey }) {
  const updateKeyboardKey = (e) => {
    console.log('Ustawiamy nowa litere', e.target.innerHTML);
    setKeyboardKey(e.target.innerHTML); // Moze to byc Enter albo Delete
  };

  return (
    <>
      <div onClick={updateKeyboardKey} id={letter} className={'keyboard_block'}>
        {letter}
      </div>
    </>
  );
}

export default Key;
