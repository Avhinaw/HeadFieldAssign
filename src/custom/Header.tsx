import { Link } from "react-router-dom";
import { RiMenu5Fill } from "react-icons/ri";
import { useState } from "react";
import MenuModal from "../components/MenuModal";
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div className={`w-full h-18 bg-transparent text-white z-1001 flex justify-between px-12 fixed shadow-xl ${isMenuOpen ? "backdrop-blur-none" : "backdrop-blur-xl"}`}>
      <div className="flex items-center gap-3">
      <Link to="/" className="flex items-center gap-3">
          <img className="object-cover h-1/2" src="/Frame.png" alt="logo" />
          <h3 className="font-semibold">Shadient.co</h3>
        </Link>
      </div>

<button onClick={() => setIsMenuOpen(true)}>
<div className={`bg-transparent ml-25 lg:hidden flex h-10 w-32 cursor-pointer ${isMenuOpen ? "hidden" : "flex"}`}>
<RiMenu5Fill className="text-4xl m-auto mt-0" />
</div>
</button>
<MenuModal isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />


      <div className="hidden lg:flex items-center gap-4">
        <Link to="/about" className="cursor-pointer">
          Company
        </Link>
        <Link to="/services" className="cursor-pointer">
          Services
        </Link>
        <Link to="/resource" className="cursor-pointer">
          Resources
        </Link>
        <Link to="/contact">
          <button className="cursor-pointer">Contact</button>
        </Link>
      </div>
    </div>
  );
}

export default Header;