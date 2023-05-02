import Board from "@/components/board/Board";
import Keyboard from "@/components/keyboard/Keyboard";
import { useEffect, useState } from "react";
import { ALLOWED_LETTERS,  WORD_TO_GUESS} from "@/utils/variables";

const SPECIAL_KEYS = ["Enter","ENTER",  "Delete", 'DELETE', 'BACKSPACE', "ALTGRAPH", "CONTROL"]

const ROW_COUNT = 6;
const COL_COUNT = 5;

let DEFAULT_STATE = Array.from({length: ROW_COUNT}, () => Array.from({length: COL_COUNT}, () => ({value:"", state:""})))
//let DEFAULT_STATE = Array.from((Array(ROW_COUNT)), () => Array.from((Array(COL_COUNT), () => FINAL_VALUE_1))

export default function Home() {
  
  let [board, setBoardState] = useState(DEFAULT_STATE );

  const [keyboardKey, setKeboardKey] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [currentObject, setCurrentObject] = useState(0);
  
  const isSpecialKey = key => SPECIAL_KEYS.includes(key);
  function isAllowedLetter(letter) {
    return ALLOWED_LETTERS.includes(letter)
  }
//======================================================
// Funkcja handleKeyPress - pozwala keyboardKey odbierać wartości z klawiatury fizycznej
//======================================================
useEffect(() => {
  const handleKeyPress = (event) => {
    // if( event.altKey) {
    //   document.removeEventListener("keydown", handleKeyPress)
    // }else {
    //   console.log("Naciśnięto klawisz: " + event.key);
    //   setKeboardKey(event.key.toUpperCase())
    // }
    const letter = event.key
    if(isAllowedLetter(letter)) {
      console.log("Naciśnięto klawisz: " + letter);
     setKeboardKey(letter.toUpperCase())
    }else {
      console.log("Nie ma")
    } 
  }
  document.addEventListener("keydown", handleKeyPress)
  setKeboardKey("")
})

//======================================================
// Aktualizowanie stanu tablicy
//======================================================

  useEffect(() => {
    if(keyboardKey === '') return 

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
    let uptatedCurrentObject = currentObject

    if(uptatedCurrentObject >= 5) return uptatedCurrentObject = 5
    if (board[currentRow][4].value === "") {
      updatedBoard[currentRow][uptatedCurrentObject] = {value: key, state:""}
    }

    setBoardState(updatedBoard);
    setCurrentObject(uptatedCurrentObject + 1)
  }

  function verifyState() {
    if(isWordCorrect()) {
       compare()
       setTimeout(()=>{
        if(confirm("You win!!!!!!!! Dou you want one more game?")){
          endgame()
        }else{
          alert("You sure?")
        }
       },500)
    }

    if(!isWordCorrect()) {
      communicateState('lose')
      compare()
    }
    setCurrentRow(currentRow + 1)
    setCurrentObject(0)
    console.log(board)
    console.log(board[currentRow].value)
  }
//======================================================
// Sprawdzenie checkWord
//======================================================
  const deleteLetter = () =>{
    let updatedBoard = [...board];
    let objcetToDelete = currentObject -1
    if(objcetToDelete < 0) return objcetToDelete = 0
    updatedBoard[currentRow][objcetToDelete].value = "";

    setBoardState(updatedBoard);
    setCurrentObject(objcetToDelete)
    setKeboardKey("")
  }
//======================================================
// Sprawdzenie checkWord
//======================================================
function isWordCorrect() {
  let USER_WORD = board[currentRow].map(letter => letter.value).join("")
console.log(USER_WORD)
  return USER_WORD === WORD_TO_GUESS
}
//======================================================
// Porównanie słowa
//======================================================
function compare(){
  let WORD_DRAFTED = WORD_TO_GUESS.split('')
  let USER_WORD = board[currentRow].map(letter => letter.value)

  let currentRowState = board[currentRow]
  
  currentRowState.map((object,index) => {
    if(WORD_DRAFTED[index] === USER_WORD[index]) {
      return object.state = "green"
    }else if (WORD_DRAFTED.includes(USER_WORD[index])){
      return object.state = "yellow"
    }else if(!WORD_DRAFTED.includes(USER_WORD[index])){
      return object.state = "grey"
    }
  })
}

function communicateState(stateName) {
  if (stateName === 'win') {
    alert('Wygrałeś')
  }
  if (stateName === 'lose') {
    alert('Nie wygrałeś')
  }
} 
function endgame () {
  window.location.reload();
}

  return (
    <>
      <div className="main">
        <Board board={board} />
        <Keyboard setKeyboardKey={setKeboardKey} />
      </div>
    </>
  )
}
