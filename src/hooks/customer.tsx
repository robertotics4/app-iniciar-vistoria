import React, { createContext, useContext, useState } from 'react';

interface CustomerContextData {
  contractAccount: string;
  setContractAccount: (contractAccount: string) => void;
}

interface CustomerProviderProps {
  children?: React.ReactNode;
}

const CustomerContext = createContext<CustomerContextData>(
  {} as CustomerContextData,
);

function CustomerProvider({ children }: CustomerProviderProps) {
  const [contractAccount, setContractAccount] = useState<string>('');

  return (
    <CustomerContext.Provider value={{ contractAccount, setContractAccount }}>
      {children}
    </CustomerContext.Provider>
  );
}

function useCustomer(): CustomerContextData {
  const context = useContext(CustomerContext);

  return context;
}

export { CustomerProvider, useCustomer };
