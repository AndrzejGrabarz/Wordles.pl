
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import KeyBoardRow from "./KeyBoardRow";


function Keyboard({KeyboardKey, setKeyboardKey}) {
  
  let KEYBOARD = [["Q", 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O','P'],
                    ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
                    ["Enter", 'Z', 'X', 'C', 'V', 'B', 'N', 'M', 'Delete'],
                    ['Ą', 'Ć', 'Ę', 'Ł', 'Ń', 'Ó', 'Ś', 'Ź', 'Ż']
                  ]

  return (
    <div className='flex flex-col my-10'> 
        
      {KEYBOARD.map((row)=>{
        return <KeyBoardRow 
        key = {row}
        rowLine ={row}
        KeyboardKey = {KeyboardKey}
        setKeyboardKey = {setKeyboardKey}
        />
      })}

    </div>
  )
}

export default Keyboard