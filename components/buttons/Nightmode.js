import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';
import React, { useState, useRef } from 'react';

function Nightmode( {
    mainRef, 
    greyBackground1Ref, 
    greyBackground2Ref, 
    timerStartButtomRef, 
    timerStopButtomRef, 
    timerResetButtomRef,
    attempts1Ref,
    attempts2Ref,
    timeRef,
    instructionRef
}
   ) {
  const [nightMode, setnightMode] = useState(true);

  function nightmode() {
    if(mainRef.current) {
      mainRef.current.classList.toggle('night')
    }
    if(greyBackground1Ref.current) {
      greyBackground1Ref.current.classList.toggle('grey-background')
    }
    if(greyBackground2Ref.current) {
      greyBackground2Ref.current.classList.toggle('grey-background')
    }
    if(timerStartButtomRef.current) {
      timerStartButtomRef.current.classList.toggle('blueButton')
    }
    if(timerStopButtomRef.current) {
      timerStopButtomRef.current.classList.toggle('blueButton')
    }
    if(timerResetButtomRef.current) {
      timerResetButtomRef.current.classList.toggle('blueButton')
    }
    if(attempts1Ref.current) {
      attempts1Ref.current.classList.toggle('attemptsText')
    }
    if(attempts2Ref.current) {
      attempts2Ref.current.classList.toggle('attemptsText')
    }
    if(timeRef.current) {
      timeRef.current.classList.toggle('bluetime')
    }
    if(instructionRef.current) {
      instructionRef.current.classList.toggle('white')
    }
    const Nightbtn = document.getElementById('Nightbtn')
    Nightbtn.blur()
    setnightMode(!nightMode);
  }
  return (
    <button
      type="button"
      onClick={nightmode}
      id="Nightbtn"
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
