import { BackofficeProvider } from './backoffice';
import { CustomerProvider } from './customer';
import { ImagesProvider } from './images';

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
    <CustomerProvider>
      <ImagesProvider>
        <BackofficeProvider>{children}</BackofficeProvider>
      </ImagesProvider>
    </CustomerProvider>
  );
}

export { AppProvider };
