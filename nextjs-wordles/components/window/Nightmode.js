function Nightmode() {
  function nightmode() {
    const main = document.getElementById('main');
    const button = document.getElementById('btn');
    const instruction = document.getElementById('InstructionCard');
    const greyBackground1 = document.getElementById('grey-background1');
    const greyBackground2 = document.getElementById('grey-background2');
    main.classList.toggle('night');
    button.classList.toggle('white');
    instruction.classList.toggle('white');
    greyBackground1.classList.toggle('grey-background');
    greyBackground2.classList.toggle('grey-background');
  }
  return (
    <button type="button" onClick={nightmode} id="btn">Nightmode</button>
  );
}

export default Nightmode;
