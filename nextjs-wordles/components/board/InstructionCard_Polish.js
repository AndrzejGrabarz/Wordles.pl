function InstructionCard() {
  return (
    <div id="InstructionCard" className="InstructionCard flex flex-col  items-center max-w-xl h-[680px]">

      <div id="grey-background1" className="bg-[#e5ecff] w-full text-center p-2 rounded-md">
        <h1 className="font-semibold text-2xl">Jak grać</h1>
      </div>

      <div className="flex flex-col  items-center my-2 p-2">
        <p className="text-center text-lg">Musisz odgadnąć ukryte słowo w 6 próbach, a kolor liter zmienia się, aby pokazać, jak blisko jesteś.</p>
        <br />
        <p className="text-center text-lg">Aby rozpocząć grę, wystarczy wpisać dowolne słowo, na przykład:</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-gray-600 rounded-md">D</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-yellow-400 rounded-md">Z</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-gray-600 rounded-md">W</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-yellow-400 rounded-md">O</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">N</span>
        </div>

        <div id="grey-background2" className="flex flex-col  bg-[#edf0f5] black border-1  max-w-xl h-[120px] rounded-md my-3 p-3">

          <div className="flex flex-row">
            <span className="h-[25px] w-[25px]  m-1 flex flex-row items-center justify-center text-lg text-white bg-gray-600 rounded-md font-semibold">D</span>
            <span className="self-end">,</span>
            <span className="h-[25px] w-[25px]  m-1 flex items-center justify-center text-lg text-white bg-gray-600 rounded-md font-semibold">W</span>
            <span className="flex items-center text-lg"><p>w ogóle nie występują w słowie docelowym.</p></span>
          </div>

          <div className="flex flex-row">
            <span className="h-[25px] w-[25px]  m-1 flex flex-row items-center justify-center text-lg text-white bg-yellow-400 rounded-md font-semibold">Z</span>
            <span className="self-end">,</span>
            <span className="h-[25px] w-[25px]  m-1 flex items-center justify-center text-lg text-white bg-yellow-400 rounded-md font-semibold">O</span>
            <span className="flex items-center text-lg text-lg"><p>jest w słowie, ale w złym miejscu.</p></span>
          </div>

          <div className="flex flex-row">
            <span className="h-[25px] w-[25px]  m-1 flex flex-row items-center justify-center text-lg text-white bg-green-600 rounded-md font-semibold">N</span>
            <span className="flex items-center text-lg"><p>znajduje się w słowie i we właściwym miejscu.</p></span>
          </div>

        </div>
        <p className="text-cente text-lg my-1">Kolejna próba polega na znalezieniu pasujących liter w słowie docelowym.</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">G</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">R</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">O</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-gray-600 rounded-md">S</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-gray-600 rounded-md">Z</span>
        </div>

        <p className="text-center text-lg">Tak blisko!</p>

        <div className="flex items-center justify-center my-2 p-2">
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">G</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">R</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">O</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">T</span>
          <span className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-green-600 rounded-md">A</span>
        </div>
        <p className="text-center">Mamy to! 🏆</p>
      </div>
    </div>
  );
}

export default InstructionCard;
