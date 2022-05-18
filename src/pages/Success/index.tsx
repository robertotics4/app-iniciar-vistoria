import { AiFillCheckCircle } from 'react-icons/ai';
import { Container } from './styles';

function Success() {
  return (
    <Container>
      <AiFillCheckCircle color="#FFFFFF" size={110} />

      <h1>Vistoria Finalizada!</h1>

      <p>
        Suas fotos foram enviadas com sucesso e em breve nossa equipe entrará em
        contato com você.
      </p>
    </Container>
  );
}

export { Success };
