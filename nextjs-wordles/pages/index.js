import Board from "@/components/board/Board";
import Keyboard from "@/components/keyboard/Keyboard";
import { useState } from "react";


const CORRECT_WORD = "GORYL"

const SPECIAL_KEYS = ["Enter", "Delete"]

const ROW_COUNT = 5;
const COL_COUNT = 5;

const DEFAULT_STATE = ['', '', '', '', '', '',]

export default function Home() {
  
  let [board, setBoardState] = useState(DEFAULT_STATE);

  const [keyboardKey, setKeboardKey] = useState('');
  const [currentRow, setCurrentRow] = useState(0);

  return (
    <>
      <div className="main">
        <Board board={board}/>
        <Keyboard setKeyboardKey={setKeboardKey}/>
      </div>
    </>
  )
}
