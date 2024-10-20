import footer from "../assets/footer/Footer.png";

export function Footer() {
  return (
    <footer
      style={{
        backgroundImage: `url(${footer})`,
      }}
      className="w-full min-h-96 bg-contain bg-center bg-no-repeat flex-grow items-end justify-end z-50"
    ></footer>
  );
}
