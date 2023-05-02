import React from 'react'
import Key from "./Key";

function keyboardRow({ rowLine, setKeyboardKey }) {
  
  return (
    <>
       <div className=" flex gap-2 my-1">
          {rowLine.map((letter)=>{
            return <Key 
            key = {letter.id} 
            letter ={letter} 
            setKeyboardKey ={setKeyboardKey} />
          })}
      </div>
    </>
  )
}

export default keyboardRow