import React from 'react';
import KeyboardRow from "./keyBoardRow";
import { KEYBOARD } from '@/utils/variables';
import { ENGLISH_KEYBOARD } from '@/utils/variables';

function Keyboard({ setKey, test }) {
  let chooseKeyboard;
  if (test === 'polish') {
    chooseKeyboard = KEYBOARD
  } else{
    chooseKeyboard = ENGLISH_KEYBOARD
  }

  return (
    <div className="flex flex-col my-10"> 
      {chooseKeyboard.map((row) =>
        <KeyboardRow key={row.id} rowLine={row} setKey={setKey} />)}
    </div>
  );
}

export default Keyboard;
