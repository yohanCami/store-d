import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { cr1, cr2, cr3, cr4 } from "./index";
import { Link } from "react-router-dom";

const Carrousel = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const images = [
    {
      name: "cr1",
      img: cr1,
      link: "/#",
    },

    {
      name: "cr2",
      img: cr2,
      link: "/#",
    },
    {
      name: "cr3",
      img: cr3,
      link: "/#",
    },

    {
      name: "cr4",
      img: cr4,
      link: "/#",
    },
  ];

  return (
    <div className="w-full h-auto bg-sky-600 relative">
      <Slider {...settings}>
        {images.map((img, index) => (
          <Link key={index} to={img.link}>
            <div className="w-full h-auto px-3 flex justify-center">
              <img src={img.img} alt={img.name} />
            </div>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Carrousel;
