import React from 'react'

function Keyboard() {
  return (
    <div className='flex flex-col my-10'> 
        
      <div className=" flex gap-2 my-1">
          <div className="keyBoardBlock">Q</div>
          <div className="keyBoardBlock">W</div>
          <div className="keyBoardBlock">E</div>
          <div className="keyBoardBlock">R</div>
          <div className="keyBoardBlock">T</div>
          <div className="keyBoardBlock">Y</div>
          <div className="keyBoardBlock">U</div>
          <div className="keyBoardBlock">I</div>
          <div className="keyBoardBlock">O</div>
          <div className="keyBoardBlock">P</div>
      </div>
        
      <div className=" flex gap-2 my-1">
          <div className="keyBoardBlock grow">A</div>
          <div className="keyBoardBlock grow">S</div>
          <div className="keyBoardBlock grow">D</div>
          <div className="keyBoardBlock grow">F</div>
          <div className="keyBoardBlock grow">G</div>
          <div className="keyBoardBlock grow">H</div>
          <div className="keyBoardBlock grow">J</div>
          <div className="keyBoardBlock grow">K</div>
          <div className="keyBoardBlock grow">L</div>
      </div>
        
      <div className=" flex gap-2 my-1">
          <div className="keyBoardBlock grow">Enter</div>
          <div className="keyBoardBlock">Z</div>
          <div className="keyBoardBlock">X</div>
          <div className="keyBoardBlock">C</div>
          <div className="keyBoardBlock">V</div>
          <div className="keyBoardBlock">B</div>
          <div className="keyBoardBlock">N</div>
          <div className="keyBoardBlock">M</div>
          <div className="keyBoardBlock grow">[x]</div>
      </div>

      <div className=" flex gap-2 my-1">
          <div className="keyBoardBlock grow">Ą</div>
          <div className="keyBoardBlock grow">Ć</div>
          <div className="keyBoardBlock grow">Ę</div>
          <div className="keyBoardBlock grow">Ł</div>
          <div className="keyBoardBlock grow">Ń</div>
          <div className="keyBoardBlock grow">Ó</div>
          <div className="keyBoardBlock grow">Ś</div>
          <div className="keyBoardBlock grow">Ź</div>
          <div className="keyBoardBlock grow">Ż</div>
      </div>

    </div>
  )
}

export default Keyboard