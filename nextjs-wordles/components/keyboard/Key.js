
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

function Key({letter , KeyboardKey, setKeyboardKey, SpecialKeyboardKey, setSpecialKeyboardKey}) { 
  

  const stateHandler = () => {
    setKeyboardKey(letter)
  }

  const SpecialstateHandler = () => {
    if(letter === "Delete"){
      return
    }
    setSpecialKeyboardKey(letter)
  }

 
  return (
    <>
          <div onClick={letter !== "Enter" && letter !== "Delete" ? stateHandler :  SpecialstateHandler} id={letter} className={"keyboard_block"}>{letter}</div>
    </>
  )
}

export default Key