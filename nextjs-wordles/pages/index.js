import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import { useState } from 'react';

export default function Home() {
  const [keyboardKey, setKeyboardKey] = useState(() => {
    return '';
  });

  const [specialKeyboardKey, setSpecialKeyboardKey] = useState(''); //Enter i Delete

  return (
    <>
      <div className="main">
        <Board
          keyboardKey={keyboardKey}
          setKeyboardKey={setKeyboardKey}
          specialKeyboardKey={specialKeyboardKey}
          setSpecialKeyboardKey={setSpecialKeyboardKey}
        />
        <Keyboard
          keyboardKey={keyboardKey}
          setKeyboardKey={setKeyboardKey}
          specialKeyboardKey={specialKeyboardKey}
          setSpecialKeyboardKey={setSpecialKeyboardKey}
        />
      </div>
    </>
  );
}
