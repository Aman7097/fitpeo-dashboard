import React, { createContext, useState, useContext } from 'react';

interface LoaderContextType {
  isLoading: boolean;
  setLoader: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoaderContext = createContext<LoaderContextType>({
  isLoading: false,
  setLoader: () => {},
});

export const useLoaderContext = () => useContext(LoaderContext);

export const LoaderProvider: any = ({ children }: any) => {
  const [isLoading, setLoader] = useState(false);

  return (
    <LoaderContext.Provider value={{ isLoading, setLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
