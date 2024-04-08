import BtnSession from "./BtnSession";

const Perfil = () => {
  const autenticate = false;

  if (!autenticate) {
    return (
      <div>
        <BtnSession />
      </div>
    );
  } else {
    return <div className="p-2">Bienvenido Usuario</div>;
  }
};

export default Perfil;
