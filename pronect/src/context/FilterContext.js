import { useState, createContext } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [filterId, setFI] = useState(null);
  const [filterValue, setFV] = useState(null);
  return (
    <FilterContext.Provider value={{ filterId, setFI, filterValue, setFV }}>
      {children}
    </FilterContext.Provider>
  );
}
