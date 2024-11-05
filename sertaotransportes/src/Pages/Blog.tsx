import { getDocs, collection } from "firebase/firestore";

import { db } from "../Services/Firebase";
import { useEffect, useState } from "react";

export function NossoBlog() {
  const [dataPost, setPosts] = useState<any[]>([]);

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
          <div className="text-white text-2xl text-center font-righ mt-10 mm:max-md:mt-10 mb-10 mm:max-md:mb-0">
            Lidta de publicações
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
                key={docs.id}
                className="w-80 h-96 bg-white p-5 shadow-lg shadow-black mm:max-md:mt-10 "
              >
                <div>
                  <h1
                    className="text-3xl font-righ
           font-bold text-custom-blue-dark mb-5 text-center"
                  >
                    {docs.titulo}
                  </h1>
                </div>

                <div className="w-full">
                  <img
                    className="w-full h-32 object-cover mb-5 "
                    src={docs.img}
                    alt={docs.titulo}
                  />
                </div>

                <p className="mb-5 h-20 ">
                  {truncateContent(docs.conteudo, 5)}
                </p>
                <button className="py-2 px-4  bg-custom-blue-dark rounded-lg font-bold text-white shadow-md shadow-black hover:bg-gray-100 transition duration-300 hover:text-custom-blue-dark">
                  Ler mais...
                </button>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}
