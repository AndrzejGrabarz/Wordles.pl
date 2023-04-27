import React from 'react'
import Tile from './Tile'

const DEFAULT_ROW = ['', '', '', '', '']

function Row({ board, row}) {
  
  row = row.split('');
  row =[...row, ...DEFAULT_ROW].slice(0, 5)

  return (
    <div className="flex gap-3 my-2">
          {row && row.map((letter) => {
            return <Tile key={letter.id} letter={letter}/>
          })}
      </div>
  )
}

export default Row