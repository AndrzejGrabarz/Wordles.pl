import React from 'react';

function Nightmode() {
  function nightmode() {
    const main = document.getElementById('main');
    const button = document.getElementById('btn');
    main.classList.toggle('night');
    button.classList.toggle('white');
  }
  return (
    <button onClick={nightmode} id="btn">Nightmode</button>
  );
}

export default Nightmode;
