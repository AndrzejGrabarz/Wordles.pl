import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function CustomConfirmLose({ text, word }) {
  function showDiv() {
    const XMark = document.getElementById('confirm-lose');
    XMark.classList.toggle('showObject');
  }

  return (
    <div id="confirm" role="alert" className=" rounded-md">
      <div className=" font-mono  rounded-md bg-black-100  text-black-700 text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-xl">
        <div className=" flex justify-center items-center  bg-[#e5ecff]">
          <div className="flex py-4">{text}</div>
          <button type="button" onClick={showDiv} className="flex absolute right-1 top-2 sm:right-6">
            <XMarkIcon className="h-3 w-3 sm:h-6 sm:w-6" />
          </button>
        </div>
        <div className="mt-2">
          Your word was:
        </div>
        <div className="flex justify-center">
          <div className="my-3 py-2 px-3 border-2 sm:my-4 sm:py-3 sm:px-4  rounded-md bg-[#e5ecff] uppercase border-dashed sm:border-4 border-indigo-300 ">
            {word}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CustomConfirmLose;
