
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

function Keyboard() {
  
  const KEYBOARD_SIZE = [[], [], [], []]

  return (
    <div className='flex flex-col my-10'> 
        
      {KEYBOARD_SIZE.map((row)=>{
        return <keyBoardRow id={row.id}></keyBoardRow>
      })}

    </div>
  )
}

export default Keyboard