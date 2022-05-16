import { useCallback, useState } from 'react';
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

import frenteMedidor from '../../assets/frente-medidor.svg';

function ImageCapture() {
  const [source, setSource] = useState('');

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

  return source ? (
    <ImagePreview
      source={source}
      setSource={(value: string) => handleSetSource(value)}
    />
  ) : (
    <Container>
      <Header>
        <h2>cabeçalho da imagem</h2>
      </Header>

      <Content>
        <ImageContainer>
          <img
            src={frenteMedidor}
            style={{
              height: 'inherit',
              maxWidth: 'inherit',
            }}
            alt="Imagem do medidor"
          />

          <h2>Tire uma foto da frente da caixa de medição</h2>

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
