import {
  useEffect, useState, useContext, useRef,
} from 'react';
import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import Nightmode from '@/components/buttons/Nightmode';
import SettingsButtonCog from '@/components/buttons/SettingButton';
import RestartGame from '@/components/buttons/RestartGame';
import Instruction from '@/components/buttons/Instruction';
import InstructionCard from '@/components/board/InstructionCard';
import wordList from '@/public/słownik_lista.json';
import CustomAlert from '@/components/alerts/CustomAlert';
import CustomConfirmWin from '@/components/alerts/CustomConfirmWin';
import CustomConfirmLose from '@/components/alerts/CustomConfirmLose';
import { ColNumContext } from '@/utils/SettingsContext';
import {
  // variables
  ALLOWED_LETTERS,
  ROW_COUNT,
  // funcitons
} from '@/utils/variables';

const SPECIAL_KEYS = ['Enter', 'Delete', 'Backspace', 'Altgraph', 'Control'];
// const DEFAULT_STATE = Array.from({ length: ROW_COUNT }, () => Array.from({ length: state }, () => ({ value: '', state: '' })));
const LAST_ROW = ROW_COUNT - 1;

// const WORD_TO_GUESS = () => WORD_DRAFT[Math.floor(Math.random() * WORD_DRAFT.length)];

export default function Home() {
  const [NumberOfColumn, setNumberOfColumn] = useContext(ColNumContext);
  const [board, setBoardState] = useState(Array.from({ length: ROW_COUNT }, () => Array.from({ length: NumberOfColumn }, () => ({ value: '', state: '' }))));
  const [currentRow, setCurrentRow] = useState(0);
  const [currentObject, setCurrentObject] = useState(0);
  const [word, setWord] = useState('');
  const [dicionary, setDicionary] = useState([]);
  const [key, setKey] = useState({ letter: '' });
  const isSpecialKey = (letter) => SPECIAL_KEYS.includes(letter);
  const isGameFinish = useRef(false);
  function isAllowedLetter(letter) {
    return ALLOWED_LETTERS.includes(letter);
  }

  const ListOfXLetterWords = wordList.strings.filter(
    (words) => words.length === NumberOfColumn,
  );

  const gameWord = ListOfXLetterWords[Math.floor(Math.random() * ListOfXLetterWords.length)];

  const handleKeyPress = (event) => {
    if (isGameFinish.current) {
      document.removeEventListener('keydown', handleKeyPress);
      return;
    }
    const letter = event.key;
    if (isAllowedLetter(letter)) {
      setKey({ letter });
    }
  };

  useEffect(() => {
    setDicionary(ListOfXLetterWords);
    setWord(gameWord);
    document.addEventListener('keydown', handleKeyPress);
  }, []);

  // =====================================================
  // Funkcja handleKeyPress - pozwala keyboardKey odbierać wartości z klawiatury fizycznej
  //= =====================================================
  // useEffect(() => {
  //   return () => {
  //     document.removeEventListener('keydown', handleKeyPress);
  //   };
  // }, [key]);

  // =====================================================
  // Aktualizowanie stanu tablicy
  //= =====================================================
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
    const USER_WORD = board[currentRow].map((letter) => letter.value); // Czasami tutaj wyrzuca błąd
    const currentRowState = board[currentRow];

    currentRowState.map((object, index) => {
      switch (true) {
        case WORD_DRAFTED[index] === USER_WORD[index]:
          object.state = 'green';
          break;
        case WORD_DRAFTED.includes(USER_WORD[index]):
          object.state = 'yellow';
          break;
        case !WORD_DRAFTED.includes(USER_WORD[index]):
          object.state = 'grey';
          break;
        default:
      }
    });
  }
  function endGame() {
    setBoardState(
      Array.from({ length: ROW_COUNT }, () => Array.from({ length: NumberOfColumn }, () => ({ value: '', state: '' }))),
    );
    // DEFAULT_STATE z jakiegoś powdu nie podmmienia tablicy na nową
    setWord(dicionary[Math.floor(Math.random() * dicionary.length)]);
    setCurrentObject(0);
    setCurrentRow(0);
  }

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
  const showConfirmWinGameWindow = () => {
    const Custom = document.getElementById('confirm-win');
    Custom.classList.toggle('showObject');
  };

  const showConfirmLoseGameWindow = () => {
    const Custom = document.getElementById('confirm-lose');
    Custom.classList.toggle('showObject');
  };

  const closeConfirmWinGameWindow = () => {
    const Custom = document.getElementById('confirm-win');
    Custom.classList.toggle('showObject');
    endGame();
    isGameFinish.current = false;
    document.addEventListener('keydown', handleKeyPress);
  };

  const closeConfirmLoseGameWindow = () => {
    const Custom = document.getElementById('confirm-lose');
    Custom.classList.toggle('showObject');
    isGameFinish.current = false;
    endGame();
    document.addEventListener('keydown', handleKeyPress);
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
      compare();
      setTimeout(() => {
        showConfirmWinGameWindow();
        isGameFinish.current = true;
      }, 2200);
    }
    if (!isWordCorrect() && currentRow === LAST_ROW) {
      compare();
      setTimeout(() => {
        showConfirmLoseGameWindow();
        isGameFinish.current = true;
      }, 2200);
    } else {
      compare();
    }
    setCurrentRow(currentRow + 1);
    setCurrentObject(0);
  }

  // =====================================================
  // Sprawdzenie checkWord
  // =====================================================
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

  return (
    <div id="main" className="flex items-center justify-center flex-col p-2">
      <div className="flex items-center justify-center w-2/5   my-5 rounded-md">
        <div className="flex my-4">
          <Nightmode />
          <RestartGame
            setCurrentRow={setCurrentRow}
            setCurrentObject={setCurrentObject}
            setBoardState={setBoardState}
            setWord={setWord}
            gameWord={gameWord}
            ROW_COUNT={ROW_COUNT}
            NumberOfColumn={NumberOfColumn}
          />
          <Instruction />
          <SettingsButtonCog />
        </div>
      </div>
      <div className="relative">
        <Board board={board} />
        <div id="letter-alert" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium text-center">
          <CustomAlert text="You must give all five letters" />
        </div>
        <div id="dicionary-alert" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium text-center">
          <CustomAlert text="Missing from the dictionary" />
        </div>
        <div id="confirm-win" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium text-center">
          <CustomConfirmWin text="You win!!!" />
          <div className="flex justify-center">
            <button onClick={closeConfirmWinGameWindow} className="font-mono my-4  py-3 px-5 bg-green-400 rounded-md text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-xl" type="button">Try again</button>
          </div>
        </div>
        <div id="confirm-lose" className="bg-white drop-shadow-md absolute left-0 top-0 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 showObject rounded-md font-medium  text-center">
          <CustomConfirmLose word={word} text="You lose :(" />
          <div className="flex justify-center">
            <button onClick={closeConfirmLoseGameWindow} className="font-mono py-3 px-5 mb-4 bg-green-400 rounded-md text-sm sm:text-md md:text-lg lg:text-lg xl:text-xl 2xl:text-xl" type="button">Try again</button>
          </div>
        </div>
      </div>
      <InstructionCard />
      <Keyboard setKey={setKey} />
    </div>
  );
}
