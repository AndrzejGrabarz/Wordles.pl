import React from 'react';
import Tile from './Tile';

import { COL_COUNT } from '@/utils/words';

// Stany
// 1. correct - Na poprawnym miejscu
// 2. wrong - Nie na poprawnym miejscu ale w slowie niebieska
// 3. missing - Nie w slowie to szara

function Row({ row }) {
  let letters = row.lettersWithState;
  let typedWord = row.userTypedWord;
  if (typedWord.length < COL_COUNT) {
    letters = typedWord.split('').map((letter) => {
      return { letter: letter, state: 'gray' };
    });
  }
  return (
    <div className="flex gap-3 my-2">
      {row &&
        letters.map((el, index) => {
          return <Tile key={index} letter={el.letter} state={el.state} />;
        })}
    </div>
  );
}

export default Row;
