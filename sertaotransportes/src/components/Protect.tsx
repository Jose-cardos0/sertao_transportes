import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Services/Firebase";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";

interface PropsRoute {
  children: ReactNode;
}

export function Protect({ children }: PropsRoute) {
  const [loading, setLoading] = useState(true);
  const [logado, setLogado] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const eyes = onAuthStateChanged(auth, (user) => {
      if (user) {
        setLoading(false);
        setLogado(true);
      } else {
        setLoading(false);
        setLogado(false);
        navigate("/", { replace: true });
      }
    });

    return () => {
      eyes();
    };
  }, []);

  if (loading) {
    return (
      <div
        className="w-full min-h-height-full-16px
       bg-custom-blue-dark text-white text-2xl flex items-center justify-center m-auto"
      >
        <div className="flex-col items-center justify-center">
          <div
            className="w-16 h-16 border-4
         border-blue-700 bg-transparent 
         rounded-full animate-bounce flex-col"
          ></div>
          <div className="text-sm text-center">Loading...</div>
        </div>
      </div>
    );
  }

  if (!logado) {
    return <Navigate to={"/admin"} />;
  }

  return children;
}
