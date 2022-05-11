import { AiFillCamera } from 'react-icons/ai';
import {
  Container,
  Content,
  Header,
  ImageContainer,
  CaptureButton,
} from './styles';

import frenteMedidor from '../../assets/frente-medidor.svg';

function ImageCapture() {
  return (
    <Container>
      <Header>
        <h2>cabeçalho da imagem</h2>
      </Header>
      <Content>
        <ImageContainer>
          <img src={frenteMedidor} alt="Imagem do medidor" />

          <h2>Tire uma foto da frente da caixa de medição</h2>
        </ImageContainer>

        <CaptureButton>
          <AiFillCamera size={20} />
          Tirar Foto
        </CaptureButton>
      </Content>
    </Container>
  );
}

export { ImageCapture };
