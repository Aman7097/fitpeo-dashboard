import React, { createContext, useState, useContext } from 'react';

interface SearchContextType {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchContext = createContext<SearchContextType>({
  searchQuery: '',
  setSearchQuery: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchQueryProvider: any = ({ children }: any) => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};
