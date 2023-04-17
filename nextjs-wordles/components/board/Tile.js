import React from 'react';

function Tile({ letter }) {
  return <div className={`tile-colour-${letter.state}`}>{letter}</div>;
}

export default Tile;
