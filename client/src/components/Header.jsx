import Button from "./Button";

const Header = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto my-10 px-4">
      <div className="z-0 relative max-w-lg w-full mx-auto">
        <div className="absolute top-16 -left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-3"></div>
        <div className="absolute top-28 -right-4 w-64 h-64 bg-red-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob animation-delay-5"></div>
        <div className="absolute -top-6 left-10 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-60 animate-blob"></div>
      </div>
      <div className="z-10">
        <div>
          <h1 className="font-black text-6xl py-5">
            A reverse-crowdfunding platform made for artists.
          </h1>
        </div>
        <div>
          <p className="py-5 text-xl max-w-4xl text-gray-400">
            Come up with ideas that you think your favorite artists would want
            to make, raise funds for it, and we'll take it from there.
          </p>
        </div>
        <div className="py-5">
          <Button href="/about" text="Read about our mission" />
        </div>
      </div>
    </div>
  );
};

export default Header;
