import { useEffect, useState } from 'react';
import Board from '@/components/board/Board';
import Keyboard from '@/components/keyboard/Keyboard';
import { 
  //variables
  ALLOWED_LETTERS,
  WORD_TO_GUESS,
  ROW_COUNT,
  COL_COUNT,
  //funcitons

} from '@/utils/variables';

const SPECIAL_KEYS = ['Enter', 'ENTER', 'Delete', 'DELETE', 'BACKSPACE', 'ALTGRAPH', 'CONTROL']
let DEFAULT_STATE = Array.from({ length: ROW_COUNT }, () => Array.from({ length: COL_COUNT }, () => ({ value: '', state: '' })))
let DEFAULT_STATE_2 = Array.from({ length: ROW_COUNT }, () => Array.from({ length: COL_COUNT }, () => ({ value: '', state: '' })))
//DEFAULT_STATE_2 - z jakiegoś powodu endGame() nie reguje na setKeyboardKey(DEFAULT_STATE) ale na DEFAULT_STATE_2 już tak 
//= let DEFAULT_STATE = Array.from((Array(ROW_COUNT)), () => Array.from((Array(COL_COUNT), () => FINAL_VALUE_1))
const LAST_ROW = ROW_COUNT - 1;

export default function Home() {
  const [board, setBoardState] = useState(DEFAULT_STATE);
  const [keyboardKey, setKeyboardKey] = useState('');
  const [currentRow, setCurrentRow] = useState(0);
  const [currentObject, setCurrentObject] = useState(0);
  const isSpecialKey = (key) => SPECIAL_KEYS.includes(key);
  function isAllowedLetter(letter) {
    return ALLOWED_LETTERS.includes(letter)
  }
//= =====================================================
// Funkcja handleKeyPress - pozwala keyboardKey odbierać wartości z klawiatury fizycznej
//= =====================================================
useEffect(() => {
    const handleKeyPress = (event) => {
      const letter = event.key
      if (isAllowedLetter(letter)) {
        setKeyboardKey(letter.toUpperCase())
      }
    }
    document.addEventListener('keydown', handleKeyPress)
    setKeyboardKey('')
})

//= =====================================================
// Aktualizowanie stanu tablicy
//= =====================================================

  useEffect(() => {
    if (keyboardKey === '') return;

    if (!isSpecialKey(keyboardKey)) {
      updateBoard(keyboardKey);
    } else  if(keyboardKey === 'Delete' || keyboardKey === 'DELETE' || keyboardKey === 'BACKSPACE') {
      deleteLetter()
    } else if (keyboardKey === 'Enter' || keyboardKey === 'ENTER') {
      verifyState();
    }
  },[keyboardKey])

  const updateBoard = (key) => {
    const updatedBoard = [...board];
    let updatedCurrentObject = currentObject;
    if (updatedCurrentObject >= COL_COUNT) updatedCurrentObject = COL_COUNT;
    if (board[currentRow][COL_COUNT - 1].value === '') {
      updatedBoard[currentRow][updatedCurrentObject] = { value: key, state: '' }
    }
    setBoardState(updatedBoard);
    setCurrentObject(updatedCurrentObject + 1)
  }

  function endGame() {
    setBoardState(DEFAULT_STATE_2);
    setCurrentObject(0);
    setCurrentRow(0);
    setKeyboardKey('')
  }

  function verifyState() {
    if (isWordCorrect()) {
      compare();
      setTimeout(()=>{
        if(confirm("You win!!!!!!!! Dou you want one more game?")){
          endGame()
        }
       },400)
    }
    if(!isWordCorrect() && currentRow === LAST_ROW) {
      compare();
      setTimeout(()=>{
        if(confirm("You lose!!!!!!!! Dou you want one more game?")){
          endGame()
        }
       },400)
    } else {
      compare();
    }
    setCurrentRow(currentRow + 1);
    setCurrentObject(0);
  }
//= =====================================================
// Sprawdzenie checkWord
//= =====================================================
  const deleteLetter = () => {
    let updatedBoard = [...board];
    let objcetToDelete = currentObject - 1;
    if (objcetToDelete < 0) objcetToDelete = 0;
    updatedBoard[currentRow][objcetToDelete].value = '';
    setBoardState(updatedBoard);
    setCurrentObject(objcetToDelete);
    setKeyboardKey('');
  }
//= =====================================================
// Sprawdzenie checkWord
//= =====================================================
  function isWordCorrect() {
    const USER_WORD = board[currentRow].map((letter) => letter.value).join('');
    return USER_WORD === WORD_TO_GUESS;
}
//= =====================================================
// Porównanie słowa
//= =====================================================
  function compare() {
    const WORD_DRAFTED = WORD_TO_GUESS.split('');
    const USER_WORD = board[currentRow].map((letter) => letter.value);
    const currentRowState = board[currentRow];
    currentRowState.map((object, index) => {
      // if (WORD_DRAFTED[index] === USER_WORD[index]) {
      //   object.state = 'green';
      // } else if (WORD_DRAFTED.includes(USER_WORD[index])) {
      //   object.state = 'yellow';
      // } else if (!WORD_DRAFTED.includes(USER_WORD[index])) {
      //   object.state = 'grey';
      // }

      const expr = WORD_DRAFTED[index] === USER_WORD[index]
    switch(expr) {
      case WORD_DRAFTED[index] === USER_WORD[index]:
        object.state = 'green'
        break;
      case WORD_DRAFTED.includes(USER_WORD[index]):
        object.state = 'yellow'
        break;
      case !WORD_DRAFTED.includes(USER_WORD[index]):
        object.state = 'grey'
        break;
      default:
        console.log("test")
    }
    })
    

  }
  return (
    <div className="main">
        <Board board={board} />
        <Keyboard setKeyboardKey={setKeyboardKey} />
      </div>
  )
}
