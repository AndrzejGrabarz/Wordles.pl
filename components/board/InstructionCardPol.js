function InstructionCardPol() {
  return (
    <div id="InstructionCard" className="InstructionCard flex flex-col  items-center max-w-xl h-[620px] mb-2">

      <div id="grey-background1" className="bg-[#e5ecff] w-full text-center p-2 rounded-md">
        <h1 className="font-semibold text-xl sm:text-2xl">Jak grać</h1>
      </div>

      <div className="flex flex-col  items-center my-2 p-2">
        <p className="text-center text-md sm:text-lg">Musisz odgadnąć ukryte słowo w 6 próbach, a kolor liter zmienia się, aby pokazać, jak blisko jesteś.</p>
        <br />
        <p className="text-center text-md sm:text-lg">Aby rozpocząć grę, wystarczy wpisać dowolne słowo, na przykład:</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">G</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-yellow-400 rounded-md">O</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">R</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-yellow-400 rounded-md">Y</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl  sm:text-3xl text-white font-semibold bg-green-600 rounded-md">L</span>
        </div>

        <div id="grey-background2" className="flex flex-col justify-center bg-[#edf0f5] black border-1   h-32 sm:h:36 rounded-md my-1 py-1 px-3">

          <div className="flex flex-row items-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-gray-600 rounded-md font-semibold">G</span>
            <div className="self-end px-[2px]">,</div>
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-gray-600 rounded-md font-semibold">O</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>w ogóle nie występują w słowie.</p></span>
          </div>

          <div className="flex flex-row items-centeritems-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-yellow-400 rounded-md font-semibold">R</span>
            <div className="self-end px-[2px]">,</div>
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-yellow-400 rounded-md font-semibold">Y</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>jest w słowie, ale w złym miejscu.</p></span>
          </div>

          <div className="flex flex-row items-center p-1">
            <span className="h-[20px] w-[20px] text-md sm:h-[25px] sm:w-[25px] sm:text:lg  flex flex-row items-center justify-center  text-white bg-green-600 rounded-md font-semibold">L</span>
            <span className="flex items-center text-md sm:text-lg pl-1"><p>znajduje się w słowie i we właściwym miejscu.</p></span>
          </div>

        </div>
        <p className="text-center text-lg my-1">Kolejna próba polega na znalezieniu pasujących liter w słowie.</p>

        <div className="flex items-center justify-center my-1 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">K</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">O</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">M</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">A</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-gray-600 rounded-md">R</span>
        </div>

        <p className="text-center text-md sm:text-lg ">Jesteś blisko!</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">K</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">O</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">M</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">I</span>
          <span className="h-[30px] w-[30px] sm:h-[50px] sm:w-[50px]  m-1 flex items-center justify-center text-xl sm:text-3xl text-white font-semibold bg-green-600 rounded-md">S</span>
        </div>
        <p className="text-center text-md sm:text-lg">Brawo wygrałeś! 🏆</p>
      </div>
    </div>
  );
}

export default InstructionCardPol;
