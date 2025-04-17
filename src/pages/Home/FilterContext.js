// src/pages/Home/FilterContext.js
import { createContext, useState } from 'react';

export const FilterContext = createContext();

export const FilterProvider = ({ children }) => {
  const [filterType, setFilterType] = useState("All"); // "Veg", "NonVeg", "All"

  return (
    <FilterContext.Provider value={{ filterType, setFilterType }}>
      {children}
    </FilterContext.Provider>
  );
};
