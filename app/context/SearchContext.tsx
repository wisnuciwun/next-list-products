'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface Search {
     keyword: string;
}

interface SearchContextType {
     keyword: Search | null;
     setkeyword: any
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SeachProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
     const [keyword, setkeyword] = useState<Search | null>(null);


     return (
          <SearchContext.Provider value={{ keyword, setkeyword }}>
               {children}
          </SearchContext.Provider>
     );
};

export const useSearchKeyword = (): SearchContextType => {
     const context = useContext(SearchContext);
     if (context === undefined) {
          throw new Error('err');
     }
     return context;
};
