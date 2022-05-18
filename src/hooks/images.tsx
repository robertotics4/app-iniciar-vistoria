import React, { createContext, useCallback, useContext, useState } from 'react';

interface ImagesContextData {
  sources: string[];
  pushImage: (newImage: string) => void;
}

interface ImagesProviderProps {
  children?: React.ReactNode;
}

const ImagesContext = createContext<ImagesContextData>({} as ImagesContextData);

function ImagesProvider({ children }: ImagesProviderProps) {
  const [sources, setSources] = useState<string[]>([]);

  const pushImage = useCallback(
    (newImage: string) => {
      setSources([...sources, newImage]);
    },
    [sources, setSources],
  );

  return (
    <ImagesContext.Provider
      value={{
        sources,
        pushImage,
      }}
    >
      {children}
    </ImagesContext.Provider>
  );
}

function useImages(): ImagesContextData {
  const context = useContext(ImagesContext);

  return context;
}

export { ImagesProvider, useImages };
