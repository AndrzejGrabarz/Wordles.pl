import React from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';
import AES from 'crypto-js/aes';

function CustomConfirmWin({
  text, timeScoreText, currentRow, language, word,
}) {
  function closeByXMark() {
    const XMark = document.getElementById('confirm-win');
    XMark.classList.toggle('showObject');
  }
  const CryptoJS = require('crypto-js');
  const { t } = useTranslation();
  function Share() {
    const currentURL = new URL(document.location);
    const { searchParams } = currentURL;
    searchParams.set('time', timeScoreText);
    searchParams.set('score', currentRow);
    searchParams.set('lang', language);
    const newUrl = currentURL.toString();
    const inputInfo = document.getElementById('link');
    inputInfo.value = newUrl;
  }

  function ChallangeFriend() {
    const currentURL = new URL(document.location);
    const { searchParams } = currentURL;
    const message = word;
    const secretKey = 'secret_key';
    // Szyfrowanie
    const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
    // Odszyfrowywanie
    const decryptedBytes = CryptoJS.AES.decrypt(encryptedMessage, secretKey);
    const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
    searchParams.set('time', timeScoreText);
    searchParams.set('score', currentRow);
    searchParams.set('lang', language);
    searchParams.set('word', encryptedMessage);
    const newUrl = currentURL.toString();
    const inputInfo = document.getElementById('link');
    inputInfo.value = newUrl;

    console.log('Zaszyfrowana wiadomość:', encryptedMessage);
    console.log('Odszyfrowana wiadomość:', decryptedMessage);
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
          <button type="button" onClick={ChallangeFriend}>Chalenge Friend</button>
        </div>
      </div>
      <div className="bg-red-100"><input type="text" id="link" /></div>
    </div>
  );
}

export default CustomConfirmWin;
