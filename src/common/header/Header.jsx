import { useState } from "react";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import Perfil from "./Perfil";
import Menu from "../../assets/iconos/menu-ico.png";
import Draco from "../../assets/iconos/draco-ico.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="w-full bg-sky-950 p-4 text-white flex justify-between items-center">
        <button className="w-8 sm:hidden" onClick={handleOpen}>
          <img className="w-all" src={Menu} alt="Icono de Menu" />
        </button>

        <Link to="/" className="">
          <div className="w-8 bg-white rounded-full">
            <img className="w-auto" src={Draco} alt="Icono dragon" />
          </div>
        </Link>

        <div className="hidden sm:block">
          <NavBar isOpen={isOpen} setOpen={handleOpen} />
        </div>

        <div className="hidden sm:block">
          <Perfil />
        </div>
      </div>

      <div className="text-white sm:hidden">
        <NavBar isOpen={isOpen} setOpen={handleOpen} />
      </div>
    </div>
  );
};

export default Header;
