
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

function Key({letter , KeyboardKey, setKeyboardKey}) { 
  
  const stateHandler = () => {
    setKeyboardKey(letter)
  }
  return (
    <>
          <div onClick={stateHandler} id={letter} className={"keyboard_block"}>{letter}</div>
    </>
  )
}

export default Key