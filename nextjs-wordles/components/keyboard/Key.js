import React from 'react';

function Key({ letter, setKeyboardKey, setError }) {
  const updateKeyboardKey = (event) => {
    setKeyboardKey(event.target.innerHTML);
    // setError({ key: event.target.innerHTML, value: 1 });
  };

  return (
    <div onClick={updateKeyboardKey} id={letter} className={ "keyboard_block" }>{letter}</div>
  );
}

export default Key;
