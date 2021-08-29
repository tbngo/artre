const Navbar = () => {
  return (
    <nav className="bg-green-200 py-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between">
          <a href="/" className="font-extrabold text-2xl px-4">
            🎨 artre
          </a>
          <div>
            <a href="/" className="px-4 font-bold text-white">
              sign up
            </a>
            <a href="/" className="px-4 font-bold text-white">
              login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
