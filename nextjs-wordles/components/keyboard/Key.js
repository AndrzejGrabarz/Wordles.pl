import React from 'react';

function Key({ letter, setKeyboardKey }) {
  const updateKeyboardKey = (event) => {
    setKeyboardKey(event.target.innerHTML);
  };

  return (
      <div onClick={updateKeyboardKey} id={letter} className={ "keyboard_block" }>{letter}</div>
  );
}

export default Key;
