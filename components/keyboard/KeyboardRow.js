import React from 'react';
import Key from './Key';

function KeyboardRow({ rowLine, handleKeyPress }) {
  return (
    <>
      <div className=" flex gap-2 my-1">
        {rowLine.map((letter) => {
          return (
            <Key key={letter} letter={letter} handleKeyPress={handleKeyPress} />
          );
        })}
      </div>
    </>
  );
}

export default KeyboardRow;
