import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';

function Main() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo da Equatorial Energia" />

        <h5>Seja-bem vindo, você está na vistoria online</h5>

        <p>
          Para prosegguir com o processo de ligação, envie as fotos solicitadas.
        </p>

        <button type="button">Iniciar Vistoria</button>
      </Content>
    </Container>
  );
}

export { Main };
