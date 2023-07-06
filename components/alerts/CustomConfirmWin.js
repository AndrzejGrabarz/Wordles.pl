import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

function CustomConfirmWin({ text }) {
  function closeByXMark() {
    const XMark = document.getElementById('confirm-win');
    XMark.classList.toggle('showObject');
  }

  return (
    <div id="confirm" role="alert" className="rounded-md">
      <div className=" font-mono  rounded-md bg-black-100  text-black-700 text-2xl">
        <div className=" flex justify-center items-center mb-8 py-4  bg-[#e5ecff]">
          <div className="flex">{text}</div>
          <button type="button" onClick={closeByXMark} className="flex absolute right-6">
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomConfirmWin;
