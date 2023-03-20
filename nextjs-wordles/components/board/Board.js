import React from 'react'
import Row from './Row'

const BOARD_SIZE = [[], [], [], [], [], []]
function Board() {
  return (

    //Podział na osobny komponent
    <div className='flex flex-col'> 
        {BOARD_SIZE.map((row) =>{
          return <Row></Row>
        })}
    </div>
  )
}

export default Board