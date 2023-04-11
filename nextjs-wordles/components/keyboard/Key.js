
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

function Key({keyId, KeyboardKey, setKeyboardKey,setClick, Click}) { 
  
  const stateHandler = () => {
    setKeyboardKey(keyId)
    setClick(Click+1)
<<<<<<< HEAD
    
=======
>>>>>>> parent of 8e2b352 (Wprowadzanie liter z wirtualnej klawiatury)
  }
  return (
    <>
          <div onClick={stateHandler} id={keyId} className={"keyboard_block"}>{keyId}</div>
    </>
  )
}

export default Key