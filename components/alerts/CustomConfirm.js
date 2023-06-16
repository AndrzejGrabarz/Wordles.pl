import React from 'react';

function CustomConfirm({ text }) {
  return (
    <div role="alert">
      <div className=" font-mono border border-black-400 rounded-md bg-black-100 px-4 py-8 text-black-700 text-2xl">
        <p className="pb-8">{text}</p>
        <div className="flex justify-center">
          <button className="mr-4 w-20 py-3  bg-green-300 rounded-md" type="button">Yes</button>
          <button className="ml-4 w-20 py-3 bg-red-400 rounded-md" type="button">No</button>
        </div>
      </div>
    </div>
  );
}

export default CustomConfirm;
