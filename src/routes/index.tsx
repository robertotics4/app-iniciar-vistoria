import { Routes as Switch, Route } from 'react-router-dom';

import { ImageCapture } from '../pages/ImageCapture';
import { Main } from '../pages/Main';

import imgFrenteMedidor from '../assets/frente-medidor.svg';
import imgLateralmedidor from '../assets/lateral-medidor.svg';
import { Alert } from '../pages/Alert';
import { useBackoffice } from '../hooks/backoffice';

function Routes() {
  const { solicitationError } = useBackoffice();

  return (
    <Switch>
      <Route path="/" element={<Main />}>
        <Route path="/:contractAccount" element={<Main />} />
      </Route>
      <Route
        path="/firstCapture"
        element={
          <ImageCapture
            header="Caixa de medição - Frente"
            imageSrc={imgFrenteMedidor}
            description="Tire uma foto da frente da caixa de medição"
          />
        }
      />
      <Route
        path="/secondCapture"
        element={
          <ImageCapture
            header="Caixa de medição - Lateral"
            imageSrc={imgLateralmedidor}
            description="Tire uma foto da lateral da caixa de medição"
          />
        }
      />
      <Route
        path="/thirdCapture"
        element={
          <ImageCapture
            header="Padrão completo"
            imageSrc={imgLateralmedidor}
            description="Dê dois passos para trás e tire uma foto do padrão completo"
          />
        }
      />
      <Route
        path="/end"
        element={
          <Alert
            type={solicitationError ? 'error' : 'success'}
            title={
              solicitationError ? 'Falha na Vistoria!' : 'Vistoria Finalizada!'
            }
            message={
              solicitationError
                ? 'Não foi possível gerar sua solicitação de Vistoria Online, tente novamente.'
                : 'Suas fotos foram enviadas com sucesso e em breve nossa equipe entrará em contato com você.'
            }
          />
        }
      />
    </Switch>
  );
}

export default Routes;
