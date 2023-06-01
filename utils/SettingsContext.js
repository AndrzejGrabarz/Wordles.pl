import { createContext, useState } from 'react';

export const ColNumContext = createContext();

export function ColNumContextProvider({ children }) {
  const [NumberOfColumn, setNumberOfColumn] = useState(5);
  return (
    <ColNumContext.Provider value={[NumberOfColumn, setNumberOfColumn]}>
      {children}
    </ColNumContext.Provider>
  );
}
