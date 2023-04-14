
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import classNames from 'classnames';
import Key from "./Key";

function KeyBoardRow({rowLine, KeyboardKey, setKeyboardKey, SpecialKeyboardKey, setSpecialKeyboardKey}) {
  
  return (
    <>
       <div className=" flex gap-2 my-1">

          {rowLine.map((letter)=>{
            return <Key 
            key = {letter}
            letter ={letter}
            KeyboardKey = {KeyboardKey}
            setKeyboardKey = {setKeyboardKey}
            SpecialKeyboardKey = {SpecialKeyboardKey}
            setSpecialKeyboardKey = {setSpecialKeyboardKey}
            />
          })}
          
      </div>
    </>
  )
}

export default KeyBoardRow