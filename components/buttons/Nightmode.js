import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

function Nightmode() {
  const [nightMode, setnightMode] = useState(true);

  function nightmode() {
    const main = document.getElementById('main');
    const greyBackground1 = document.getElementById('grey-background1');
    const greyBackground2 = document.getElementById('grey-background2');
    const instruction = document.getElementById('InstructionCard');
    main.classList.toggle('night');
    greyBackground1.classList.toggle('grey-background');
    greyBackground2.classList.toggle('grey-background');
    instruction.classList.toggle('white');
    setnightMode(!nightMode);
  }
  return (
    <button
      type="button"
      onClick={nightmode}
      id="btn"
      className={
        nightMode
          ? 'text-purple-700 border-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-1.5 sm:px-5 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-2 xl:px-6 xl:py-1.5 2xl:px-6 2xl:py-1.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900  '
          : 'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1.5 sm:px-5 sm:py-2 md:px-5 md:py-2.5 lg:px-6 lg:py-2 xl:px-6 xl:py-2.5 2xl:px-6 2xl:py-2.5  text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900'
      }
    >
      {nightMode ? (
        <MoonIcon className="h-4 w-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7 " />
      ) : (
        <SunIcon className="h-4 w-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
      )}
    </button>
  );
}
export default Nightmode;
