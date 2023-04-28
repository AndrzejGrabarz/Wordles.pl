import React from 'react';
import Tile from './Tile';

import { COL_COUNT } from '@/utils/words';

// Stany
// 1. correct - Na poprawnym miejscu
// 2. wrong - Nie na poprawnym miejscu ale w slowie niebieska
// 3. missing - Nie w slowie to szara

let emptyRow = [...Array(COL_COUNT).keys()].map((_) => '');

function Row({ row }) {
  let letters = [...row.letters, ...emptyRow].slice(0, COL_COUNT);
  return (
    <div className="flex gap-3 my-2">
      {letters.map((letter, index) => {
        return <Tile key={index} index={index} letter={letter} checked={row.checked} />;
      })}
    </div>
  );
}

export default Row;
