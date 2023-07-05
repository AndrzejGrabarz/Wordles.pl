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
      className="text-red-400 border border-red-400 hover:text-white hover:bg-gradient-to-br from-red-400 via-red-500 to-red-600  font-medium rounded-lg text-sm px-5 py-1.5 sm:px-5 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-2 xl:px-7 xl:py-1.5 2xl:px-7 2xl:py-1.5 text-center mr-2 mb-2"
    >
      <ArrowPathIcon className="h-4 w-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
    </button>
  );
}

export default RestartGame;
