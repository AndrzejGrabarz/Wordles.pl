import React from 'react'
import Row from './Row'

function Board({ board }) {
  return (
    <>
    <div className='flex flex-col'> 
        {board && board.map((row) =>{
          return <Row key={row.id} row={row}/>
        })}
    </div>
    </>
  )
}

export default Board