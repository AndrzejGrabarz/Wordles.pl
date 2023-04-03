import React from 'react'
import Row from './Row'

const BOARD_SIZE = [0,1,2,3,4,5]
function Board({KeyboardKey, setKeyboardKey,setClick, Click}) {
  return (

    //Podział na osobny komponent
    <div className='flex flex-col'> 
        {BOARD_SIZE.map((row) =>{
          return <Row RowId ={BOARD_SIZE[row]}
            KeyboardKey = {KeyboardKey}
            setKeyboardKey = {setKeyboardKey}
            setClick = {setClick}
            Click = {Click}
          />
        })}
    </div>
  )
}

export default Board