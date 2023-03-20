
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'
import Key from "./Key";

function keyBoardRow({id}) {
  
let klawisze = new Array();

if(id === 0) {
  klawisze = litery_1
}else if (id ===1) {
  klawisze = litery_2
}else if (id ===2) {
  klawisze = litery_3
}else if (id ===3) {
  klawisze = litery_4
}

  return (
    <>
       <div className=" flex gap-2 my-1" id={id}>

          {klawisze.map((key)=>{
            return <Key rowID={id} litera={klawisze[key]}></Key>
          })}
          
      </div>
    </>
  )
}

export default keyBoardRow