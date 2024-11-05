import React, { createContext, useState, ReactNode } from "react";

//signout
import { signOut } from "firebase/auth";
import { auth } from "../Services/Firebase";
import toast from "react-hot-toast";

interface UseContextType {
  isSign: boolean;
  setSign: React.Dispatch<React.SetStateAction<boolean>>;
  signOutLogin: () => void;
}

type AuthProviderData = {
  children: ReactNode;
};

//contexto
export const AuthContext = createContext({} as UseContextType);

//provider
export const AuthProvider = ({ children }: AuthProviderData) => {
  const [isSign, setSign] = useState<boolean>(false);
  console.log(isSign);

  async function signOutLogin() {
    try {
      await signOut(auth);
      setSign(false);
      toast.success("Deslogado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado ao deslogar");
    }
  }

  return (
    <AuthContext.Provider value={{ isSign, setSign, signOutLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
