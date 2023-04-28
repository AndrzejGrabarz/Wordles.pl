import React from 'react';
import { CORRECT_WORD } from '@/utils/words';

function Tile({ index, letter, checked }) {
  const getLetterState = () => {
    if (CORRECT_WORD[index] === letter) return 'correct';
    if (CORRECT_WORD.includes(letter)) return 'misplaced';
    return 'grey';
  };

  return (
    <div
      className={`state-colour-${
        checked ? getLetterState() : 'default'
      } board_block`}
    >
      {letter}
    </div>
  );
}

export default Tile;
