import React from 'react';
import Link from 'next/link';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

function SettingsButtonEng() {
  return (
    <Link href="/settingsEng">
      <button id="btn" type="button" className="text-gray-400 border border-gray-400 hover:text-white hover:bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600   rounded-lg  px-5 py-1.5 sm:px-5 sm:py-2 md:px-5 md:py-2.5 lg:px-7 lg:py-[8px] xl:px-7 xl:py-[12px] 2xl:px-7 2xl:py-[10px] text-center mb-2">
        <Cog8ToothIcon className="h-4 w-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-6 lg:h-6 xl:w-6 xl:h-6 2xl:w-7 2xl:h-7" />
      </button>
    </Link>
  );
}
export default SettingsButtonEng;
