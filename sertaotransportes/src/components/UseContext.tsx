import React, { createContext, useState, ReactNode, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

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

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setSign(true);
      } else {
        setSign(false);
      }
    });

    // Limpa o listener quando o componente é desmontado
    return () => unsubscribe();
  }, []);

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
