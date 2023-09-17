import { ArrowPathIcon } from '@heroicons/react/24/solid';

function RestartGame({
  setCurrentRow,
  setCurrentObject,
  setBoardState,
  setWord,
  NumberOfColumn,
  ROW_COUNT,
  dicionary,
}) {
  const resetGame = () => {
    const KeyboardAnimation = document.querySelectorAll('#q, #w, #e, #r, #t, #y, #u, #i, #o, #p,#a, #s, #d, #f, #g, #h, #j, #k, #l,#z, #x, #c, #v, #b, #n, #m, #ą, #ć, #ę, #ł,#ń, #ó, #ś, #ź, #ż');
    setBoardState(
      Array.from({ length: ROW_COUNT }, () => Array.from({ length: NumberOfColumn }, () => ({ value: '', state: '' }))),
    );
    setCurrentObject(0);
    setCurrentRow(0);
    setWord(dicionary[Math.floor(Math.random() * dicionary.length)]);
    const inputInfo = document.getElementById('link');
    inputInfo.value = '';
    document.getElementById('time').innerHTML = '00:00:00';
    KeyboardAnimation.forEach((id) => {
      id.style.backgroundColor = '#e1e0e0';
    });
  };

  return (
    <div className="flex justify-center py-4 ml-[20px]  mr-[20px]">
      <button
        id="btn"
        type="button"
        onClick={resetGame}
        className="text-red-400 border border-red-400 hover:text-white hover:bg-gradient-to-br from-red-400 via-red-500 to-red-600  font-medium rounded-lg text-sm px-5 py-1.5 sm:px-5 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-2 xl:px-7 xl:py-1.5 2xl:px-7 2xl:py-1.5 text-center"
      >
        <ArrowPathIcon className="h-5 w-5 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
      </button>
    </div>
  );
}

export default RestartGame;
