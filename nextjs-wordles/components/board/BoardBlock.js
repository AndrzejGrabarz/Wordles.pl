import React from 'react'

function BoardBlock({KeyboardKey, setKeyboardKey,id,RowId,setClick, Click}) {
  

let currentDiv = null
console.log(currentDiv)

if(currentDiv == null){
  currentDiv = document.getElementById(Click)
  currentDiv.innerHTML = KeyboardKey
}



return (
    <div className="board_block" id={id}></div>
  )
}

export default BoardBlock