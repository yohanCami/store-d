import { cr1, cr2, cr3, cr4 } from "./index";

const GeneralProducts = () => {
  const products = [
    {
      img: cr1,
      name: "Camara de Energia Solar",
      price: 199.999,
      color: "White",
    },

    {
      img: cr2,
      name: "Camara de Energia Solar",
      price: 199.999,
      color: "Black",
    },

    {
      img: cr3,
      name: "Camara de Energia Solar",
      price: 199.999,
      color: "Green",
    },

    {
      img: cr4,
      name: "Camara de Energia Solar",
      price: 199.999,
      color: "White",
    },

    {
      img: cr2,
      name: "Camara de Energia Solar",
      price: 199.999,
      color: "Black",
    },

    {
      img: cr4,
      name: "Camara de Energia Solar",
      price: 199.999,
      color: "White",
    },
  ];

  return (
    <div className="sm:w-11/12 flex flex-wrap justify-evenly gap-x-1 gap-y-5">
      {products.map((product, index) => (
        <div
          key={index}
          className="w-2/5 sm:w-3/12 bg-white border border-solid shadow rounded overflow-hidden"
        >
          <div>
            <img src={product.img} alt={product.name} />
          </div>

          <div className="p-4">
            <div className="font-bold text-xl">{product.name}</div>

            <div className="font-semibold">{product.price}</div>
          </div>

          <div className="p-4 text-gray-500">{product.color}</div>
        </div>
      ))}
    </div>
  );
};

export default GeneralProducts;
