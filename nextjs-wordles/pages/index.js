import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import { useEffect, useState } from 'react';

import {
  CORRECT_WORD,
  SPECIAL_KEYS,
  ROW_COUNT,
  COL_COUNT,
} from '@/utils/words';

function prepareBoard(rowCount, colCount) {
  return [...Array(rowCount).keys()].map((_) => {
    return {
      userTypedWord: '',
      lettersWithState: [...Array(colCount).keys()].map((_) => {
        return { letter: '', state: 'gray' };
      }),
    };
  });
}

export default function Home() {
  let [board, setBoardState] = useState(prepareBoard(ROW_COUNT, COL_COUNT));

  const [keyboardKey, setKeboardKey] = useState('');
  const [currentRow, setCurrentRow] = useState(0);

  const isSpecialKey = (key) => SPECIAL_KEYS.includes(key.toLowerCase());

  useEffect(() => {
    const handleKeyPress = (event) => {
      setKeboardKey(event.key.toUpperCase());
    };
    document.addEventListener('keydown', handleKeyPress);
  });

  useEffect(() => {
    if (!isSpecialKey(keyboardKey)) updateBoard(keyboardKey);
    if (keyboardKey.toLowerCase() === 'backspace') deleteLetter();
    if (keyboardKey.toLowerCase() === 'enter') {
      if (ROW_COUNT === board.length) communicateState();
      if (ROW_COUNT !== board.length) setCurrentRow(currentRow + 1);
    }
    setKeboardKey('');
  }, [keyboardKey]);

  const updateBoard = (key) => {
    console.log(board);
    let updatedBoard = [...board]; // albo JSON.parse(JSON.stringify(board));
    let typedWord = updatedBoard[currentRow].userTypedWord;
    if (typedWord.length < COL_COUNT + 1) {
      updatedBoard[currentRow].userTypedWord += key;
      updatedBoard[currentRow].lettersWithState = colorRow(typedWord);
    }
    console.log(updatedBoard);
    setBoardState(updatedBoard);
  };

  function colorRow(typedWord) {
    return typedWord
      .split('')
      .map((letter, index) => checkState(typedWord, letter, index));
  }

  const deleteLetter = () => {
    let updatedBoard = [...board];
    updatedBoard[currentRow] = updatedBoard[currentRow].slice(0, -1);
    setBoardState(updatedBoard);
  };

  function communicateState() {
    alert(isWordCorrect() ? 'Wygrana' : 'Niestety przegrales');
  }

  function isWordCorrect() {
    return board[currentRow].lettersWithState === CORRECT_WORD;
  }

  function checkState(typedWord, letter, index) {
    let state = 'gray';
    if (typedWord[index] === CORRECT_WORD[index]) {
      state = 'correct';
      return { letter, state };
    }
    if (typedWord.includes(letter)) {
      state = 'misplaced';
      return { letter, state };
    }
    return { letter, state };
  }

  return (
    <>
      <div className="main">
        <Board board={board} />
        <Keyboard setKeyboardKey={setKeboardKey} />
      </div>
    </>
  );
}
