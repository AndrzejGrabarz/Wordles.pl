import React from 'react'
import Row from './Row'

function Board({ board, letterState }) {

  return (
    <>
    <div className='flex flex-col'> 
        {board && board.map((row, index) =>{
          return <Row key={index} row={row} letterState= {letterState} />
        })}
    </div>
    </>
  )
}

export default Board