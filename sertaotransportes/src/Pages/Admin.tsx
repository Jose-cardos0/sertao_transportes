import React from "react";
import toast from "react-hot-toast";
import { useState } from "react";
import { auth } from "../Services/Firebase";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
//blog-admin

import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/UseContext";

export function Admin() {
  const [user, setUser] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [recover, setRecover] = useState(false);
  const [resetEmail, setResetEmail] = useState<any>();

  const { setSign } = useContext(AuthContext);

  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (user && password) {
      try {
        await signInWithEmailAndPassword(auth, user, password);
        setSign(true);
        toast.success("Login bem-sucedido!");
        navigate("/blog-admin");
      } catch (error) {
        toast.error(`Credenciais inválidas`);
      }
    } else {
      toast.error("Por favor, preencha todos os campos!");
    }
  }

  async function handleReset(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (resetEmail) {
      try {
        await sendPasswordResetEmail(auth, resetEmail);
        toast.success("Email de recuperação enviado.");
        setRecover(false);
      } catch (error) {
        toast.error("E-mail inválido.");
      }
    } else {
      toast.error("Por favor, preencha o e-mail.");
    }
  }

  return (
    <main className="min-h-height-full-16px min-w-ful flex-col bg-custom-blue-dark flex items-center justify-center m-auto">
      <section
        className="z-0 relative flex-col
       items-center justify-center m-auto max-w-96
        bg-white shadow-md shadow-black p-10"
      >
        <h2 className="text-custom-blue-dark font-righ text-2xl">
          Admin Dashboard
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex-col pt-6 items-center justify-center w-full "
        >
          <label
            className="text-custom-blue-dark flex-col items-center justify-center m-auto w-10/12"
            htmlFor=""
          >
            <p className="font-bold my-1">Login:</p>
            <input
              className="p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full"
              type="text"
              name="login"
              id=""
              placeholder="Entre com seu login"
              required
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </label>
          <label
            className="text-custom-blue-dark flex-col items-center justify-center m-auto w-10/12"
            htmlFor=""
          >
            <p className="font-bold my-1">Senha:</p>
            <input
              className="p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full"
              type="password"
              name="login"
              id=""
              placeholder="Digite sua senha"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="pt-3">
            <button
              className="py-2 px-4 bg-custom-blue-dark 
              rounded-lg font-bold text-white shadow-md shadow-black hover:bg-gray-100 transition duration-300 hover:text-custom-blue-dark"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
        <div className="mt-2">
          <a
            onClick={() => setRecover(true)}
            className="hover:text-blue-500"
            href="#"
          >
            &#10095; Recuperar senha
          </a>{" "}
        </div>
      </section>
      {recover === true ? (
        <div
          className="absolute bg-custom-blue-dark min-h-height-full-16px
         w-screen flex items-center justify-center m-auto"
        >
          <div className=" bg-white px-6 w-10/12 shadow-md shadow-black  ">
            <form
              onSubmit={handleReset}
              className="flex-col items-center justify-center w-full  "
            >
              <p className="font-bold flex justify-between items-center mb-5 text-custom-blue-dark mt-3">
                Digite seu login:
                <button
                  onClick={() => setRecover(false)}
                  className="px-2  bg-custom-blue-dark text-white rounded-md
               hover:bg-red-300 transition duration-300 hover:text-white"
                >
                  X
                </button>
              </p>
              <input
                type="text"
                value={resetEmail}
                onChange={(e) => setResetEmail(e.target.value)}
                className="p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full"
              />

              <button
                type="submit"
                className="py-2 px-4 my-5 bg-custom-blue-dark 
              rounded-lg font-bold text-white shadow-md
               shadow-black hover:bg-gray-100
                transition duration-300
                 hover:text-custom-blue-dark"
              >
                Recuperar senha
              </button>
            </form>
          </div>
        </div>
      ) : (
        ""
      )}
    </main>
  );
}
