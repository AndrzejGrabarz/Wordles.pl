
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'




function Key({keyId}) { 
  return (
    <>
          <div onClick={() => console.log(keyId)} id={keyId} className={"keyboard_block"}>{keyId}</div>
    </>
  )
}

export default Key