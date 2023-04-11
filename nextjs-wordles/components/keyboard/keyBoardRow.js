
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import classNames from 'classnames';
import Key from "./Key";

function KeyBoardRow({rowLine, KeyboardKey, setKeyboardKey}) {
  
  return (
    <>
       <div className=" flex gap-2 my-1">

          {rowLine.map((letter)=>{
            return <Key 
            key = {letter}
            letter ={letter}
            KeyboardKey = {KeyboardKey}
            setKeyboardKey = {setKeyboardKey}
            />
          })}
          
      </div>
    </>
  )
}

export default KeyBoardRow