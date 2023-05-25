import React from 'react';

function Tile({ letter, state }) {
  return <div className={`state-colour-${state} board_block`}><span className='big-letter'>{letter}</span></div>;
}

export default Tile;
