import { CustomerProvider } from './customer';
import { ImagesProvider } from './images';

interface Props {
  children: React.ReactNode;
}

function AppProvider({ children }: Props) {
  return (
    <CustomerProvider>
      <ImagesProvider>{children}</ImagesProvider>
    </CustomerProvider>
  );
}

export { AppProvider };
