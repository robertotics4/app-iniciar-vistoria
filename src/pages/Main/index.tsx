import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { Container, Content } from './styles';

import logo from '../../assets/logo.svg';
import { useCustomer } from '../../hooks/customer';

function Main() {
  const navigate = useNavigate();
  const { contractAccount: paramContract } = useParams();
  const { contractAccount, setContractAccount } = useCustomer();

  useEffect(() => {
    if (paramContract) {
      setContractAccount(paramContract);
    }
  }, [setContractAccount, paramContract]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo da Equatorial Energia" />

        <h5>Seja-bem vindo, você está na vistoria online</h5>

        {contractAccount ? (
          <>
            <p>
              Para prosegguir com o processo de ligação, envie as fotos
              solicitadas.
            </p>

            <p>Sua conta contrato é: {contractAccount}</p>

            <button onClick={() => navigate('/firstCapture')} type="button">
              Iniciar Vistoria
            </button>
          </>
        ) : (
          <p>Link inválido, solicite o reenvio</p>
        )}
      </Content>
    </Container>
  );
}

export { Main };
