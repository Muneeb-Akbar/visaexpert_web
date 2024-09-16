import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import pic from "../../assets/home_page/rectangle-6-1@2x.png";
import Button from "../icons/Button";

function Services() {
  const services = [
    {
      id: "visa",
      title: "Visa",
      cards: [
        {
          image: pic,
          title: "Ocean with full of Colors",
          location: "Maldives",
          price: "20.99",
          rating: "4.5",
        },
        {
          image: pic,
          title: "Mountain Adventure",
          location: "Nepal",
          price: "35.99",
          rating: "4.7",
        },  {
          image: pic,
          title: "Ocean with full of Colors",
          location: "Maldives",
          price: "20.99",
          rating: "4.5",
        },
        {
          image: pic,
          title: "Mountain Adventure",
          location: "Nepal",
          price: "35.99",
          rating: "4.7",
        },
        // Add more cards as needed
      ],
    },
    {
      id: "ticket",
      title: "Ticket",
      cards: [
        {
          image: pic,
          title: "Flight to Paris",
          location: "France",
          price: "150.00",
          rating: "4.8",
        },
        {
          image: pic,
          title: "Trip to Tokyo",
          location: "Japan",
          price: "200.00",
          rating: "4.9",
        },  {
          image: pic,
          title: "Flight to Paris",
          location: "France",
          price: "150.00",
          rating: "4.8",
        },
        {
          image: pic,
          title: "Trip to Tokyo",
          location: "Japan",
          price: "200.00",
          rating: "4.9",
        },
        // Add more cards as needed
      ],
    },
    {
      id: "hotel",
      title: "Hotel",
      cards: [
        {
          image: pic,
          title: "Luxury Hotel Stay",
          location: "Dubai",
          price: "500.00",
          rating: "4.9",
        },
        {
          image: pic,
          title: "Beachfront Villa",
          location: "Bali",
          price: "350.00",
          rating: "4.7",
        },  {
          image: pic,
          title: "Ocean with full of Colors",
          location: "Maldives",
          price: "20.99",
          rating: "4.5",
        },
        {
          image: pic,
          title: "Mountain Adventure",
          location: "Nepal",
          price: "35.99",
          rating: "4.7",
        },
        // Add more cards as needed
      ],
    },
  ];

  return (
    <div className="px-6 md:px-[6vw] mt-24">
      <div className="text-left">
        <h1 className="text-red-500 font-semibold text-lg">SERVICES</h1>
        <h2 className="text-3xl font-bold mt-2 mb-4">
          Our top value <br />
          categories for you
        </h2>
      </div>

      {services.map((service) => (
        <div key={service.id} id={service.id} className="mt-16">
          <span className="text-4xl font-inter font-semibold md:text-4xl text-[#1D1D5D]">
            {service.title}
          </span>
          <div className="relative flex justify-center gap-7 items-center md:justify-evenly md:gap-0  flex-wrap mt-8">
            {service.cards.map((card, index) => (
              <Link key={index} to={"/application"}>
                <Card
                  image={card.image}
                  title={card.title}
                  location={card.location}
                  price={card.price}
                  rating={card.rating}
                />
              </Link>
            ))}
            <div className="absolute hidden md:block md:right-8 md:top-[40%]">
              <Button />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;
