function InstructionCard() {
  return (
    <div id="InstructionCard" className="InstructionCard flex flex-col  items-center max-w-xl h-[680px]">

      <div id="grey-background1" className="bg-[#e5ecff] w-full text-center p-2 rounded-md">
        <h1 className="font-semibold text-2xl">How to play</h1>
      </div>

      <div className="flex flex-col  items-center my-2 p-2">
        <p className="text-center text-lg">You have to guess the hidden word in 6 tries and the color of the letters changes to show how close you are.</p>
        <br />
        <p className="text-center text-lg">To start the game, just enter any word, for example:</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-gray-600 rounded-md">C</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-yellow-400 rounded-md">O</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-gray-600 rounded-md">Z</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-yellow-400 rounded-md">E</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">Y</span>
        </div>

        <div id="grey-background2" className="flex flex-col  bg-[#edf0f5] black border-1  max-w-xl h-[120px] rounded-md my-3 p-3">

          <div className="flex flex-row">
            <span className="h-[25px] w-[25px]  m-1 flex flex-row items-center justify-center text-lg text-white bg-gray-600 rounded-md font-semibold">C</span>
            <span className="self-end">,</span>
            <span className="h-[25px] w-[25px]  m-1 flex items-center justify-center text-lg text-white bg-gray-600 rounded-md font-semibold">Z</span>
            <span className="flex items-center text-lg"><p>are not in the target word at all.</p></span>
          </div>

          <div className="flex flex-row">
            <span className="h-[25px] w-[25px]  m-1 flex flex-row items-center justify-center text-lg text-white bg-yellow-400 rounded-md font-semibold">O</span>
            <span className="self-end">,</span>
            <span className="h-[25px] w-[25px]  m-1 flex items-center justify-center text-lg text-white bg-yellow-400 rounded-md font-semibold">E</span>
            <span className="flex items-center text-lg text-lg"><p>is in the word but in the wrong spot.</p></span>
          </div>

          <div className="flex flex-row">
            <span className="h-[25px] w-[25px]  m-1 flex flex-row items-center justify-center text-lg text-white bg-green-600 rounded-md font-semibold">Y</span>
            <span className="flex items-center text-lg"><p>is in the word and in the correct spot.</p></span>
          </div>

        </div>
        <p className="text-cente text-lg my-1">Another try to find matching letters in the target word.</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">E</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">Q</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">U</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-gray-600 rounded-md">A</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-gray-600 rounded-md">L</span>
        </div>

        <p className="text-center text-lg">So close!</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">E</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">Q</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">U</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">I</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">P</span>
        </div>
        <p className="text-center">Got it! 🏆</p>
      </div>
    </div>
  );
}

export default InstructionCard;
