import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <a href="/" className="font-extrabold text-xl px-4">
            🎨 artre
          </a>
          <div className="px-4">
            <Button href="/" text="log in 🔐" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
