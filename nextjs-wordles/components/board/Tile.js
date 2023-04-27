import React from "react";

function Tile({ letter, state}) {
  return <div className={`state-colour-${state} board_block` }>{letter}</div>;
}

export default Tile;
