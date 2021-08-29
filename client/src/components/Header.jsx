import Button from "./Button";

const Header = () => {
  return (
    <div className="flex flex-col max-w-5xl mx-auto my-10 px-4">
      <div className="font-black text-6xl py-5">
        a reverse-crowdfunding platform made by artists, for artists.
      </div>
      <div className="py-5 text-xl max-w-4xl">
        come up with ideas that you think your favorite artists would want to
        make, raise funds for it, and we'll take it from there.
      </div>
      <div className="py-5">
        <Button href="/about" text="read about our mission" />
      </div>
    </div>
  );
};

export default Header;
