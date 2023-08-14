import { LightBulbIcon } from '@heroicons/react/24/solid';

function Instruction() {
  function show() {
    const divBoard = document.getElementById('divBoard');
    const instruction = document.getElementById('InstructionCard');
    const keyboard = document.getElementById('Keyboard');
    divBoard.classList.toggle('showObject');
    keyboard.classList.toggle('hiddenObject');
    instruction.classList.toggle('InstructionCard');
  }
  return (
    <button type="button" className="text-green-400 border border-green-400 hover:text-white hover:bg-gradient-to-br from-green-400 via-green-500 to-green-600  font-medium rounded-lg text-sm px-5 py-1.5 sm:px-5 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-2 xl:px-7 xl:py-1.5 2xl:px-7 2xl:py-1.5 text-center  mr-2 mb-2" onClick={show}>
      <LightBulbIcon className="h-4 w-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
    </button>
  );
}

export default Instruction;
