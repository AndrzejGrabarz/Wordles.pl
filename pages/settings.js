import React, { createContext, useContext } from 'react';
import Link from 'next/link';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';
import { ColNumContext } from '@/utils/SettingsContext';

function Settings() {
  const [NumberOfColumn, setNumberOfColumn] = useContext(ColNumContext);
  const saveNumber = (buttonValue) => setNumberOfColumn(buttonValue);

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl justify-center p-6 lg:px-8" aria-label="Global">
        <div className=" rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
          <h1 className="block font-semibold text-gray-900 text-center bg-[#e5ecff] py-4 text-2xl">
            Settings
          </h1>
          <div className="p-4">
            <div className="group relative flex items-center justify-center gap-x-6 rounded-lg p-4 text-sm leading-6">
              <div className="flex-auto">
                <p className="text-center text-3xl font-bold">Numer of Letters</p>
                <div className="flex items-center justify-center my-2 p-2">
                  <button id="number" onClick={() => saveNumber(4)} type="submit" className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-[#C4B0FF] rounded-md hover:bg-violet-700 focus:bg-violet-700">4</button>
                  <button id="number" onClick={() => saveNumber(5)} type="submit" className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-[#8696FE] rounded-md hover:bg-violet-700 focus:bg-violet-700">5</button>
                  <button id="number" onClick={() => saveNumber(6)} type="submit" className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-[#C4B0FF] rounded-md hover:bg-violet-700 focus:bg-violet-700">6</button>
                  <button id="number" onClick={() => saveNumber(7)} type="submit" className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-[#8696FE] rounded-md hover:bg-violet-700 focus:bg-violet-700">7</button>
                  <button id="number" onClick={() => saveNumber(8)} type="submit" className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-[#C4B0FF] rounded-md hover:bg-violet-700 focus:bg-violet-700">8</button>
                  <button id="number" onClick={() => saveNumber(9)} type="submit" className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-[#8696FE] rounded-md hover:bg-violet-700 focus:bg-violet-700">9</button>
                  <button id="number" onClick={() => saveNumber(10)} type="submit" className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-[#C4B0FF] rounded-md hover:bg-violet-700 focus:bg-violet-700">10</button>
                  <button id="number" onClick={() => saveNumber(11)} type="submit" className="h-[50px] w-[50px]  m-1 flex items-center justify-center text-3xl text-white font-semibold bg-[#8696FE] rounded-md hover:bg-violet-700 focus:bg-violet-700">11</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Link href="/">
          <button id="btn" type="button" className="text-gray-400 border border-gray-400 hover:text-white hover:bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-4">
            <Cog8ToothIcon className="h-6 w-6" />
          </button>
        </Link>
      </nav>

    </header>
  );
}

export default Settings;
