import React from 'react';
import Tile from './Tile';

// Stany
// 1. correct - Na poprawnym miejscu
// 2. wrong - Nie na poprawnym miejscu ale w slowie niebieska
// 3. missing - Nie w slowie to szara

function Row({ row }) {

  // Jesli nie ma 5 liter, to wyswietl puste kafelki

  if(obj.lettersWithState.length === 0 ){
    // Wy∫wietl puste kafelki + wyswletl userTypedWord
  }
  if(obj.lettersWithState.length > 0 ){
    // Wy∫wietl puste kafelki
    
  }

  
  return (
    <div className="flex gap-3 my-2">
      {letters &&
        letters.map((obj, index) => {


          return <Tile key={index} letter={obj.letter} state={obj.state} />;
        })}
    </div>
  );
}

export default Row;
