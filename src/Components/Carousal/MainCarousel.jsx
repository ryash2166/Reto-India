import React from "react";
import Slider from "react-slick";
import slider1 from "../../assets/slider1.jpeg";
import slider2 from "../../assets/slider2.jpeg";
import slider3 from "../../assets/slider3.jpeg";

function MainCarousel() {
  const images = [slider1, slider2, slider3, slider1, slider2, slider3, slider1, slider2, slider3];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };

  return (
    <div className="mt-32 w-full max-w-[926.4px] max-lg:w-10/12 mx-auto">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index} className="h-[325.605px] max-md:h-auto pl-2">
            <img
              src={image}
              alt={`Slider ${index + 1}`}
              className="h-full object-cover rounded-[20px]"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default MainCarousel;
