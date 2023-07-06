import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function CustomConfirmWin({ text }) {
  function closeByXMark() {
    const XMark = document.getElementById('confirm-win');
    XMark.classList.toggle('showObject');
  }

  return (
    <div id="confirm" role="alert" className="rounded-md">
      <div className=" font-mono  rounded-md bg-black-100  text-black-700 sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className=" flex justify-center items-center bg-[#e5ecff]">
          <div className="flex py-4">{text}</div>
          <button type="button" onClick={closeByXMark} className="flex absolute right-1 top-2 sm:right-6">
            <XMarkIcon className="h-3 w-3 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomConfirmWin;
