import { useCallback, useEffect, useState } from 'react';
import { AiFillCamera } from 'react-icons/ai';
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

interface ImageCaptureProps {
  header: string;
  imageSrc: string;
  description: string;
}

function ImageCapture({ header, description, imageSrc }: ImageCaptureProps) {
  const [source, setSource] = useState('');
  const { sources } = useImages();

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

  useEffect(() => {}, [sources]);

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
    </Container>
  );
}

export { ImageCapture };
