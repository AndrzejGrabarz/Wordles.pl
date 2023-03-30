
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import classNames from 'classnames';
import Key from "./Key";

function KeyBoardRow({id, KeyboardKey, setKeyboardKey}) {
  
  let litery_0 = new Array(9);
 
  litery_0[0] = "Q";
  litery_0[1] = "W";
  litery_0[2] = "E";
  litery_0[3] = "R";
  litery_0[4] = "T";
  litery_0[5] = "Y";
  litery_0[6] = "U";
  litery_0[7] = "I";
  litery_0[8] = "O";
  litery_0[9] = "P";

  let litery_1 = new Array(8);
 
  litery_1[0] = "A";
  litery_1[1] = "S";
  litery_1[2] = "D";
  litery_1[3] = "F";
  litery_1[4] = "G";
  litery_1[5] = "H";
  litery_1[6] = "J";
  litery_1[7] = "K";
  litery_1[8] = "L";
  

  let litery_2 = new Array(8);
 
  litery_2[0] = "Enter";
  litery_2[1] = "Z";
  litery_2[2] = "X";
  litery_2[3] = "C";
  litery_2[4] = "V";
  litery_2[5] = "B";
  litery_2[6] = "N";
  litery_2[7] = "M";
  litery_2[8] = "Delete";
  

  let litery_3 = new Array(8);
 
  litery_3[0] = "Ą";
  litery_3[1] = "Ć";
  litery_3[2] = "Ę";
  litery_3[3] = "Ł";
  litery_3[4] = "Ń";
  litery_3[5] = "Ó";
  litery_3[6] = "Ś";
  litery_3[7] = "Ź";
  litery_3[8] = "Ż";

  let RowId = [];
  if(id ===0){
    RowId = litery_0
  }else if (id ===1){
    RowId = litery_1
  }else if (id ===2){
    RowId = litery_2
  }else if (id ===3){
    RowId = litery_3
  }

 


  return (
    <>
       <div className=" flex gap-2 my-1">

          {RowId.map((litera)=>{
            return <Key 
            keyId={litera} 
            RowId = {id}
            KeyboardKey = {KeyboardKey}
            setKeyboardKey = {setKeyboardKey}
            />
          })}
          
      </div>
    </>
  )
}

export default KeyBoardRow