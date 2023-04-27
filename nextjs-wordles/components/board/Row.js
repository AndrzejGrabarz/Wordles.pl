import React from 'react'
import Tile from './Tile'

let DEFAULT_ROW = [
  {value:"", state:""}, 
  {value:"", state:""}, 
  {value:"", state:""}, 
  {value:"", state:""}, 
  {value:"", state:""}, 
]

// Stany
// 1. correct - Na poprawnym miejscu 
// 2. wrong - Nie na poprawnym miejscu ale w slowie niebieska
// 3. missing - Nie w slowie to szara

function Row({ board, row, letterState}) {
  
  for(let i = 0; i < DEFAULT_ROW.length; i++) {
    DEFAULT_ROW[i].value = row[i]
    DEFAULT_ROW[i].state = letterState[i].state
  }
  
  return (
    <div className="flex gap-3 my-2">
          {DEFAULT_ROW.map((letter,index) => {
            return <Tile key={index} letter={letter.value} state={letter.state}/>
          })}
      </div>
  )
}

export default Row