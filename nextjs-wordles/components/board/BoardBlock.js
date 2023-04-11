import React from 'react';

function BoardBlock({ KeyboardKey, setKeyboardKey, id, array, RowId }) {


  return (
    <div className="board_block">{array[RowId][id]}</div>
  );
}

export default BoardBlock;
