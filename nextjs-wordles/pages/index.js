import Board from "@/components/board/Board";
import Keyboard from "@/components/keyboard/Keyboard";
import { useState} from "react";

export default function Home() {
  
  const [KeyboardKey, setKeyboardKey] = useState("")
<<<<<<< HEAD
  const [Click, setClick] = useState(-1)
=======
  const [Click, setClick] = useState(0)
>>>>>>> parent of 8e2b352 (Wprowadzanie liter z wirtualnej klawiatury)
  
  return (
    <>
    <div className="main">
      <Board
        KeyboardKey = {KeyboardKey}
        setKeyboardKey = {setKeyboardKey}
        Click = {Click}
        setClick = {setClick}
      />
      <Keyboard
        KeyboardKey = {KeyboardKey}
        setKeyboardKey = {setKeyboardKey}
        Click = {Click}
        setClick = {setClick}
      />
    </div>
     
    </>
  )
}
