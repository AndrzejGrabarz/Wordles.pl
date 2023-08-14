import React, { createContext, useContext } from 'react';
import Link from 'next/link';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { ColNumContext } from '@/utils/SettingsContext';

function Settings() {
  const [NumberOfColumn, setNumberOfColumn] = useContext(ColNumContext);
  const saveNumber = (buttonValue) => setNumberOfColumn(buttonValue);

  return (
    <header className="flex justify-center bg-white">
      <nav className=" flex flex-col  my-8">
        <Link href="/" className="flex items-center min-[430px]:items-start justify-center">
          <button id="btn" type="button" className="text-gray-400 border border-gray-400 hover:text-white hover:bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center  my-4 sm:px-5 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-2.5 xl:px-7 xl:py-2.5 2xl:px-8 2xl:py-3.5">
            <Cog8ToothIcon className="h-4 w-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
          </button>
        </Link>
        <div className=" rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <h1 className="block font-semibold text-gray-900 text-center bg-[#e5ecff] py-4 text-xl sm:text-2xl">
            Settings
          </h1>
          <div className="p-4">
            <div className="group relative flex items-center justify-center gap-x-6 rounded-lg p-4 text-sm leading-6">
              <div className="flex-auto">
                <p className="text-center text-lg md:text-xl lg:text-xl xl:text-2xl 2xl:text-[28px]  font-bold">Numer of Letters</p>
                <div className="flex items-center justify-center my-2 p-2">
                  <button onClick={() => saveNumber(4)} type="submit" className="h-6 w-6 text-sm sm:h-7 sm:w-7 sm:text-md md:h-9 md:w-9 md:text-lg lg:h-10 lg:w-10 lg:text-xl xl:h-11 xl:w-11 2xl:h-[46px] xl:text-2xl 2xl:w-[46px] 2xl:text-3xl m-1 flex items-center justify-center  text-white font-semibold bg-[#C4B0FF] rounded-md hover:bg-violet-700 focus:bg-violet-700">4</button>
                  <button onClick={() => saveNumber(5)} type="submit" className="h-6 w-6 text-sm sm:h-7 sm:w-7 sm:text-md md:h-9 md:w-9 md:text-lg lg:h-10 lg:w-10 lg:text-xl xl:h-11 xl:w-11 2xl:h-[46px] xl:text-2xl 2xl:w-[46px] 2xl:text-3xl m-1 flex items-center justify-center  text-white font-semibold bg-[#8696FE] rounded-md hover:bg-violet-700 focus:bg-violet-700">5</button>
                  <button onClick={() => saveNumber(6)} type="submit" className="h-6 w-6 text-sm sm:h-7 sm:w-7 sm:text-md md:h-9 md:w-9 md:text-lg lg:h-10 lg:w-10 lg:text-xl xl:h-11 xl:w-11 2xl:h-[46px] xl:text-2xl 2xl:w-[46px] 2xl:text-3xl m-1 flex items-center justify-center  text-white font-semibold bg-[#C4B0FF] rounded-md hover:bg-violet-700 focus:bg-violet-700">6</button>
                  <button onClick={() => saveNumber(7)} type="submit" className="h-6 w-6 text-sm sm:h-7 sm:w-7 sm:text-md md:h-9 md:w-9 md:text-lg lg:h-10 lg:w-10 lg:text-xl xl:h-11 xl:w-11 2xl:h-[46px] xl:text-2xl 2xl:w-[46px] 2xl:text-3xl m-1 flex items-center justify-center  text-white font-semibold bg-[#8696FE] rounded-md hover:bg-violet-700 focus:bg-violet-700">7</button>
                  <button onClick={() => saveNumber(8)} type="submit" className="h-6 w-6 text-sm sm:h-7 sm:w-7 sm:text-md md:h-9 md:w-9 md:text-lg lg:h-10 lg:w-10 lg:text-xl xl:h-11 xl:w-11 2xl:h-[46px] xl:text-2xl 2xl:w-[46px] 2xl:text-3xl m-1 flex items-center justify-center  text-white font-semibold bg-[#C4B0FF] rounded-md hover:bg-violet-700 focus:bg-violet-700">8</button>
                  <button onClick={() => saveNumber(9)} type="submit" className="h-6 w-6 text-sm sm:h-7 sm:w-7 sm:text-md md:h-9 md:w-9 md:text-lg lg:h-10 lg:w-10 lg:text-xl xl:h-11 xl:w-11 2xl:h-[46px] xl:text-2xl 2xl:w-[46px] 2xl:text-3xl  m-1 flex items-center justify-center  text-white font-semibold bg-[#8696FE] rounded-md hover:bg-violet-700 focus:bg-violet-700">9</button>
                  <button onClick={() => saveNumber(10)} type="submit" className="h-6 w-6 text-sm sm:h-7 sm:w-7 sm:text-md md:h-9 md:w-9 md:text-lg lg:h-10 lg:w-10 lg:text-xl xl:h-11 xl:w-11 2xl:h-[46px] xl:text-2xl 2xl:w-[46px] 2xl:text-3xl m-1 flex items-center justify-center  text-white font-semibold bg-[#C4B0FF] rounded-md hover:bg-violet-700 focus:bg-violet-700">10</button>
                  <button onClick={() => saveNumber(11)} type="submit" className="h-6 w-6 text-sm sm:h-7 sm:w-7 sm:text-md md:h-9 md:w-9 md:text-lg lg:h-10 lg:w-10 lg:text-xl xl:h-11 xl:w-11 2xl:h-[46px] xl:text-2xl 2xl:w-[46px] 2xl:text-3xl m-1 flex items-center justify-center  text-white font-semibold bg-[#8696FE] rounded-md hover:bg-violet-700 focus:bg-violet-700">11</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

    </header>
  );
}

export default Settings;
