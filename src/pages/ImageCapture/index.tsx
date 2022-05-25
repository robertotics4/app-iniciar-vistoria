import { useCallback, useEffect, useState } from 'react';
import { AiFillCamera, AiFillPauseCircle } from 'react-icons/ai';
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
import LoadingModal from '../../components/LoadingModal';
import { useBackoffice } from '../../hooks/backoffice';

interface ImageCaptureProps {
  header: string;
  imageSrc: string;
  description: string;
}

function ImageCapture({ header, description, imageSrc }: ImageCaptureProps) {
  const [source, setSource] = useState('');
  const { sources, clearSources } = useImages();
  const {
    authenticate,
    sendImagesToBackoffice,
    createSolicitation,
    uploadedImages,
  } = useBackoffice();
  const navigate = useNavigate();
  const [{ isLoading, message }, { start: startLoading, stop: stopLoading }] =
    useLoading();

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

  const startProcess = useCallback(async () => {
    try {
      startLoading('Enviando imagens...');

      await authenticate();

      await sendImagesToBackoffice(sources);

      // await createSolicitation(uploadedImages);

      clearSources();

      navigate('/');
    } catch (err: unknown) {
      Swal.fire('Erro', 'erro', 'error');
    } finally {
      stopLoading();
    }
  }, [
    authenticate,
    sendImagesToBackoffice,
    sources,
    clearSources,
    navigate,
    startLoading,
    stopLoading,
  ]);

  useEffect(() => {
    if (sources.length === 1) {
      navigate('/secondCapture');
    } else if (sources.length === 2) {
      navigate('/thirdCapture');
    } else if (sources.length === 3) {
      startProcess();
    }
  }, [navigate, sources.length, startProcess]);

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
              name="file"
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
