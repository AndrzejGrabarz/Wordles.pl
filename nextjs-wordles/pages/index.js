import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import { useState, useEffect } from 'react';

const CORRECT_WORD = 'GORYL';

const SPECIAL_KEYS = ['Enter', 'Delete'];

const ROW_COUNT = 5;

export default function Home() {
  const [board, setBoardState] = useState(['', '', '', '', '', '']);

  const [keyboardKey, setKeyboardKey] = useState('');

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
    if (!isSpecialKey(keyboardKey)) updateBoard();
  }, [keyboardKey]);

  const updateBoard = () => {
    console.log(board);
    if (board[0].length < 5) {
      board[0] = board[0] + keyboardKey;
      setBoardState(board);
    }
  };

  //======================================================
  // Sprawdzenie checkWord
  //======================================================

  /*
   *Funkcja checkWord - Sprawdza czy wpisane przez nas słowo zgadza się ze zmienną CORRECT_WORD
    !Funkcjonalność do przegadanie
      ^Funkcja odpala się tylko przy zmianie stanu w specialKeyboardKey guzikami zpecjalnymi które zmieniają ten stan to "Enter" i "Delet"
   */

  function checkWord() {
    if (board[0] === CORRECT_WORD) {
      alert('Wygrałeś');
    } else {
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
