import React from 'react'

function BoardBlock({KeyboardKey, setKeyboardKey,id,RowId,setClick, Click}) {
  
// if(id === 0) {
//   document.getElementById(0).innerHTML = "Please"
// }


return (
    <div className="board_block" id={id}></div>
  )
}

export default BoardBlock