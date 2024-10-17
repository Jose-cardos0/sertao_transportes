import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="min-w-full bg-custom-blue-dark min-h-11 flex items-center justify-between">
      <div className="flex w-full items-center justify-between mx-10 font-robotoC text-white">
        <button
          className={`relative px-3 py-1 font-robotoC ${
            isOpen == true ? "bg-custom-blue-light rounded-md " : ""
          }`}
          onClick={() => setIsOpen((prev) => !prev)}
        >
          Conheça a Sertão Transportes
        </button>
        {isOpen && (
          <div className="absolute top-11 flex gap-10 left-0 right-0 bg-custom-blue-light min-w-full min-h-11 items-center bg-opacity-70 z-50">
            <p className="ml-10 font-robotoC">Nossa História</p> <br />
            <p>Institucional</p>
          </div>
        )}
        <ul className="flex gap-20">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Exit</li>
        </ul>
      </div>
    </header>
  );
}
