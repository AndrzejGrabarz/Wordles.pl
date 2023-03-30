
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

function Key({keyId, KeyboardKey, setKeyboardKey}) { 
  
  const stateHandler = () => {
    setKeyboardKey(keyId)

  }
  return (
    <>
          <div onClick={stateHandler} id={keyId} className={"keyboard_block"}>{keyId}</div>
    </>
  )
}

export default Key