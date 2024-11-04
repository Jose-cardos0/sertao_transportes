import React, { createContext, useState, ReactNode } from "react";

interface UseContextType {
  isSign: boolean;
  setSign: React.Dispatch<React.SetStateAction<boolean>>;
}

type AuthProviderData = {
  children: ReactNode;
};

//contexto
const AuthContext = createContext({} as UseContextType);

//provider
export const AuthProvider = ({ children }: AuthProviderData) => {
  const [isSign, setSign] = useState<boolean>(false);

  return (
    <AuthContext.Provider value={{ isSign, setSign }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
