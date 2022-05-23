import { useCallback, useEffect, useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useLoading } from 'react-use-loading';

import {
  Container,
  Content,
  Header,
  ImageContainer,
  InputImageFile,
  LabelImageFile,
  CaptureContainer,
} from './styles';

import { ImagePreview } from '../ImagePreview';
import { useImages } from '../../hooks/images';
import backofficeApi from '../../services/backofficeApi';
import LoadingModal from '../../components/LoadingModal';

interface ImageCaptureProps {
  header: string;
  imageSrc: string;
  description: string;
}

function ImageCapture({ header, description, imageSrc }: ImageCaptureProps) {
  const [source, setSource] = useState('');
  const { sources } = useImages();
  const navigate = useNavigate();
  const [{ isLoading, message }, { start: startLoading, stop: stopLoading }] =
    useLoading();

  const sendImagesToBackoffice = useCallback(
    async (images: string[]) => {
      if (!images.length) {
        throw new Error('Falha ao receber as imagens para o envio');
      }

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

      sources.forEach(async (image: string, index: number) => {
        const uploadResponse = await backofficeApi.post('/wp/v2/media', image, {
          headers: {
            'Content-Disposition': `form-data; filename="teste.jpg"`,
            'Content-Type': 'image/jpeg',
            Authorization: `Bearer ${token}`,
          },
        });

        console.log(uploadResponse);
      });
    },
    [sources],
  );

  const handleSetSource = useCallback((value: string) => {
    setSource(value);
  }, []);

  const handleCapture = (target: any) => {
    if (target.files) {
      if (target.files.length !== 0) {
        const file = target.files[0];
        const newUrl = URL.createObjectURL(file);
        setSource(newUrl);
      }
    }
  };

  useEffect(() => {
    if (sources.length === 1) {
      navigate('/secondCapture');
    } else if (sources.length === 2) {
      navigate('/thirdCapture');
    } else if (sources.length > 2) {
      startLoading('Enviando imagens ...');

      sendImagesToBackoffice(sources)
        .then(() => {
          navigate('/end');
        })
        .catch(err => {
          Swal.fire(
            'Falha no upload',
            err.message || 'Falha ao enviar as imagens para análise',
            'error',
          );
        })
        .finally(() => {
          stopLoading();
        });
    }
  }, [
    sources,
    setSource,
    navigate,
    sendImagesToBackoffice,
    startLoading,
    stopLoading,
  ]);

  return source ? (
    <ImagePreview
      source={source}
      setSource={(value: string) => handleSetSource(value)}
    />
  ) : (
    <Container>
      <Header>
        <h2>{header}</h2>
      </Header>

      <Content>
        <ImageContainer>
          <img
            src={imageSrc}
            style={{
              height: 'inherit',
              maxWidth: 'inherit',
            }}
            alt="Imagem do medidor"
          />

          <h2>{description}</h2>

          <CaptureContainer>
            <InputImageFile
              accept="image/*"
              id="icon-button-file"
              type="file"
              capture="environment"
              onChange={e => handleCapture(e.target)}
            />

            <LabelImageFile htmlFor="icon-button-file">
              <AiFillCamera size={20} />
              Tirar Foto
            </LabelImageFile>
          </CaptureContainer>
        </ImageContainer>
      </Content>

      {isLoading && (
        <LoadingModal
          isOpen={isLoading}
          message={message}
          setIsOpen={stopLoading}
        />
      )}
    </Container>
  );
}

export { ImageCapture };
