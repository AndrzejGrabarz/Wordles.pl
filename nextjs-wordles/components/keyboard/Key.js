import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

function Key({
  letter,
  setKeyboardKey,
  setSpecialKeyboardKey,
}) {
  const stateHandler = () => {
    setKeyboardKey(letter);
  };

  const specialStateHandler = () => {
    if (letter === 'Delete') {
      return;
    }
    setSpecialKeyboardKey(letter);
  };

  return (
    <>
      <div
        onClick={
          letter !== 'Enter' && letter !== 'Delete'
            ? stateHandler
            : specialStateHandler
        }
        id={letter}
        className={'keyboard_block'}
      >
        {letter}
      </div>
    </>
  );
}

export default Key;
