// Card.jsx

import React from "react";

const Card = ({ image, title, location, price, rating }) => {
  return (
    <div className="h-[28rem] w-[18rem] max-w-sm rounded-3xl overflow-hidden shadow-lg transform hover:shadow-2xl transition duration-300">
      <div className="relative overflow-hidden">
        <img
          className="w-full h-64 object-cover transform transition-transform duration-300 ease-in-out hover:scale-110"
          src={image}
          alt={title}
        />
      </div>
      <div className="px-4 py-4">
        <div className="font-bold text-lg mb-2">{title}</div>
        <p className="text-gray-600 text-sm">{location}</p>
        <div className="mt-2 flex justify-between items-center">
          <span className="text-red-500 font-semibold">${price}</span>
          <div className="flex items-center">
            <span className="text-sm text-gray-600 mr-1">{rating}</span>
            <svg
              className="w-4 h-4 text-red-500 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.425 8.332 1.209-6.05 5.889 1.428 8.307-7.378-3.878-7.378 3.878 1.428-8.307-6.05-5.889 8.332-1.209z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
