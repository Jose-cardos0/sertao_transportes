import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { db } from "../Services/Firebase";

//icons
import { MdKeyboardReturn } from "react-icons/md";

//framotion
import { motion } from "framer-motion";

export function PostDeatil() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>();

  useEffect(() => {
    if (!id) {
      return;
    }

    const connectDb = doc(db, "postBlog", id);
    getDoc(connectDb).then((snapShot) => {
      if (!snapShot.data()) {
        navigate("/home");
      }
      setPost({
        titulo: snapShot.data()?.titulo,
        conteudo: snapShot.data()?.conteudo,
        img: snapShot.data()?.img,
        data: snapShot.data()?.data,
      });
    });
  }, [id]);

  //formatar recepção de data
  function FormatTime(timestamp: any) {
    if (!timestamp) return "";
    const date = new Date(timestamp.seconds * 1000);
    return date.toLocaleDateString("pt-BR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  }

  return (
    <main
      className="bg-custom-blue-dark flex
     items-center justify-center p-5"
    >
      {post && (
        <div className="w-2/3 mt-6  mm:max-md:w-full ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="p-5 bg-white mm:max-md:w-full shadow-md shadow-black"
          >
            <div
              className="flex items-center
             justify-between mb-5"
            >
              <h1
                className="text-custom-blue-dark
               font-righ text-2xl text-center items-center justify-center  "
              >
                {post?.titulo}
              </h1>
              <Link to={"/blogSertao"}>
                <button
                  className="py-2 px-4
                  bg-custom-blue-dark rounded-lg
                   font-bold text-white shadow-md
                    shadow-black hover:bg-gray-100 
                    transition duration-300
                     hover:text-custom-blue-dark"
                >
                  <MdKeyboardReturn />
                </button>
              </Link>
            </div>
            <img
              className="rounded-md shadow-md shadow-black mb-7"
              src={post?.img}
              alt=""
            />
            <p className="font-thin mb-5">{post?.conteudo}</p>
            <p className="font-extralight text-gray-400 text-sm">
              {FormatTime(post?.data)}
            </p>
          </motion.div>
        </div>
      )}
    </main>
  );
}
