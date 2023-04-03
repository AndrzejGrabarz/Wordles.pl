import React from 'react'
import BoardBlock from './BoardBlock'

function Row({RowId, KeyboardKey, setKeyboardKey,setClick, Click}) {
  
  const BOARD_SIZE = [0,1,2,3,4]


  return (
    <div className="flex gap-3 my-2">
          {BOARD_SIZE.map((block) =>{
            return <BoardBlock 
              id={BOARD_SIZE[block]}
              RowId = {RowId}
              KeyboardKey = {KeyboardKey}
              setKeyboardKey = {setKeyboardKey}
              setClick = {setClick}
              Click = {Click}
            />
          })}
      </div>
  )
}

export default Row