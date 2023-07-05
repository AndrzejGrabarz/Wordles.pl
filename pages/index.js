import { useEffect, useState, useContext } from 'react';
import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import Nightmode from '@/components/buttons/Nightmode';
import SettingsButtonCog from '@/components/buttons/SettingButton';
import RestartGame from '@/components/buttons/RestartGame';
import Instruction from '@/components/buttons/Instruction';
import InstructionCard from '@/components/board/InstructionCard';
import wordList from '@/public/słownik_lista.json';
import { ColNumContext, useAppContext } from '@/utils/SettingsContext';
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
  function isAllowedLetter(letter) {
    return ALLOWED_LETTERS.includes(letter);
  }

  const ListOfXLetterWords = wordList.strings.filter(
    (words) => words.length === NumberOfColumn,
  );

  const gameWord = ListOfXLetterWords[Math.floor(Math.random() * dicionary.length)];

  useEffect(() => {
    setDicionary(ListOfXLetterWords);
    setWord(gameWord);
  }, []);

  // =====================================================
  // Funkcja handleKeyPress - pozwala keyboardKey odbierać wartości z klawiatury fizycznej
  //= =====================================================
  useEffect(() => {
    const handleKeyPress = (event) => {
      const letter = event.key;
      if (isAllowedLetter(letter)) {
        setKey({ letter });
      }
    };
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [key]);

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

  function verifyState() {
    if (giveAllLetters()) {
      alert('You must give all five letters');
      return;
    }
    // Sprawdzenie
    const typedWord = board[currentRow].map((letter) => letter.value).join('');
    if (!dicionary.includes(typedWord)) {
      alert('Słowo nie wystepuje w słowniku');
      return;
    }

    if (isWordCorrect()) {
      compare();
      setTimeout(() => {
        if (confirm('You win!!!!!!!! Dou you want one more game?')) {
          endGame();
        }
      }, 2200);
    }
    if (!isWordCorrect() && currentRow === LAST_ROW) {
      compare();
      setTimeout(() => {
        if (confirm('You lose!!!!!!!! Dou you want one more game?')) {
          endGame();
        }
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
      <Board board={board} />
      <InstructionCard />
      <Keyboard setKey={setKey} />
    </div>
  );
}
