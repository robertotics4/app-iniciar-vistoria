import { AiFillCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import { Container } from './styles';

interface AlertProps {
  type: 'success' | 'error';
  title: string;
  message: string;
}

function Alert({ type, title, message }: AlertProps) {
  return (
    <Container type={type}>
      {type === 'success' ? (
        <AiFillCheckCircle color="#FFFFFF" size={110} />
      ) : (
        <AiOutlineCloseCircle color="#FFFFFF" size={110} />
      )}

      <h1>{title}</h1>

      <p>{message}</p>
    </Container>
  );
}

export { Alert };
