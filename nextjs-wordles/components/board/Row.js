import React from 'react';
import Tile from './Tile';

const DEFAULT_ROW = ['', '', '', '', '']; // letters

// Stany
// 1. correct - Na poprawnym miejscu 
// 2. wrong - Nie na poprawnym miejscu ale w slowie niebieska
// 3. missing - Nie w slowie to szara

function Row({ board, row, currentRow }) {
  row = row.split('');
  row = [...row, ...DEFAULT_ROW].slice(0, 5);
  return (
    <div className="flex gap-3 my-2">
      {row.map((letter, index) => {
        return <Tile key={index} letter={letter} />;
      })}
    </div>
  );
}

export default Row;
