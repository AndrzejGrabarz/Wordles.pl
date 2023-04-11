import React from 'react'

function BoardBlock({KeyboardKey, setKeyboardKey,id,RowId,setClick, Click}) {
  
<<<<<<< HEAD
=======
// if(id === 0) {
//   document.getElementById(0).innerHTML = "Please"
// }
>>>>>>> parent of 8e2b352 (Wprowadzanie liter z wirtualnej klawiatury)

let currentDiv = null
console.log(currentDiv)

<<<<<<< HEAD
if(currentDiv == null){
  currentDiv = document.getElementById(Click)
  currentDiv.innerHTML = KeyboardKey
}



return (
    <div className="board_block" id={id}></div>
  )
}

=======
return (
    <div className="board_block" id={id}></div>
  )
}

>>>>>>> parent of 8e2b352 (Wprowadzanie liter z wirtualnej klawiatury)
export default BoardBlock