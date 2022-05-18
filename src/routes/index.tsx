import { Routes as Switch, Route } from 'react-router-dom';

import { ImageCapture } from '../pages/ImageCapture';
import { Main } from '../pages/Main';

import imgFrenteMedidor from '../assets/frente-medidor.svg';
import imgLateralmedidor from '../assets/lateral-medidor.svg';
import { Success } from '../pages/Success';

function Routes() {
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
      <Route path="/end" element={<Success />} />
    </Switch>
  );
}

export default Routes;
