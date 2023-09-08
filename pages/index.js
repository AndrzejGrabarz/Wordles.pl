import {
  useEffect, useState, useContext, useRef,
} from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import queryString from 'query-string';
import Poland from '@/public/Poland.png';
import UK from '@/public/UK.png';
import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import Nightmode from '@/components/buttons/Nightmode';
import SettingsButton from '@/components/buttons/SettingButton';
import RestartGame from '@/components/buttons/RestartGame';
import Instruction from '@/components/buttons/Instruction';
import InstructionCard from '@/components/board/InstructionCard';
import Stopwatch from '@/components/boardparts/stopwatch';
import wordListPolish from '@/public/słownik_lista.json';
import wordListEnglish from '@/public/english_dicionary.json';
import CustomAlert from '@/components/alerts/CustomAlert';
import CustomConfirmWin from '@/components/alerts/CustomConfirmWin';
import CustomConfirmLose from '@/components/alerts/CustomConfirmLose';
import { ColNumContext } from '@/utils/SettingsContext';
import {
  ALLOWED_LETTERS,
  ROW_COUNT,
} from '@/utils/variables';

const SPECIAL_KEYS = ['Enter', 'Delete', 'Backspace', 'Altgraph', 'Control'];
const LAST_ROW = ROW_COUNT - 1;

