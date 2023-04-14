import React from 'react'
import Row from './Row'
import { useState, useEffect, useRef } from 'react'

const BOARD_SIZE = [0,1,2,3,4,5]
function Board({KeyboardKey, setKeyboardKey, SpecialKeyboardKey, setSpecialKeyboardKey}) {
  

  const [isInitialRender, setIsInitialRender] = useState(true); // Kontroluje działanie useEffect --> dzięki temu nie odpalają się przy renderze strony

  const [array, setArray] = useState([[],[],[],[],[],[]])
  
//======================================================
// Funkcja handleKeyPress - pozwala KeyboardKey odbierać wartości z klawiatury
//======================================================
  
useEffect(() => {
    const handleKeyPress = (event) => {
      console.log("Naciśnięto klawisz: " + event.key);
      setKeyboardKey(event.key)
    }
    document.addEventListener("keypress", handleKeyPress);
    
  })


//======================================================
// Funkcja Save - wprowadzanie liter do tablicy 
//======================================================
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }
    save();
  }, [KeyboardKey]);
  
  const  save =  () => {
    if (KeyboardKey !== '') { // PROGRAM WPROAWADZA DWA PUSTE STRINGI DO TABELI
    const updateArray = [...array];
    const currentTable =  updateArray.findIndex(arr => arr.length < 5)
   
      if(currentTable !== -1){
        updateArray[currentTable].push(KeyboardKey)
       
      }

   setArray(updateArray) 
    console.log(updateArray)
  }}
  

//======================================================
// Sprawdzenie checkWord 
//======================================================

  let CORRECT_WORD = "GORYL"

  const [word, setWord] = useState('')
  
 //* Funkcja letterUpdate dodaje do word litery 
  
  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }
    letterUpdate();
  }, [KeyboardKey]);

  function letterUpdate () {
    setWord(word+KeyboardKey)
  }


   /*
   *Funkcja checkWord - Sprawdza czy wpisane przez nas słowo zgadza się ze zmienną CORRECT_WORD
    !Funkcjonalność do przegadanie
      ^Funkcja odpala się tylko przy zmianie stanu w SpecialKeyboardKey guzikami zpecjalnymi które zmieniają ten stan to "Enter" i "Delet"
   */

  useEffect(() => {
    if (isInitialRender) {
      setIsInitialRender(false);
      return;
    }
    checkWord();
  }, [SpecialKeyboardKey]);


  function checkWord() {
    let TypedWord = word 
    console.log(TypedWord)
    if(TypedWord !== CORRECT_WORD){ // Czemu nie równe 
      alert("Nie wygrałeś")

    }else {
      alert("Wygrałeś")
    }
    setWord('')
  }



  return (
    <>
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