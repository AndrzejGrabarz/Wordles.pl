import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';
import queryString from 'query-string';

function CustomConfirmWin({ text, timeScoreText, currentRow }) {
  function closeByXMark() {
    const XMark = document.getElementById('confirm-win');
    XMark.classList.toggle('showObject');
  }
  const { t } = useTranslation();

  function Share() {
    const currentURL = new URL(document.location);
    const { searchParams } = currentURL;
    searchParams.set('time', timeScoreText);
    searchParams.set('score', currentRow);
    const newUrl = currentURL.toString();
    const inputInfo = document.getElementById('link');
    inputInfo.value = newUrl;
  }

  return (
    <div id="confirm" role="alert" className="rounded-md">
      <div className=" font-mono  rounded-md bg-black-100  text-black-700 sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-2xl">
        <div className=" flex justify-center items-center bg-[#e5ecff]">
          <div className="flex flex-col py-4">{text}</div>
          <button type="button" onClick={closeByXMark} className="flex absolute right-1 top-2 sm:right-6">
            <XMarkIcon className="h-3 w-3 sm:h-6 sm:w-6" />
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-center items-center ">
        <div className="flex flex-col my-2">
          <div>
            {t('stopwatch.time')}
            {' '}
            {timeScoreText}
          </div>
          <div className="">
            {t('stopwatch.attempts')}
            {' '}
            {currentRow}
          </div>
        </div>
        <div className="ml-12">
          <button type="button" onClick={Share}>Share</button>
        </div>
      </div>
      <div className="bg-red-100"><input type="text" id="link" /></div>
    </div>
  );
}

export default CustomConfirmWin;
