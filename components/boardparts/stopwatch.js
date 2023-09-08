function Stopwatch({ start, pause, reset,  timerStartButtomRef,
  timerResetButtomRef, timerStopButtomRef, timeRef }) {
  return (
    <div className="flex flex-col justify-center items-center text-xl rounded text-black border-2 border-[#3b82f6]">
      <div id="time" ref={timeRef} className="flex flex-row shrink-0 py-1 text-sm sm:text-lg md:text-lg lg:text-xl xl:text-xl">
        00:00:00
      </div>
      <div className="flex text-base font-medium text-xs  sm:text-sm xl:text-lg w-full">
        <button id="timerStartButtom" ref={timerStartButtomRef} className=" px-4 py-1 w-full border-t-2 border-r-2 hover:text-white hover:bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 border-[#3b82f6] " onClick={start}>Start</button>
        <button id="timerStopButtom" ref={timerStopButtomRef}className=" px-4 py-1 w-full hover:text-white hover:bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 border-t-2 border-r-2 border-[#3b82f6]" onClick={pause}>Pause</button>
        <button id="timerResetButtom" ref={timerResetButtomRef} className=" px-4 py-1 w-full border-t-2 hover:text-white hover:bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 border-[#3b82f6] " onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Stopwatch;
