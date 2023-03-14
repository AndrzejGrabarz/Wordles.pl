import React from 'react';
import Row from './Row';

const BOARD_SIZE = [[], [], [], [], [], []];

function Board() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {/* https://reactjs.org/docs/lists-and-keys.html */}
      {BOARD_SIZE.map((row) => {
        return <Row></Row>;
      })}
    </div>
  );
}

export default Board;
