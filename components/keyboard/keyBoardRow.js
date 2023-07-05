import React from 'react';
import Key from './Key';

function KeyboardRow({ rowLine, setKey }) {
  return (
    <div className=" flex gap-1 my-0.5 sm:gap-2 sm:my-1">
      {rowLine.map((letter) => (
        <Key key={letter.id} letter={letter} setKey={setKey} />
      ))}
    </div>
  );
}

export default KeyboardRow;
