import React from 'react';

function CustomAlert({ text }) {
  return (
    <div role="alert">
      <div className="border border-black-400 rounded-md bg-red-100 px-4 py-8 text-red-700 text-xl">
        <p>{text}</p>
      </div>
    </div>
  );
}

export default CustomAlert;
