import { Routes as Switch, Route } from 'react-router-dom';

import { ImageCapture } from '../pages/ImageCapture';
import { Main } from '../pages/Main';

function Routes() {
  return (
    <Switch>
      <Route path="/" element={<Main />}>
        <Route path="/:contractAccount" element={<Main />} />
      </Route>
      <Route path="/firstCapture" element={<ImageCapture />} />
    </Switch>
  );
}

export default Routes;
