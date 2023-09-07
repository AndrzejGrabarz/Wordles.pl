import { LightBulbIcon } from '@heroicons/react/24/solid';
import { useState, useRef } from 'react';

function Instruction({
  divBoardRef,
  instructionRef,
  keyboardRef,
  setUnderBoardRef,
  flagsRef,
}) {
  const [isShown, setIsShown] = useState(false);
  const BulbIconRef = useRef();

  function showInstruction() {
    if (BulbIconRef.current) {
      BulbIconRef.current.classList.toggle('showObject');
    }
    if (divBoardRef.current) {
      divBoardRef.current.classList.toggle('showObject');
    }
    if (keyboardRef.current) {
      keyboardRef.current.classList.toggle('hiddenObject');
    }
    if (instructionRef.current) {
      instructionRef.current.classList.toggle('InstructionCard');
    }
    if (setUnderBoardRef.current) {
      setUnderBoardRef.current.classList.toggle('showObject');
    }
    if (flagsRef.current) {
      flagsRef.current.classList.toggle('showObject');
    }
    setIsShown(!isShown);
  }
  return (
    <button id="BulbIcon" type="button" className="text-green-400 border border-green-400 hover:text-white hover:bg-gradient-to-br from-green-400 via-green-500 to-green-600  font-medium rounded-lg text-sm px-5 py-1.5 sm:px-5 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-2 xl:px-7 xl:py-1.5 2xl:px-7 2xl:py-1.5 text-center  mr-2 mb-2" onClick={showInstruction}>
      <LightBulbIcon className="h-4 w-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
    </button>
  );
}

export default Instruction;
