import React from 'react';
import KeyboardRow from './KeyboardRow';
import { KEYBOARD } from '@/utils/words';

function Keyboard({ handleKeyPress }) {
  return (
    <div className="flex flex-col my-10">
      {KEYBOARD.map((row, index) => {
        return (
          <KeyboardRow
            key={index}
            rowLine={row}
            handleKeyPress={handleKeyPress}
          />
        );
      })}
    </div>
  );
}

export default Keyboard;
