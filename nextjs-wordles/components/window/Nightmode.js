import React, { useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'

function Nightmode() {
  const [nightMode, setnightMode] = useState(true);

  function nightmode() {
    const main = document.getElementById('main');
    main.classList.toggle('night');
    setnightMode(!nightMode);
  }
  return (
    <button
      onClick={nightmode}
      id="btn"
      className={nightMode
        ? 'text-purple-700 border-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-1 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900'
        :
        'text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-1 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900'
         }
    >
      {nightMode ? (
        <MoonIcon className="h-6 w-6"/>
      ) : (
        <SunIcon className="h-6 w-6"/>
      )}
    </button>
  );
}
export default Nightmode;
