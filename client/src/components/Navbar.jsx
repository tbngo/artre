import LoginDialog from "./LoginDialog";

const Navbar = () => {
  return (
    <nav className="py-10">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between">
          <a href="/" className="font-extrabold text-xl px-4">
            🎨 artre
          </a>
          <LoginDialog />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
