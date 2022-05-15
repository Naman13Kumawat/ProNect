import { useState, createContext } from "react";

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [themeValue, setTV] = useState("Theme");
  const [fundValue, setFV] = useState("Estimated Funding");
  const [footfallValue, setFFV] = useState("Footfall");
  return (
    <FilterContext.Provider
      value={{ themeValue, setTV, fundValue, setFV, footfallValue, setFFV }}
    >
      {children}
    </FilterContext.Provider>
  );
}
