import { AuthContext } from "../components/UseContext";

//firebase
import { db } from "../Services/Firebase";
import { getDocs, collection, doc, deleteDoc } from "firebase/firestore";

//context
import { useContext, useEffect, useState } from "react";

//router
import { Link } from "react-router-dom";

export function NossoBlog() {
  const [dataPost, setPosts] = useState<any[]>([]);
  const { isSign } = useContext(AuthContext);

  useEffect(() => {
    async function onSnapShot() {
      const response = await getDocs(collection(db, "postBlog"));
      const posts = response.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPosts(posts);
      console.log(dataPost);
    }

    onSnapShot();
  }, []);

  function truncateContent(content: string, wordCount: number) {
    const words = content.split(" ");
    return (
      words.slice(0, wordCount).join(" ") +
      (words.length > wordCount ? "..." : "")
    );
  }

  async function handleDelete(id: string) {
    const docRef = doc(db, "postBlog", id);
    console.log("referencia documento", docRef);
    console.log("chamado delete", id);
    await deleteDoc(docRef)
      .then(() => {
        console.log("excluido com sucesso");
      })
      .catch((error) => {
        console.log(error);
      });
    setPosts((prevPosts) => prevPosts.filter((posts) => posts.id != id));
  }

  return (
    <main
      className="bg-custom-blue-dark
    min-h-height-full-16px min-w-full flex items-center justify-center m-auto gap-8
       "
    >
      <div className=" flex-col items-center justify-center mb-28">
        {dataPost.length < 1 ? (
          <div className="text-white text-2xl text-center font-righ">
            Sem posts
          </div>
        ) : (
          <div className="flex-col items-center justify-center">
            {isSign === true ? (
              <button
                className="flex w-full items-center justify-center py-2 px-4 bg-white
               rounded-lg font-bold text-custom-blue-dark
                shadow-md shadow-black
                 hover:bg-custom-blue-dark transition duration-300 hover:text-white mm:max-md:mt-5"
              >
                <Link to={"/blog-admin"}>+ Post</Link>
              </button>
            ) : (
              ""
            )}
            <p className="text-white text-2xl text-center font-righ mt-10 mm:max-md:mt-10 mb-10 mm:max-md:mb-0">
              Lidta de publicações
            </p>
          </div>
        )}
        <div
          className="grid grid-cols-4 
        gap-8 mm:max-md:grid-cols-1
        mm:max-md:gap-0   "
        >
          {dataPost.map((docs) => {
            return (
              <section
                key={docs.uuid}
                className="w-80 min-h-96 bg-white p-5 shadow-lg shadow-black mm:max-md:mt-10 "
              >
                <div className="flex items-center justify-between ">
                  <h1
                    className="text-2xl font-righ
           font-bold text-custom-blue-dark mb-5 "
                  >
                    {docs.titulo}
                  </h1>
                  {isSign === true ? (
                    <button
                      onClick={() => handleDelete(docs.id)}
                      className="bg-red-200 px-2 rounded-md font-medium text-white hover:bg-red-400"
                    >
                      Excluir
                    </button>
                  ) : (
                    ""
                  )}
                </div>
                <div className="w-full border-b border-spacing-1 border-gray-400 mb-4"></div>

                <div className="w-full">
                  <img
                    className="w-full h-32 object-cover mb-5 "
                    src={docs.img}
                    alt={docs.titulo}
                  />
                </div>
                <div className="w-full border-b border-spacing-1 border-gray-400"></div>

                <p className="my-5 h-20 ">
                  {truncateContent(docs.conteudo, 10)}
                </p>
                <Link to={`/postDeatil/${docs.id}`}>
                  <button className="py-2 px-4  bg-custom-blue-dark rounded-lg font-bold text-white shadow-md shadow-black hover:bg-gray-100 transition duration-300 hover:text-custom-blue-dark">
                    Ler mais...
                  </button>
                </Link>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
