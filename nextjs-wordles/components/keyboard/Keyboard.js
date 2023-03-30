
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import KeyBoardRow from "./KeyBoardRow";


function Keyboard({KeyboardKey, setKeyboardKey}) {
  
  const KEYBOARD_SIZE = [0,1,2,3]

  return (
    <div className='flex flex-col my-10'> 
        
      {KEYBOARD_SIZE.map((row)=>{
        return <KeyBoardRow 
        id={KEYBOARD_SIZE[row]}
        KeyboardKey = {KeyboardKey}
        setKeyboardKey = {setKeyboardKey}
        />
      })}

    </div>
  )
}

export default Keyboard