
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from 'react'

function Keyboard() {
  return (
    <div className='flex flex-col my-10'> 
        
      <div className=" flex gap-2 my-1">
          <div className="keyboard_block">Q</div>
          <div className="keyboard_block">W</div>
          <div className="keyboard_block">E</div>
          <div className="keyboard_block">R</div>
          <div className="keyboard_block">T</div>
          <div className="keyboard_block">Y</div>
          <div className="keyboard_block">U</div>
          <div className="keyboard_block">I</div>
          <div className="keyboard_block">O</div>
          <div className="keyboard_block">P</div>
      </div>
        
      <div className=" flex gap-2 my-1">
          <div className="keyboard_block grow">A</div>
          <div className="keyboard_block grow">S</div>
          <div className="keyboard_block grow">D</div>
          <div className="keyboard_block grow">F</div>
          <div className="keyboard_block grow">G</div>
          <div className="keyboard_block grow">H</div>
          <div className="keyboard_block grow">J</div>
          <div className="keyboard_block grow">K</div>
          <div className="keyboard_block grow">L</div>
      </div>
        
      <div className=" flex gap-2 my-1">
          <div className="keyboard_block grow">Enter</div>
          <div className="keyboard_block">Z</div>
          <div className="keyboard_block">X</div>
          <div className="keyboard_block">C</div>
          <div className="keyboard_block">V</div>
          <div className="keyboard_block">B</div>
          <div className="keyboard_block">N</div>
          <div className="keyboard_block">M</div>
          <div className="keyboard_block grow">[ x ]</div>
      </div>

      <div className=" flex gap-2 my-1">
          <div className="keyboard_block grow">Ą</div>
          <div className="keyboard_block grow">Ć</div>
          <div className="keyboard_block grow">Ę</div>
          <div className="keyboard_block grow">Ł</div>
          <div className="keyboard_block grow">Ń</div>
          <div className="keyboard_block grow">Ó</div>
          <div className="keyboard_block grow">Ś</div>
          <div className="keyboard_block grow">Ź</div>
          <div className="keyboard_block grow">Ż</div>
      </div>

    </div>
  )
}

export default Keyboard