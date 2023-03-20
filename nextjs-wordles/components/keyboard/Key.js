
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

function Key({rowID, litera}) {
  
  let litery_1 = new Array(9);
 
  litery_1[0] = "Q";
  litery_1[1] = "W";
  litery_1[2] = "E";
  litery_1[3] = "R";
  litery_1[4] = "T";
  litery_1[5] = "Y";
  litery_1[6] = "U";
  litery_1[7] = "I";
  litery_1[8] = "O";
  litery_1[9] = "P";

  let litery_2 = new Array(8);
 
  litery_2[0] = "A";
  litery_2[1] = "S";
  litery_2[2] = "D";
  litery_2[3] = "F";
  litery_2[4] = "G";
  litery_2[5] = "H";
  litery_2[6] = "J";
  litery_2[7] = "K";
  litery_2[8] = "L";
  

  let litery_3 = new Array(8);
 
  litery_3[0] = "Enter";
  litery_3[1] = "Z";
  litery_3[2] = "X";
  litery_3[3] = "C";
  litery_3[4] = "V";
  litery_3[5] = "B";
  litery_3[6] = "N";
  litery_3[7] = "M";
  litery_3[8] = "\X/";
  

  let litery_4 = new Array(8);
 
  litery_4[0] = "Ą";
  litery_4[1] = "Ć";
  litery_4[2] = "Ę";
  litery_4[3] = "Ł";
  litery_4[4] = "Ń";
  litery_4[5] = "Ó";
  litery_4[6] = "Ś";
  litery_4[7] = "Ź";
  litery_4[8] = "Ż";

  

  return (
    <>
        <div className="keyboard_block">{litera}</div>
    </>
  )
}

export default Key