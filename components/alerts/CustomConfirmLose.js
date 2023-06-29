import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function CustomConfirmLose({ text, word }) {
  function showDiv() {
    const XMark = document.getElementById('confirm-lose');
    XMark.classList.toggle('showObject');
  }

  return (
    <div id="confirm" role="alert" className=" rounded-md">
      <div className=" font-mono  rounded-md bg-black-100  text-black-700 text-2xl">
        <div className=" flex justify-center items-center mb-8 py-4  bg-[#e5ecff]">
          <div className="flex">{text}</div>
          <button type="button" onClick={showDiv} className="flex absolute right-6">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
        <div>
          Your word was:
        </div>
        <div className="flex justify-center">
          <div className="my-4 py-3 rounded-md bg-[#e5ecff] w-1/2 uppercase border-dashed border-4 border-indigo-300 ">{word}</div>
        </div>
      </div>
    </div>
  );
}

export default CustomConfirmLose;
