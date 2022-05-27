import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './hooks';
import { GlobalStyle } from './styles/global';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
