import React from 'react';
import Key from './Key';

function KeyBoardRow({
  rowLine,
  KeyboardKey,
  setKeyboardKey,
  specialKeyboardKey,
  setSpecialKeyboardKey,
}) {
  return (
    <>
      <div className=" flex gap-2 my-1">
        {rowLine.map((letter) => {
          return (
            <Key
              key={letter}
              letter={letter}
              KeyboardKey={KeyboardKey}
              setKeyboardKey={setKeyboardKey}
              specialKeyboardKey={specialKeyboardKey}
              setSpecialKeyboardKey={setSpecialKeyboardKey}
            />
          );
        })}
      </div>
    </>
  );
}

export default KeyBoardRow;
