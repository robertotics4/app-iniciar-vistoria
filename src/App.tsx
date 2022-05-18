import { BrowserRouter } from 'react-router-dom';

import { AppProvider } from './hooks';
import { ImageCapture } from './pages/ImageCapture';
import { GlobalStyle } from './styles/global';

import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <Routes />
        <GlobalStyle />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
