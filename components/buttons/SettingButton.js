import React from 'react';
import Link from 'next/link';
import { Cog8ToothIcon } from '@heroicons/react/24/outline';

function SettingsButtonCog() {
  return (
    <Link href="/settings">
      <button id="btn" type="button" className="text-gray-400 border border-gray-400 hover:text-white hover:bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600  font-medium rounded-lg text-sm px-5 py-2.5 text-center  mb-2">
        <Cog8ToothIcon className="h-6 w-6" />
      </button>
    </Link>
  );
}
export default SettingsButtonCog;
