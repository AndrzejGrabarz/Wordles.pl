function Stopwatch({ start, pause, reset}) {
  
  return (
    <div className="flex flex-col justify-center items-center text-xl rounded text-black mx-2">
      <div id="time" className="flex flex-row shrink-0 py-1">
        00:00:00
      </div>
      <div className="flex text-base font-medium ">
        <button id="blueBtn1" className=" px-4 py-1 w-full border-y-2 border-l-2 border-r border-[#3b82f6] hover:text-white hover:bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-l" onClick={start}>Start</button>
        <button id="blueBtn2" className=" px-4 py-1 w-full border border-y-2  border-[#3b82f6] hover:text-white hover:bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600" onClick={pause}>Pause</button>
        <button id="blueBtn3" className=" px-4 py-1 w-full border-l border-y-2 border-r-2 border-[#3b82f6] hover:text-white hover:bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-r" onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
