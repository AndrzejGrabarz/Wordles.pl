import React from 'react';
import { ArrowPathIcon } from '@heroicons/react/24/solid';

function RestartGame({
  setCurrentRow,
  setCurrentObject,
  setBoardState,
  setWord,
  NumberOfColumn,
  ROW_COUNT,
  gameWord,
}) {
  const resetGame = () => {
    setBoardState(
      Array.from({ length: ROW_COUNT }, () => Array.from({ length: NumberOfColumn }, () => ({ value: '', state: '' }))),
    );
    setCurrentObject(0);
    setCurrentRow(0);
    setWord(gameWord);
  };

  return (
    <button
      id="btn"
      type="button"
      onClick={resetGame}
      className="text-red-400 border border-red-400 hover:text-white hover:bg-gradient-to-br from-red-400 via-red-500 to-red-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      <ArrowPathIcon className="h-6 w-6" />
    </button>
  );
}

export default RestartGame;
