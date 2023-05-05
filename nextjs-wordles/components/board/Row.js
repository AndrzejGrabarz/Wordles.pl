import React from 'react';
import Tile from './Tile';

function Row({ row }) {
  return (
    <div className="flex gap-3 my-2">
      {row.map((letter, index) => {
        return <Tile key={index} letter={letter.value} state={letter.state}/>
      })}
    </div>
  )
};
export default Row;
