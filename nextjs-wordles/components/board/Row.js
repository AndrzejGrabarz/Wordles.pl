import React from 'react'
import BoardBlock from './BoardBlock'

function Row({RowId, KeyboardKey, setKeyboardKey,array}) {
  
  const BOARD_SIZE = [0,1,2,3,4]


  return (
    <div className="flex gap-3 my-2">
          {BOARD_SIZE.map((block) =>{
            return <BoardBlock 
              id={block}
              RowId = {RowId}
              KeyboardKey = {KeyboardKey}
              setKeyboardKey = {setKeyboardKey}
              array = {array}
            />
          })}
      </div>
  )
}

export default Row