import React from 'react'
import Row from './Row'
import { useState, useEffect } from 'react'

const BOARD_SIZE = [0,1,2,3,4,5]
function Board({KeyboardKey, setKeyboardKey}) {
  
  const [array, setArray] = useState([[],[],[],[],[],[]])

  const  save =  () => {
    if (KeyboardKey !== '') { // PROGRAM WPROAWADZA DWA PUSTE STRINGI DO TABELI
    const updateArray = [...array];
    const currentTable =  updateArray.findIndex(arr => arr.length < 5)
   
      if(currentTable !== -1){
        updateArray[currentTable].push(KeyboardKey)
      }else{
        console.log("Tablica nie istnieje")
      }

    setArray(updateArray); 
  }}
  
  
  useEffect(() => {
    save();
  }, [KeyboardKey]);



  return (
    <>
    //Podział na osobny komponent
    <div className='flex flex-col'> 
        {BOARD_SIZE.map((row) =>{
          return <Row RowId ={BOARD_SIZE[row]}
            KeyboardKey = {KeyboardKey}
            setKeyboardKey = {setKeyboardKey}
            array = {array}
          />
        })}
    </div>
    <div> {array} </div>
    </>
  )
}

export default Board