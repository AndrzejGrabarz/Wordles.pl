import React from 'react'
import Row from './Row'

function Board({ board }) {
console.log(board)
  return (
    <>
    <div className='flex flex-col'> 
        {board.map((row) =>{
          return <Row key={row.id} row={row}/>
        })}
    </div>
    <div> {array} </div> 
    </>
  )
}

export default Board