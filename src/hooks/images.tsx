import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

interface ImagesContextData {
  sources: string[];
  pushImage: (newImage: string) => void;
  clearSources: () => void;
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

  const clearSources = useCallback(() => {
    setSources([]);
  }, []);

  useEffect(() => {}, [pushImage]);

  return (
    <ImagesContext.Provider
      value={{
        sources,
        pushImage,
        clearSources,
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
