import { LightBulbIcon } from '@heroicons/react/24/solid';

function Instruction() {
  function show() {
    const board = document.getElementById('Board');
    const instruction = document.getElementById('InstructionCard');
    board.classList.toggle('show-time');
    instruction.classList.toggle('InstructionCard');
  }
  return (
    <button type="button" className="text-green-400 border border-green-400 hover:text-white hover:bg-gradient-to-br from-green-400 via-green-500 to-green-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2" onClick={show}>
      <LightBulbIcon className="h-6 w-6" />
    </button>
  );
}

export default Instruction;
