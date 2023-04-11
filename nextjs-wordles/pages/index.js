import Board from "@/components/board/Board";
import Keyboard from "@/components/keyboard/Keyboard";
import { useState } from "react";

export default function Home() {
  
  const [KeyboardKey, setKeyboardKey] =useState(()=>{
      console.log("state")
      return ""
  })
  
  return (
    <>
    <div className="main">
      <Board
        KeyboardKey = {KeyboardKey}
        setKeyboardKey = {setKeyboardKey}
      />
      <Keyboard
        KeyboardKey = {KeyboardKey}
        setKeyboardKey = {setKeyboardKey}
      />
    </div>
     
    </>
  )
}
