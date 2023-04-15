import Board from "@/components/board/Board";
import Keyboard from "@/components/keyboard/Keyboard";
import { useState } from "react";

export default function Home() {
  
  const [KeyboardKey, setKeyboardKey] =useState(()=>{
      console.log("state")
      return ""
  })
  
  const [SpecialKeyboardKey, setSpecialKeyboardKey] = useState("yś") //Enter i Delete


  return (
    <>
    <div className="main">
      <Board
        KeyboardKey = {KeyboardKey}
        setKeyboardKey = {setKeyboardKey}
        SpecialKeyboardKey = {SpecialKeyboardKey}
        setSpecialKeyboardKey = {setSpecialKeyboardKey}
      />
      <Keyboard
        KeyboardKey = {KeyboardKey}
        setKeyboardKey = {setKeyboardKey}
        SpecialKeyboardKey = {SpecialKeyboardKey}
        setSpecialKeyboardKey = {setSpecialKeyboardKey}
      />
    </div>
     
    </>
  )
}
