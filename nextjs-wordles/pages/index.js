import Board from "@/components/board/Board";
import Keyboard from "@/components/keyboard/Keyboard";
import { useEffect, useState } from "react";
import keycode from 'keycode';


const CORRECT_WORD = "GORYL"

const SPECIAL_KEYS = ["Enter","ENTER",  "Delete", 'DELETE', 'BACKSPACE']

const ROW_COUNT = 5;
const COL_COUNT = 5;

const DEFAULT_STATE = ['', '', '', '', '', '',]

export default function Home() {
  
  let [board, setBoardState] = useState(DEFAULT_STATE);

  const [keyboardKey, setKeboardKey] = useState('');
  const [currentRow, setCurrentRow] = useState(0);

  const isSpecialKey = key => SPECIAL_KEYS.includes(key);

//======================================================
// Funkcja handleKeyPress - pozwala keyboardKey odbierać wartości z klawiatury fizycznej
//======================================================

useEffect(() => {
  const handleKeyPress = (event) => {
    console.log("Naciśnięto klawisz: " + event.key);
    setKeboardKey(event.key.toUpperCase())
  }
  document.addEventListener("keydown", handleKeyPress)
  setKeboardKey("")
})

//======================================================
// Aktualizowanie stanu tablicy
//======================================================

  useEffect(() => {

    
      console.log(board)

    if(!isSpecialKey(keyboardKey)) {
      updateBoard(keyboardKey);
    }else  if(keyboardKey === "Delete" ||keyboardKey ===  "DELETE" || keyboardKey ===  "BACKSPACE") {
      deleteLetter()
    }else if (keyboardKey === 'Enter' ||keyboardKey ===  "ENTER") {
      verifyState();
    }
  },[keyboardKey])

  const updateBoard = (key) => {
    let updatedBoard = [...board];
    if (board[currentRow].length < 5) {
      updatedBoard[currentRow] = board[currentRow] + key;
    }
    setBoardState(updatedBoard);
  }

  function verifyState() {
    if(isWordCorrect()) {
      communicateState('win')
    }

    if(!isWordCorrect()) {
      communicateState('lose')
    }
    setCurrentRow(currentRow + 1)
  }
//======================================================
// Sprawdzenie checkWord
//======================================================
  const deleteLetter = () =>{
    let updatedBoard = [...board];
    console.log(updatedBoard)
    updatedBoard[currentRow]= updatedBoard[currentRow].slice(0, -1)
    setBoardState(updatedBoard);
    setKeboardKey("")
  }

//======================================================
// Sprawdzenie checkWord
//======================================================
function isWordCorrect() {
  return board[currentRow] === CORRECT_WORD
}

function communicateState(stateName) {
  if (stateName === 'win') {
    alert('Wygrałeś')
  }
  if (stateName === 'lose') {
    alert('Nie wygrałeś')
  }
} 

  return (
    <>
      <div className="main">
        <Board board={board}/>
        <Keyboard setKeyboardKey={setKeboardKey}/>
      </div>
    </>
  )
}
