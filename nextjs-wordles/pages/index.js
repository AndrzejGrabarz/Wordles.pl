import { useEffect, useState } from 'react';
import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import {
  // variables
  ALLOWED_LETTERS,
  WORD_DRAFT,
  ROW_COUNT,
  COL_COUNT,
  // funcitons
} from '@/utils/variables';

// let isSaving = false;
// let isDrawing = false;
// const isFetching = false;

// const Dicionary = fetch('/słownik.txt')
//   .then((response) => response.text())
//   .then((text) => text);

// const saveDicionary = async () => {
//   if (isSaving) return;
//   isSaving = true;
//   const data = await Dicionary;
//   const first = data.split('\n');
//   const second = first.filter((word) => word.length === COL_COUNT);
//   return second;
// };

// const drawFromTheDictionary = async () => {
//   if (isDrawing) return;
//   isDrawing = true;
//   const data = await saveDicionary();
//   const gameWord = data[Math.floor(Math.random() * data.length)];
//   console.log(gameWord);
//   return gameWord;
// };

const SPECIAL_KEYS = ['Enter', 'Delete', 'Backspace', 'Altgraph', 'Control'];
const DEFAULT_STATE = Array.from({ length: ROW_COUNT }, () => Array.from({ length: COL_COUNT }, () => ({ value: '', state: '' })));
const LAST_ROW = ROW_COUNT - 1;

const WORD_TO_GUESS = () => WORD_DRAFT[Math.floor(Math.random() * WORD_DRAFT.length)];

export default function Home() {
  const [board, setBoardState] = useState(DEFAULT_STATE);
  const [keyboardKey, setKeyboardKey] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [currentObject, setCurrentObject] = useState(0);
  const [word, setWord] = useState(WORD_TO_GUESS());
  const isSpecialKey = (key) => SPECIAL_KEYS.includes(key);
  function isAllowedLetter(letter) {
    return ALLOWED_LETTERS.includes(letter);
  }
  // =====================================================
  // Funkcja handleKeyPress - pozwala keyboardKey odbierać wartości z klawiatury fizycznej
  //= =====================================================
  useEffect(() => {
    const handleKeyPress = (event) => {
      const letter = event.key;
      if (isAllowedLetter(letter)) {
        setKeyboardKey(letter);
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    setKeyboardKey('');
  });

  // =====================================================
  // Aktualizowanie stanu tablicy
  //= =====================================================
  const updateBoard = (key) => {
    const updatedBoard = [...board];
    let updatedCurrentObject = currentObject;
    if (updatedCurrentObject >= COL_COUNT) updatedCurrentObject = COL_COUNT;
    if (board[currentRow][COL_COUNT - 1].value === '') {
      updatedBoard[currentRow][updatedCurrentObject] = { value: key, state: '' };
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
    setBoardState(Array.from({ length: ROW_COUNT }, () => Array.from({ length: COL_COUNT }, () => ({ value: '', state: '' }))));
    // DEFAULT_STATE z jakiegoś powdu nie podmmienia tablicy na nową
    setWord(WORD_TO_GUESS());
    setCurrentObject(0);
    setCurrentRow(0);
    setKeyboardKey('');
  }

  function giveAllLetters() {
    const USER_WORD = board[currentRow].map((letter) => letter.value);
    return USER_WORD.includes('');
  }

  function verifyState() {
    if (giveAllLetters()) {
      alert('You must give all five letters');
      return;
    }
    if (isWordCorrect()) {
      compare();
      setTimeout(() => {
        if (confirm('You win!!!!!!!! Dou you want one more game?')) {
          endGame();
        }
      }, 400);
    }
    if (!isWordCorrect() && currentRow === LAST_ROW) {
      compare();
      setTimeout(() => {
        if (confirm('You lose!!!!!!!! Dou you want one more game?')) {
          endGame();
        }
      }, 400);
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
    setKeyboardKey('');
  };

  useEffect(() => {
    if (keyboardKey === '') return;
    if (!isSpecialKey(keyboardKey)) {
      updateBoard(keyboardKey);
    } else if (keyboardKey === 'Delete' || keyboardKey === 'Backspace') {
      deleteLetter();
    } else if (keyboardKey === 'Enter') {
      verifyState();
    }
  }, [keyboardKey]);

  // fetch('C:\Users\Ja\OneDrive\Pulpit\Wordles\Wordles.pl\nowapliku.txt')
  // .then(response => response.text())
  // .then(data => {
  //   const words = data.split('\n'); // dzielimy zawartość pliku na słowa (każde słowo w nowej linii)
  //   const fiveLetterWords = words.filter(word => word.length === 5);
  //   console.log(fiveLetterWords); // wyświetlamy słowa w konsoli
  // });

  return (
    <div className="main">
      <Board board={board} />
      <Keyboard setKeyboardKey={setKeyboardKey} />
    </div>
  );
}