export default function Home() {
  const [NumberOfColumn, setNumberOfColumn] = useContext(ColNumContext);
  const [board, setBoardState] = useState(Array.from({ length: ROW_COUNT }, () => Array.from({ length: NumberOfColumn }, () => ({ value: '', state: '' }))));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentObject, setCurrentObject] = useState(0);
  const [word, setWord] = useState('');
  const [dicionary, setDicionary] = useState([]);
  const [key, setKey] = useState({ letter: '' });
  const [timeScoreText, setTimeScoreText] = useState('00:00:00');
  const [intervalId, setIntervalId] = useState(null);
  const isSpecialKey = (letter) => SPECIAL_KEYS.includes(letter);
  // useRef
  const isGameFinish = useRef(false);
  const language = useRef(false);
  const oddUrl = useRef(false);

  // Instrucion Card
  const divBoardRef = useRef();
  const instructionRef = useRef();
  const keyboardRef = useRef();
  const setUnderBoardRef = useRef();
  const flagsRef = useRef();

  //Night Mode
  const mainRef = useRef();
  const greyBackground1Ref = useRef();
  const greyBackground2Ref = useRef();
  // const instructionRef = useRef();
  const timerStartButtomRef = useRef();
  const timerStopButtomRef = useRef()
  const timerResetButtomRef = useRef()
  const attempts1Ref = useRef();
  const attempts2Ref = useRef();
  const timeRef = useRef();


  // useRef
  const router = useRouter();
  function isAllowedLetter(letter) {
    return ALLOWED_LETTERS.includes(letter);
  }
  const CryptoJS = require('crypto-js');

  const { t } = useTranslation();
  let stoper = 0;

  const ListOfXPolishLetterWords = wordListPolish.strings.filter(
    (words) => words.length === NumberOfColumn,
  );

  const ListOfXEnglishLetterWords = wordListEnglish.strings.filter(
    (words) => words.length === NumberOfColumn,
  );

  const gameWord = ListOfXPolishLetterWords[Math.floor(Math.random() * ListOfXPolishLetterWords.length)];
  const gameWordEng = ListOfXEnglishLetterWords[Math.floor(Math.random() * ListOfXPolishLetterWords.length)];

  const showConfirmGameWindow = (id) => {
    const Custom = document.getElementById(id);
    Custom.classList.toggle('showObject');
  };
  useEffect(() => {
    const URL = document.location;
    const parsed = queryString.parse(URL.search);
    if (URL.href === 'https://www.wordles.pl/') {
      setDicionary(ListOfXPolishLetterWords);
      setWord(gameWord);
    } else if (URL.href === 'https://www.wordles.pl/en') {
      setDicionary(ListOfXEnglishLetterWords);
      setWord(gameWordEng);
      language.current = true;
    } else if (URL.href.includes('word') && URL.href.includes('https://www.wordles.pl/') && URL.href.includes('false')) {
      const secretKey = 'secret_key';
      const decryptedBytes = CryptoJS.AES.decrypt(parsed.word, secretKey);
      const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
      setDicionary(ListOfXPolishLetterWords);
      setWord(decryptedMessage);
    } else if (URL.href.includes('word') && URL.href.includes('https://www.wordles.pl/en')) {
      const secretKey = 'secret_key';
      const decryptedBytes = CryptoJS.AES.decrypt(parsed.word, secretKey);
      const decryptedMessage = decryptedBytes.toString(CryptoJS.enc.Utf8);
      language.current = true;
      setWord(decryptedMessage);
      setDicionary(ListOfXEnglishLetterWords);
    } else if (URL.href.includes('false')) {
      if (oddUrl.current === false) {
        showConfirmGameWindow('confirm-win');
        setTimeScoreText(parsed.time);
        setCurrentRow(parsed.score);
        language.current = false;
        setDicionary(ListOfXPolishLetterWords);
        oddUrl.current = true;
      }
    } else if (URL.href.includes('true')) {
      if (oddUrl.current === false) {
        showConfirmGameWindow('confirm-win');
        setTimeScoreText(parsed.time);
        setCurrentRow(parsed.score);
        language.current = true;
        setDicionary(ListOfXEnglishLetterWords);
        oddUrl.current = true;
      }
    }
  }, []);
  useEffect(() => {
    function handleKeyPress(event) {
      if (isGameFinish.current) {
        document.removeEventListener('keydown', handleKeyPress);
        return;
      }
      const letter = event.key;
      if (isAllowedLetter(letter)) {
        setKey({ letter });
      }
    }

    // Dodaj nasłuchiwanie na zdarzenie wciśnięcia klawisza
    document.addEventListener('keydown', handleKeyPress);

    // Opcjonalnie: usuń nasłuchiwanie po odmontowaniu komponentu
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [key]);

  const updateBoard = (letter) => {
    const updatedBoard = [...board];
    let updatedCurrentObject = currentObject;
    if (updatedCurrentObject >= NumberOfColumn - 1) { updatedCurrentObject = NumberOfColumn - 1; }
    if (board[currentRow][NumberOfColumn - 1].value === '') {
      updatedBoard[currentRow][updatedCurrentObject] = {
        value: letter,
        state: '',
      };
    }
    setBoardState(updatedBoard);
    setCurrentObject(updatedCurrentObject + 1);
  };

  function isWordCorrect() {
    const USER_WORD = board[currentRow].map((letter) => letter.value).join('');
    return USER_WORD === word;
  }

  function compare() {
    const WORD_DRAFTED = word.split('');
    const USER_WORD = board[currentRow].map((letter) => letter.value);
    const currentRowState = board[currentRow];

    currentRowState.map((object, index) => {
      const elementStyle = window.getComputedStyle(document.getElementById(object.value));
      const currentBackgroundColor = elementStyle.backgroundColor;
      switch (true) {
        case WORD_DRAFTED[index] === USER_WORD[index]:
          object.state = 'green';
          document.getElementById(object.value).style.backgroundColor = 'green';
          break;
        case WORD_DRAFTED.includes(USER_WORD[index]):
          object.state = 'yellow';
          if (currentBackgroundColor === 'rgb(0, 128, 0)') {
            document.getElementById(object.value).style.backgroundColor = 'green';
          } else {
            document.getElementById(object.value).style.backgroundColor = 'yellow';
          }
          break;
        case !WORD_DRAFTED.includes(USER_WORD[index]):
          object.state = 'grey';
          document.getElementById(object.value).style.backgroundColor = '#6b7280';
          break;
        default:
      }
    });
  }

  function endGame() {
    setBoardState(
      Array.from({ length: ROW_COUNT }, () => Array.from({ length: NumberOfColumn }, () => ({ value: '', state: '' }))),
    );
    if (language.current === false) {
      setDicionary(ListOfXPolishLetterWords);
      setWord(ListOfXPolishLetterWords[Math.floor(Math.random() * ListOfXPolishLetterWords.length)]);
    } else {
      setDicionary(ListOfXEnglishLetterWords);
      setWord(ListOfXEnglishLetterWords[Math.floor(Math.random() * ListOfXPolishLetterWords.length)]);
    }
    oddUrl.current = false;
    setCurrentObject(0);
    setCurrentRow(0);
    setTimeScoreText('00:00:00');
    document.getElementById('time').innerHTML = '00:00:00';
    const KeyboardAnimation = document.querySelectorAll('#q, #w, #e, #r, #t, #y, #u, #i, #o, #p,#a, #s, #d, #f, #g, #h, #j, #k, #l,#z, #x, #c, #v, #b, #n, #m, #ą, #ć, #ę, #ł, #ń, #ó, #ś, #ź, #ż');

    KeyboardAnimation.forEach((id) => {
      id.style.backgroundColor = '#e1e0e0';
    });
    setKey({ letter: '' });
    isGameFinish.current = false;
  }
  // Timer Section
  const updateTimer = () => {
    stoper += 1;
    const minutes = Math.floor(stoper / 6000);
    const seconds = Math.floor((stoper % 6000) / 100);
    const milliseconds = Math.floor(stoper % 100);
    document.getElementById('time').innerHTML = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}:${milliseconds.toString().padStart(2, '0')}`;
  };

  const startAndStop = () => {
    if (intervalId === null) {
      setIntervalId(setInterval(updateTimer, 10));
    } else {
      clearInterval(intervalId);
      setIntervalId(null);
      setTimeScoreText(document.getElementById('time').innerHTML);
    }
  };
  const reset = () => {
    clearInterval(intervalId);
    setIntervalId(null);
    stoper = 0;
    document.getElementById('time').innerHTML = '00:00:00';
  };

  const pause = () => {
    if (intervalId !== null) {
      clearInterval(intervalId);
      setIntervalId(null);
    }
  };

  // Timer Section

  function giveAllLetters() {
    const USER_WORD = board[currentRow].map((letter) => letter.value);
    return USER_WORD.includes('');
  }

  const showAlertNotEnoughLetters = () => {
    const Custom = document.getElementById('letter-alert');
    Custom.classList.toggle('showObject');
  };

  const showAlertMissingFromTheDicionary = () => {
    const Custom = document.getElementById('dicionary-alert');
    Custom.classList.toggle('showObject');
  };

  // ===================== Confirm Section

  const closeConfirmGameWindow = (id) => {
    const Custom = document.getElementById(id);
    Custom.classList.toggle('showObject');
    endGame();
  };
  // ===================== Confirm Section

  function verifyState() {
    if (giveAllLetters()) {
      showAlertNotEnoughLetters();
      setTimeout(() => {
        showAlertNotEnoughLetters();
      }, 2000);
      return;
    }
    // Sprawdzenie
    const typedWord = board[currentRow].map((letter) => letter.value).join('');

    if (!dicionary.includes(typedWord)) {
      showAlertMissingFromTheDicionary();
      setTimeout(() => {
        showAlertMissingFromTheDicionary();
      }, 2000);
      return;
    }

    if (isWordCorrect()) {
      if (intervalId !== null) {
        startAndStop();
      }
      compare();
      setTimeout(() => {
        showConfirmGameWindow('confirm-win');
        isGameFinish.current = true;
      }, 2200);
    }
    if (!isWordCorrect() && currentRow === LAST_ROW) {
      if (intervalId !== null) {
        startAndStop();
      }
      compare();
      setTimeout(() => {
        showConfirmGameWindow('confirm-lose');
        isGameFinish.current = true;
      }, 2200);
    } else {
      compare();
    }
    setCurrentRow(currentRow + 1);
    setCurrentObject(0);
  }

  const deleteLetter = () => {
    const updatedBoard = [...board];
    let objcetToDelete = currentObject - 1;
    if (objcetToDelete < 0) objcetToDelete = 0;
    updatedBoard[currentRow][objcetToDelete].value = '';
    setBoardState(updatedBoard);
    setCurrentObject(objcetToDelete);
  };

  useEffect(() => {
    if (key.letter === '') return;
    if (!isSpecialKey(key.letter)) {
      updateBoard(key.letter);
    } else if (key.letter === 'Delete' || key.letter === 'Backspace') {
      deleteLetter();
    } else if (key.letter === 'Enter') {
      verifyState();
    }
  }, [key]);

  const Polish = () => {
    router.push(router.route, router.asPath, {
      locale: 'pl',
    });
    document.getElementById('plFlag').blur();
    language.current = false;
    setDicionary(ListOfXPolishLetterWords);
    setWord(gameWord);
    endGame();
  };
  const English = () => {
    router.push(router.route, router.asPath, {
      locale: 'en',
    });
    language.current = true;
    document.getElementById('enFlag').blur();
    setDicionary(ListOfXEnglishLetterWords);
    setWord(gameWordEng);
    endGame();
  };
  return (
    <div id="main" ref={mainRef} className="flex items-center justify-center flex-col min-h-screen p-2">
      <div className="flex items-center justify-center w-2/5   my-5 rounded-md">
        <div className="flex my-4">
          <Nightmode 
            mainRef={mainRef}
            greyBackground1Ref={greyBackground1Ref}
            greyBackground2Ref={greyBackground2Ref}
            instructionRef={instructionRef}
            timerStartButtomRef={timerStartButtomRef}
            timerStopButtomRef={timerStopButtomRef}
            timerResetButtomRef={timerResetButtomRef}
            attempts1Ref={attempts1Ref}
            attempts2Ref={attempts2Ref}
            timeRef={timeRef}

          />
          <Instruction
            divBoardRef={divBoardRef}
            instructionRef={instructionRef}
            keyboardRef={keyboardRef}
            setUnderBoardRef={setUnderBoardRef}
            flagsRef={flagsRef}
          />
          <SettingsButton />
        </div>
      </div>
      <div id="flags" ref={flagsRef} className="flex flex-row">
        <div className="mr-2 mb-4">
          <button id="plFlag" type="button" onClick={Polish}>
            <div id="Flaga">
              <Image
                src={Poland}
                width={35}
                height={25}
                alt="Flag of Poland"
              />
            </div>
          </button>
        </div>
        <div className="mb-4">
          <button id="enFlag" type="button" onClick={English}>
            <div id="Flaga">
              <Image
                src={UK}
                width={35}
                height={25}
                alt="Flag of England"
              />
            </div>
          </button>
        </div>
      </div>
      <div id="divBoard" ref={divBoardRef} className="relative">
        <Board board={board} />
        <div id="letter-alert" className="bg-white drop-shadow-md absolute left-0 top-0 top-2/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium text-center">
          <CustomAlert text={t('dicionaryAlerts.fiveletters')} />
        </div>
        <div id="dicionary-alert" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium text-center">
          <CustomAlert text={t('dicionaryAlerts.lackof')} />
        </div>
        <div id="confirm-win" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 rounded-md font-medium text-center showObject">
          <CustomConfirmWin text={t('alerts.win')} timeScoreText={timeScoreText} currentRow={currentRow} language={language.current} word={word} />
          <div className="flex flex-col justify-center">
            <button onClick={() => closeConfirmGameWindow('confirm-win')} className="mx-auto font-mono my-2 sm:my-4 px-4 py-3 bg-green-400 rounded-md text-xs sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-xl" type="button">{t('alerts.button')}</button>
          </div>
        </div>
        <div id="confirm-lose" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium  text-center">
          <CustomConfirmLose word={word} text={t('alerts.lose')} />
          <div className="flex justify-center">
            <button onClick={() => closeConfirmGameWindow('confirm-lose')} className="font-mono py-3 px-5 mb-4 bg-green-400 rounded-md text-xs sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-xl" type="button">{t('alerts.button')}</button>
          </div>
        </div>
      </div>
      <RestartGame
        setCurrentRow={setCurrentRow}
        setCurrentObject={setCurrentObject}
        setBoardState={setBoardState}
        setWord={setWord}
        NumberOfColumn={NumberOfColumn}
        ROW_COUNT={ROW_COUNT}
        dicionary={dicionary}
      />
      <div id="divUnderBoard" ref={setUnderBoardRef} className=" grid grid-cols-[1fr_1fr] gap-4">
        <Stopwatch start={startAndStop} pause={pause} reset={reset}  timerStartButtomRef={timerStartButtomRef}
            timerStopButtomRef={timerStopButtomRef}
            timerResetButtomRef={timerResetButtomRef}
            timeRef={timeRef} />
        <div className="flex flex-col items-center justify-center text-sm  sm:text-lg md:text-lg lg:text-xl xl:text-xl border rounded">
          <div id="attempts1" ref={attempts1Ref }>{t('stopwatch.attempts')}</div>
          <div id="attempts2" ref={attempts2Ref} className="flex">{currentRow}</div>
        </div>
      </div>
      <InstructionCard instructionRef={instructionRef} greyBackground1Ref={greyBackground1Ref}
            greyBackground2Ref={greyBackground2Ref}/>
      <Keyboard setKey={setKey} keyboardRef={keyboardRef} />
    </div>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}
