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

  const [keyboardKey, setKeboardKey] = useState('');
  const [currentRow, setCurrentRow] = useState(0);

  useEffect(() => {
    const handleKeyPress = (event) => {
      setKeboardKey(event.key.toUpperCase());
    };
    document.addEventListener('keydown', handleKeyPress);
  });

  useEffect(() => {
    if (isLetter(keyboardKey)) updateBoard(keyboardKey);
    if (keyboardKey.toLowerCase() === 'enter') {
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
  }, [keyboardKey]);

  const updateBoard = () => {
    // Dodajemy nowe litery do pustej listy
    board[currentRow].letters.push(keyboardKey);
    // Upewniamy się, że nie możemy dodać więcej niż mamy kolumn
    board[currentRow].letters.slice(0, COL_COUNT);
    // Rozpakowując kopiujemy poprzez stworzenie nowego obiektu.
    // Umożliwia Reactowi porównanie dwóch wersji board
    setBoardState([...board]);
  };

  return (
    <>
      <div className="main">
        <Board board={board} />
        <Keyboard setKeyboardKey={setKeboardKey} />
      </div>
    </>
  );
}
