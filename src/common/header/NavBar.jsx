import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Perfil from "./Perfil";

const NavBar = ({ isOpen, setOpen }) => {
  const navBarItems = [
    {
      name: "Productos",
      ruta: "#",
    },
    {
      name: "Servicios",
      ruta: "#",
    },
    {
      name: "Domicilios",
      ruta: "#",
    },
    {
      name: "Sobre Nosotros",
      ruta: "#",
    },
  ];

  return (
    <div
      className={
        isOpen
          ? "w-full sm:w-all h-full bg-sky-950 p-4 sm:p-0 fixed sm:relative top-0 sm:top-0 transition-all ease-in-out delay-150 z-10"
          : "w-full sm:w-all h-full bg-sky-950 p-4 sm:p-0 fixed sm:relative -top-full sm:top-0 transition-all ease-in-out delay-150 z-10"
      }
    >
      <button className="sm:hidden" onClick={setOpen}>
        Cerrar
      </button>
      <ul className="sm:flex">
        {navBarItems.map((item, index) => (
          <Link key={index} onClick={setOpen} to={item.ruta}>
            <li className="w-all hover:text-sky-300 sm:ml-6 py-4 sm:py-0 border-b-2 sm:border-0 border-white">
              {item.name}
            </li>
          </Link>
        ))}
      </ul>

      <div className="sm:hidden w-full mt-6 flex justify-center">
        <Perfil />
      </div>
    </div>
  );
};

NavBar.propTypes = {
  isOpen: PropTypes.bool.isRequired, // Propiedad booleana requerida
  setOpen: PropTypes.func, // Propiedad función opcional
};

export default NavBar;
