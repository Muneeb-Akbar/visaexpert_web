import React, { useState, useEffect } from "react";
import img from "../../assets/images/image 1.png";
import img3 from "../../assets/images/crousals/img3.png";
import img1 from "../../assets/images/crousals/img1.jpg";
import img2 from "../../assets/images/crousals/img2.jpg";
import img4 from "../../assets/images/crousals/img4.jpg";

function Banner2() {
  const slides = [
    { id: 2, image: img1 },
    { id: 3, image: img2 },
    { id: 4, image: img4 },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Automatically change slide every 3 seconds
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 3000); // 3000ms = 3 seconds
    return () => clearInterval(slideInterval); // Cleanup interval on component unmount
  }, [currentSlide]);

  return (
    <div className="px-6 md:px-[6vw] flex gap-3 mt-24  md:mt-0">
      <div className="left">
        <img src={img3} className="hidden md:block md:w-full md:h-full rounded-lg object-fill" alt="" />
      </div>

      <div className="right">
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden group">
          {/* Carousel container */}
          <div
            className="flex transition-transform ease-out duration-500"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className="w-full flex-shrink-0 flex justify-center items-center"
              >
                <img
                  src={slide.image}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-auto max-h-[30rem] object-contain rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Left and Right Arrows - Initially hidden, only show on hover */}
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-400 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={prevSlide}
          >
            &#8592;
          </button>
          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-400 text-white px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            onClick={nextSlide}
          >
            &#8594;
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full ${
                  currentSlide === index ? "bg-gray-800" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner2;
