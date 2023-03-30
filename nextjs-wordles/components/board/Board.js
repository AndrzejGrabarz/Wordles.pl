import React from 'react'
import Row from './Row'

const BOARD_SIZE = [0,1,2,3,4,5]
function Board({KeyboardKey, setKeyboardKey}) {
  return (

    //Podział na osobny komponent
    <div className='flex flex-col'> 
        {BOARD_SIZE.map((row) =>{
          return <Row RowId ={BOARD_SIZE[row]}
            KeyboardKey = {KeyboardKey}
            setKeyboardKey = {setKeyboardKey}
          />
        })}
    </div>
  )
}

export default Board