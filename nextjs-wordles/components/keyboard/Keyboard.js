import React from 'react';
import KeyboardRow from "./keyBoardRow";
import { KEYBOARD } from '@/utils/variables';

function Keyboard({ setKeyboardKey, setError }) {
  return (
    <div className="flex flex-col my-10"> 
      {KEYBOARD.map((row) =>
        <KeyboardRow key={row.id} rowLine={row} setKeyboardKey={setKeyboardKey} 
        setError={setError} />)}
    </div>
  );
}

export default Keyboard;
