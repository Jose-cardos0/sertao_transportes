import { useState } from "react";
//axios
import axios from "axios";
//uuid
import { v4 as uuidv4 } from "uuid";
//firebase
import { collection, addDoc } from "firebase/firestore";
import { db } from "../Services/Firebase";
import toast from "react-hot-toast";
//progress

const api = "47fddb1bca09eb9ff57434ed38886699";

export function BlogAdmin() {
  const [titulo, setTitulo] = useState<string>();
  const [img, setImg] = useState<string | null>(null);
  const [textArea, setTexArea] = useState<string>();
  const [image, setImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  //send submig
  async function handleSubmit(e: any) {
    e.preventDefault();
    handleSendPost(e);
  }

  //render img na tela
  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImg(reader.result as string);
      };
      reader.readAsDataURL(file);
      setImage(file);
    }
  }

  //submit form
  async function handleSendPost(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    uploadImage();

    if (!titulo || !textArea || !imageUrl) {
      toast.error("Por favor, tente novamente!");
      return;
    }

    const postData = {
      id: uuidv4(),
      titulo: titulo,
      conteudo: textArea,
      img: imageUrl,
      data: new Date(),
    };

    try {
      await addDoc(collection(db, "postBlog"), postData);
      toast.success("Post criado!");
      setTitulo("");
      setImg("");

      setTexArea("");
    } catch (error) {
      toast.error("Ops... Algo deu errado");
      console.log(error);
    }
  }

  //envio imbb
  async function uploadImage() {
    if (!image) return;

    const formData = new FormData();
    formData.append("image", image);

    try {
      const response = await axios.post(
        `https://api.imgbb.com/1/upload?expiration=600&key=${api}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setImageUrl(response.data.data.url);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <main className="bg-custom-blue-dark w-full flex items-center justify-center m-auto min-h-height-full-16px">
      <section className="w-11/12">
        <form
          onSubmit={handleSubmit}
          className="w-full p-5 bg-white flex-col items-center justify-center shadow-md shadow-black"
        >
          <div className="w-full flex-col">
            <div>
              <h1 className="text-3xl font-righ font-bold text-custom-blue-dark">
                Novo post
              </h1>
            </div>
            <label className="flex flex-col mt-6">
              <p className="font-righ text-custom-blue-dark">Imagem</p>
              <input
                className="hidden"
                type="file"
                id="file-upload"
                accept="image/*"
                onChange={handleImageChange}
              />
              <label
                htmlFor="file-upload"
                className="flex items-center justify-center p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full cursor-pointer hover:bg-blue-200 transition duration-200"
              >
                {img ? (
                  <img
                    src={img}
                    alt="Preview"
                    className="w-16 h-16 rounded-md object-cover mr-2"
                  />
                ) : (
                  <span>Selecione uma imagem</span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-custom-blue-dark"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 7v14a2 2 0 002 2h14a2 2 0 002-2V7M3 7l9 5 9-5M3 7h18"
                  />
                </svg>
              </label>
            </label>
            <label className="mt-6">
              <p className="font-righ text-custom-blue-dark">Título do post:</p>
              <input
                className="p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full"
                type="text"
                placeholder="Digite o título do post..."
                value={titulo}
                onChange={(e) => setTitulo(e.target.value)}
              />
            </label>
            <label>
              <p className="font-righ text-custom-blue-dark">
                Conteúdo do post:
              </p>
              <textarea
                className="p-2 text-custom-blue-dark rounded-md outline-none bg-blue-100 w-full"
                placeholder="Digite aqui o conteúdo do post..."
                value={textArea}
                onChange={(e) => setTexArea(e.target.value)}
              />
            </label>
          </div>
          <button
            className="py-2 px-4 my-5 bg-custom-blue-dark rounded-lg font-bold text-white shadow-md shadow-black hover:bg-gray-100 transition duration-300 hover:text-custom-blue-dark"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </section>
    </main>
  );
}
