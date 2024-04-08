import Carrousel from "../common/home/Carrousel";
import GeneralProducts from "../common/home/GeneralProducts";

const Home = () => {
  return (
    <div className="w-full m-auto flex flex-col items-center  justify-center">
      {/* <p>Este es el home</p> */}

      <div className="w-full p-7 sm:p-14">
        <h2 className="text-center sm:font-bold text-xl sm:text-4xl">
          ¡Productos destacados!
        </h2>
      </div>
      <Carrousel />

      <div className="w-full p-7 sm:p-14">
        <h2 className="text-center sm:font-bold text-xl sm:text-4xl">
          Nuestros Productos
        </h2>
      </div>

      <GeneralProducts />
    </div>
  );
};

export default Home;
