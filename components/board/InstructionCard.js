function InstructionCard() {
  return (
    <div id="InstructionCard" className="InstructionCard flex flex-col  items-center max-w-xl h-[620px] mb-2">

      <div id="grey-background1" className="bg-[#e5ecff] w-full text-center p-2 rounded-md">
        <h1 className="font-semibold text-xl sm:text-2xl">How to play</h1>
      </div>

      <div className="flex flex-col  items-center my-2 p-2">
        <p className="text-center text-md sm:text-lg">You have to guess the hidden word in 6 tries and the color of the letters changes to show how close you are.</p>
        <br />
        <p className="text-center text-md sm:text-lg">To start the game, just enter any word, for example:</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">C</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-yellow-400 rounded-md">O</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">Z</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-yellow-400 rounded-md">E</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-green-600 rounded-md">Y</span>
        </div>

        <div id="grey-background2" className="flex flex-col justify-center bg-[#edf0f5] black border-1   h-32 sm:h:36 rounded-md my-1 py-1 px-3">

          <div className="flex flex-row items-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-gray-600 rounded-md font-semibold">C</span>
            <div className="self-end px-[2px]">,</div>
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-gray-600 rounded-md font-semibold">Z</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>are not in the target word at all.</p></span>
          </div>

          <div className="flex flex-row items-centeritems-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-yellow-400 rounded-md font-semibold">O</span>
            <div className="self-end px-[2px]">,</div>
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-yellow-400 rounded-md font-semibold">E</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>is in the word but in the wrong spot.</p></span>
          </div>

          <div className="flex flex-row items-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-green-600 rounded-md font-semibold">Y</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>is in the word and in the correct spot.</p></span>
          </div>

        </div>
        <p className="text-center text-lg my-1">Another try to find matching letters in the target word.</p>

        <div className="flex items-center justify-center my-1 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">E</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">Q</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">U</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">A</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">L</span>
        </div>

        <p className="text-center text-md sm:text-lg ">So close!</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">E</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">Q</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">U</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">I</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">P</span>
        </div>
        <p className="text-center text-md sm:text-lg">Got it! 🏆</p>
      </div>
    </div>
  );
}

export default InstructionCard;
