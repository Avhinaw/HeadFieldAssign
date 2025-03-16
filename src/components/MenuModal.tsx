import { useRef } from "react";
import gsap from "gsap";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";

interface MenuModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuModal: React.FC<MenuModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (isOpen) {
      gsap.fromTo(
        modalRef.current,
        { y: "100%", opacity: 0 },
        { y: "0%", opacity: 1, duration: 1.5, ease: "power3.out" }
      );
    } else {
      gsap.to(modalRef.current, { y: "100%", opacity: 0, duration: 1.5, ease: "power3.in" });
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      className={`fixed top-20 left-10 rounded-4xl w-[80vw] h-[80vh] bg-[#38347d50] opacity-0 backdrop-blur-3xl shadow-3xl flex flex-col items-center justify-center text-white text-3xl font-bold transition-all ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="space-y-6 flex items-center flex-col">
      <Link to='/'>
        <img src="/Frame.png" alt=""/></Link>
        <Link to='/about'>Company</Link>
        <Link to='/services'>Services</Link>
        <Link to='/resources'>Resources</Link>
        <Link to='/contact'>Contact</Link>
      </div>
      <button
        onClick={onClose}
        className="absolute bottom-10 bg-white text-black px-4 py-2 rounded-full"
      >
        ✖
      </button>
    </div>
  );
};

export default MenuModal;