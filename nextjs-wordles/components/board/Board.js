import React from 'react';
import Row from './Row';

function Board({ board }) {
  return (
    <>
      <div className="flex flex-col">
        {board.map((row, index) => {
          return <Row key={index} row={row} />;
        })}
      </div>
    </>
  );
}

export default Board;
