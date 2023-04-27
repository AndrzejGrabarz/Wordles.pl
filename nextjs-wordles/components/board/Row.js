import React from 'react'
import Tile from './Tile'

const DEFAULT_ROW = ['', '', '', '', ''] // leters

const DEFAULT_ROW_2 = [
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
    DEFAULT_ROW_2[i].value = row[i]
    DEFAULT_ROW_2[i].state = letterState[i].state
  }
  
  console.log("Obecny stan",DEFAULT_ROW_2)
  return (
    <div className="flex gap-3 my-2">
          {DEFAULT_ROW_2.map((letter) => {
            return <Tile key={letter.id} letter={letter.value} state = {letter.state}/>
          })}
      </div>
  )
}

export default Row