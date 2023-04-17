import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import { useState, useEffect } from 'react';

const CORRECT_WORD = 'GORYL';

const SPECIAL_KEYS = ['Enter', 'Delete'];

// 
const ROW_COUNT = 5;
const COL_COUNT = 5;

const DEFAULT_STATE = ['', '', '', '', '', ''];

export default function Home() {
  let [board, setBoardState] = useState(DEFAULT_STATE);

  const [keyboardKey, setKeyboardKey] = useState('');
  const [currentRow, setCurrentRow] = useState(0);

  const isSpecialKey = (key) => SPECIAL_KEYS.includes(key);

  //======================================================
  // Funkcja handleKeyPress - pozwala keyboardKey odbierać wartości z klawiatury fizycznej
  //======================================================

  useEffect(() => {
    const handleKeyPress = (event) => {
      console.log('Naciśnięto klawisz: ' + event.key);
      setKeyboardKey(event.key.toUpperCase());
    };

    document.addEventListener('keypress', handleKeyPress);
  });

  //======================================================
  // Aktualizowanie stanu tablicy
  //======================================================

  useEffect(() => {
    if (!isSpecialKey(keyboardKey)) {
      updateBoard(keyboardKey);
    } else {
      verifyState();
    }
  }, [keyboardKey]);

  const updateBoard = (key) => {
    let updatedBoard = [...board];

    if (board[currentRow].length < 5) {
      updatedBoard[currentRow] = board[currentRow] + key;
    }

    setBoardState(updatedBoard);
  };

  function verifyState() {
    if (keyboardKey === 'Enter' && isWordCorrect()) {
      communicateState('win');
    }
    if (currentRow === 4 && keyboardKey === 'Enter' && !isWordCorrect()) {
      communicateState('lose');
    }

    setCurrentRow(currentRow + 1);
  }

  //======================================================
  // Sprawdzenie checkWord
  //======================================================

  /*
   *Funkcja checkWord - Sprawdza czy wpisane przez nas słowo zgadza się ze zmienną CORRECT_WORD
    !Funkcjonalność do przegadanie
      ^Funkcja odpala się tylko przy zmianie stanu w specialKeyboardKey guzikami zpecjalnymi które zmieniają ten stan to "Enter" i "Delet"
   */

  function isWordCorrect() {
    return board[currentRow] === CORRECT_WORD;
  }

  function communicateState(stateName) {
    if (stateName === 'win') {
      alert('Wygrałeś');
    }
    if (stateName === 'lose') {
      alert('Nie wygrałeś');
    }
  }

  return (
    <>
      <div className="main">
        <Board board={board} />
        <Keyboard setKeyboardKey={setKeyboardKey} />
      </div>
    </>
  );
}
