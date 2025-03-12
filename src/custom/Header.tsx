import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full h-18 bg-transparent text-white z-1001 flex justify-between px-12 fixed shadow-xl">
      <div className="flex items-center gap-3">
      <Link to="/" className="flex items-center gap-3">
          <img className="object-cover h-1/2" src="/Frame.png" alt="logo" />
          <h3 className="font-semibold">Shadient.co</h3>
        </Link>
      </div>
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