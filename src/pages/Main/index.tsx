import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import CryptoJS from 'crypto-js';

import { Container, Content } from './styles';
import logo from '../../assets/logo.svg';
import { useCustomer } from '../../hooks/customer';

function Main() {
  const navigate = useNavigate();
  const { hash } = useParams();
  const { contractAccount, setContractAccount } = useCustomer();

  useEffect(() => {
    if (hash) {
      const bytes = CryptoJS.AES.decrypt(
        hash,
        process.env.REACT_APP_ENCRYPTION_KEY as string,
      );
      const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

      setContractAccount(decryptedData);
    }
  }, [setContractAccount, hash]);

  return (
    <Container>
      <Content>
        <img src={logo} alt="Logo da Equatorial Energia" />

        <h5>Seja-bem vindo, você está na vistoria online</h5>

        {contractAccount ? (
          <>
            <p>
              Para prosseguir com o processo de ligação, envie as 3 fotos
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
