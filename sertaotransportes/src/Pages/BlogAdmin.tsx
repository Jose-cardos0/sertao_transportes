import { signOut } from "firebase/auth";
import { auth } from "../Services/Firebase";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useState } from "react";

export function BlogAdmin() {
  const [titulo, setTitulo] = useState<string>();
  const [img, setImg] = useState<string>();
  const [textArea, setTexArea] = useState<string>();
  const navigate = useNavigate();

  async function signOutLogin() {
    try {
      await signOut(auth);
      navigate("/admin", { replace: true });
      toast.success("Deslogado com sucesso!");
    } catch (error) {
      toast.error("Algo deu errado ao deslogar");
    }
  }
  return (
    <main
      className="bg-custom-blue-dark min-h-screen
     flex items-center justify-center m-auto"
    >
      <section className="w-11/12">
        <div className="w-full flex justify-end items-end ">
          <button
            className="py-2 px-4 my-5 bg-custom-blue-dark 
        rounded-lg font-bold text-white shadow-md
         shadow-black hover:bg-gray-100
          transition duration-300
           hover:text-custom-blue-dark"
            onClick={signOutLogin}
          >
            Sair
          </button>
        </div>

        <form className="w-full p-5 bg-white flex-col items-center justify-center shadow-md shadow-black">
          <div className="w-full flex-col ">
            <div>
              <h1
                className="text-3xl font-righ
           font-bold text-custom-blue-dark"
              >
                Novo post
              </h1>
            </div>
            <label>
              <p className="font-righ text-custom-blue-dark">Imagem</p>
              <input
                className="p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full"
                type="file"
                placeholder="Digite o título do post"
                value={img}
                onChange={(e) => setImg(e.target.value)}
              />
            </label>
            <label>
              <p className="font-righ text-custom-blue-dark">Titulo do post:</p>
              <input
                className="p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full"
                type="text"
                placeholder="Digite o título do post"
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </label>
            <label>
              <p className="font-righ text-custom-blue-dark">Titulo do post:</p>
              <textarea
                name=""
                id=""
                className="p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full"
              ></textarea>
            </label>
          </div>
          <button
            className="py-2 px-4 my-5 bg-custom-blue-dark 
        rounded-lg font-bold text-white shadow-md
         shadow-black hover:bg-gray-100
          transition duration-300
           hover:text-custom-blue-dark"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
