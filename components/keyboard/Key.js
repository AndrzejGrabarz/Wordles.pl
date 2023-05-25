import React from 'react';

function Key({ letter, setKey }) {
  const updateKeyboardKey = (event) => {
    setKey({ letter: event.target.innerHTML });
  };

  return (
    <div onClick={updateKeyboardKey} id={letter} className={ "keyboard_block" }>{letter}</div>
  );
}

export default Key;
