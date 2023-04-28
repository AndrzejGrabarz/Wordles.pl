import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import { useEffect, useState } from 'react';
import {
  CORRECT_WORD,
  ROW_COUNT,
  COL_COUNT,
  GAME_MSGS,
  isLetter,
  prepareBoard,
} from '@/utils/words';

export default function Home() {
  let [board, setBoardState] = useState(prepareBoard());
  let [keyboardPress, setKeyboardPress] = useState({
    letter: '',
    // Musimy przekazać obiekt, żeby móc klikać tą samą literę
    timestamp: null,
  });
  let [currentRow, setCurrentRow] = useState(0);

  const handleKeyPress = (event) => {
    // Wyczyść stan, żeby umożliwić retrigger na tej samej literze.
    const letter = event.key ? event.key : event.target.innerHTML;

    setKeyboardPress({
      letter: letter.toLowerCase(),
      // Musimy przekazać obiekt, żeby móc klikać tą samą literę
      timestamp: event,
    });
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      // Removing event on every click
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [keyboardPress]);

  useEffect(() => {
    if (isLetter(keyboardPress.letter)) addLetter(keyboardPress);

    if (keyboardPress.letter === 'enter') {
      board[currentRow].checked = true;
      setBoardState([...board]);
      // Sprawdzamy możliwość wygranej po przejściu do kolejnego rzędu.
      if (board[currentRow].letters.join('') === CORRECT_WORD)
        return alert(GAME_MSGS.win);
      // Na koniec informujemy o przegranej.
      if (ROW_COUNT === currentRow + 1) return alert(GAME_MSGS.loss);
      // Wiersz przesuwa się tylko jeśli gracz nie przegrał/wygrał
      setCurrentRow(currentRow + 1);
    }

    if (keyboardPress.letter === 'backspace') {
      deleteLetter();
    }
  }, [keyboardPress]);

  const addLetter = () => {
    // Dodajemy nowe litery do pustej listy
    board[currentRow].letters.push(keyboardPress.letter);
    // Upewniamy się, że nie możemy dodać więcej niż mamy kolumn
    board[currentRow].letters.slice(0, COL_COUNT);
    // Rozpakowując kopiujemy poprzez stworzenie nowego obiektu.
    // Umożliwia Reactowi porównanie dwóch wersji board
    setBoardState([...board]);
  };

  const deleteLetter = () => {
    board[currentRow].letters.splice(-1);
    setBoardState([...board]);
  };

  return (
    <>
      <div className="main">
        <Board board={board} />
        <Keyboard handleKeyPress={handleKeyPress} />
      </div>
    </>
  );
}
