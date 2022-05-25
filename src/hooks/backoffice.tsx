import React, { createContext, useCallback, useContext, useState } from 'react';
import backofficeApi from '../services/backofficeApi';
import { sourceToArrayBuffer } from '../utils/sourceToArrayBuffer';
import { useCustomer } from './customer';

interface BackofficeContextData {
  authenticate: () => Promise<string>;
  sendImagesToBackoffice: (images: string[]) => Promise<void>;
  createSolicitation: (imageUrls: string[]) => Promise<void>;
  uploadedImages: string[];
}

interface BackofficeProviderProps {
  children?: React.ReactNode;
}

const BackofficeContext = createContext<BackofficeContextData>(
  {} as BackofficeContextData,
);

function BackofficeProvider({ children }: BackofficeProviderProps) {
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const { contractAccount } = useCustomer();

  const authenticate = useCallback(async () => {
    const authenticationResponse = await backofficeApi.post(
      '/jwt-auth/v1/token',
      {},
      {
        params: {
          username: process.env.REACT_APP_BACKOFFICE_USERNAME,
          password: process.env.REACT_APP_BACKOFFICE_PASSWORD,
        },
      },
    );

    const { token } = authenticationResponse.data;

    if (token) {
      backofficeApi.defaults.headers.common.Authorization = `Bearer ${token}`;
    }

    return token;
  }, []);

  const sendImagesToBackoffice = useCallback(
    async (images: string[]) => {
      if (!images.length) {
        throw new Error('Falha ao receber as imagens para o envio');
      }

      const fileInfos = images.map((image: string, index: number) => {
        if (index === 0) {
          return { name: `${contractAccount}-frente.jpg` };
        }
        if (index === 1) {
          return { name: `${contractAccount}-lateral.jpg` };
        }
        if (index === 2) {
          return { name: `${contractAccount}-completo.jpg` };
        }

        return undefined;
      });

      const promises = images.map(async (image, index) => {
        const arrayBuffer = await sourceToArrayBuffer(image);

        const uploadResponse = await backofficeApi.post(
          '/wp/v2/media',
          arrayBuffer,
          {
            headers: {
              'Content-Disposition': `form-data; filename=${fileInfos[index]?.name}`,
              'Content-Type': 'image/jpeg',
            },
          },
        );

        if (uploadResponse.data.source_url) {
          setUploadedImages([
            ...uploadedImages,
            uploadResponse.data.source_url,
          ]);
        }
      });

      Promise.all(promises);
    },
    [contractAccount, uploadedImages],
  );

  const createSolicitation = useCallback(
    async (imageUrls: string[]) => {
      if (uploadedImages.length === 3) {
        const contentObject = {
          nome_servico_formulario: 'Solicitar Vistoria Online',
          conta_contrato: contractAccount,
          'image-medidor_frente': imageUrls[0],
          'image-medidor_lateral': imageUrls[1],
          'image-medidor_completo': imageUrls[2],
        };

        const solicitationResponse = await backofficeApi.post(
          '/wp/v2/solicitacoes/',
          {
            title: 'Solicitar Vistoria Online',
            status: 'pending',
            content: JSON.stringify(contentObject),
          },
          {
            headers: {
              'Content-Type': 'image/jpeg',
            },
          },
        );

        console.log(contentObject);
        console.log(JSON.stringify(contentObject));
        console.log(solicitationResponse);
      }
    },
    [contractAccount, uploadedImages.length],
  );

  return (
    <BackofficeContext.Provider
      value={{
        authenticate,
        sendImagesToBackoffice,
        createSolicitation,
        uploadedImages,
      }}
    >
      {children}
    </BackofficeContext.Provider>
  );
}

function useBackoffice(): BackofficeContextData {
  const context = useContext(BackofficeContext);

  return context;
}

export { BackofficeProvider, useBackoffice };
