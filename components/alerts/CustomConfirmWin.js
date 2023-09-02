import { XMarkIcon, ClipboardIcon } from '@heroicons/react/24/outline';
import { useTranslation } from 'next-i18next';

function CustomConfirmWin({
  text, timeScoreText, currentRow, language, word,
}) {
  function closeByXMark() {
    const XMark = document.getElementById('confirm-win');
    XMark.classList.toggle('showObject');
  }
  const CryptoJS = require('crypto-js');
  const { t } = useTranslation();
  let currentURL = '';
  function Share() {
    if (language === false) {
      currentURL = new URL('http://localhost:3000/');
    } else if (language === true) {
      currentURL = new URL('http://localhost:3000/en');
    }
    const { searchParams } = currentURL;
    searchParams.set('time', timeScoreText);
    searchParams.set('score', currentRow);
    searchParams.set('lang', language);
    const newUrl = currentURL.toString();
    const inputInfo = document.getElementById('link');
    inputInfo.value = newUrl;
    const copyText = document.getElementById('link');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    const tooltip = document.getElementById('tooltipShare');
    tooltip.style.animation = 'none';

    // Pobierz obliczalny styl, aby wymusić reset animacji
    tooltip.offsetWidth; // To jest tzw. reflow, który spowoduje zresetowanie animacji

    // Ponownie ustaw klasę animacji po zresetowaniu
    tooltip.style.animation = 'fadeIn 2s forwards';
  }

  function ChallangeFriend() {
    if (language === false) {
      currentURL = new URL('http://localhost:3000/');
    } else if (language === true) {
      currentURL = new URL('http://localhost:3000/en');
    }
    const { searchParams } = currentURL;
    const message = word;
    const secretKey = 'secret_key';
    // Szyfrowanie
    const encryptedMessage = CryptoJS.AES.encrypt(message, secretKey).toString();
    searchParams.set('time', timeScoreText);
    searchParams.set('score', currentRow);
    searchParams.set('lang', language);
    searchParams.set('word', encryptedMessage);
    const newUrl = currentURL.toString();
    const inputInfo = document.getElementById('link');
    inputInfo.value = newUrl;
    const copyText = document.getElementById('link');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    const tooltip = document.getElementById('tooltipChalleng');
    tooltip.style.animation = 'none';

    // Pobierz obliczalny styl, aby wymusić reset animacji
    tooltip.offsetWidth; // To jest tzw. reflow, który spowoduje zresetowanie animacji

    // Ponownie ustaw klasę animacji po zresetowaniu
    tooltip.style.animation = 'fadeIn 2s forwards';
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
      <div className="flex flex-col ">
        <div className="flex flex-col mt-4 my-3 sm:text-sm  xl:text-lg">
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
        <div className="flex flex-col justify-center items-center w-full px-8 relative ">
          <div className="flex flex-col w-full mt-2 mb-2">
            <div className="flex flex-col justify-center items-center">
              <button className="flex justify-center items-center font-mono bg-[#fb923c] rounded py-2.5 my-2 w-full sm:text-xs md:text-sm xl:text-md italic" type="button" onClick={Share}>
                {t('alerts.share')}
                <ClipboardIcon className=" ml-2 h-4 w-4 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 " />
              </button>
              <div id="tooltipShare" className=" absolute bg-[#fb923c] rounded-full p-0.5 px-2 right-8 -top-[7px] pointer-events-none   transition-opacity text-xs tooltip">
                {t('alerts.coppied')}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full mt-4 mb-2">
            <div className="flex flex-col justify-center items-center">
              <button className="flex justify-center items-center font-mono bg-[#fb923c] rounded py-2.5  w-full sm:text-xs md:text-sm xl:text-md italic" type="button" onClick={ChallangeFriend}>
                {t('alerts.challange')}
                <ClipboardIcon className="ml-2 h-4 w-4 sm:w-3 sm:h-3 md:w-4 md:h-4 lg:w-4 lg:h-4 xl:w-5 xl:h-5 2xl:w-5 2xl:h-5 " />
              </button>
              <div id="tooltipChalleng" className="absolute bg-[#fb923c] rounded-full p-0.5 px-2 right-8 top-[65px] pointer-events-none tooltip text-xs  ">
                {t('alerts.coppied')}
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className="bg-red-100 hidden"><input type="text" id="link" /></div>
    </div>
  );
}

export default CustomConfirmWin;
