import React from 'react';
import Row from './Row';

function Board({ board }) {
  return (
    <div id="Board" className="flex flex-col justify-center items-center">
      {board && board.map((row, index) => <Row key={index} row={row} />)}
    </div>
  );
}

export default Board;
