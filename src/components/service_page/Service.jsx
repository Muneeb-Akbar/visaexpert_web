import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";
import React, { useState } from "react";
import logo from "../../assets/services/service.png";
import t1 from "../../assets/services/t1.png";
import t2 from "../../assets/services/t2.png";
import t3 from "../../assets/services/t3.png";
import t4 from "../../assets/services/t4.png";
import t5 from "../../assets/services/t5.png";
import Card from "../home_page/Card";
import { Link } from "react-router-dom";
import pic from "../../assets/home_page/rectangle-6-1@2x.png";
import Button from "../icons/Button";

function Service() {
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
    <>
      <Navbar />
      <div id="container" className="px-6 md:px-[6vw]">
        <div id="banner" className="flex items-center flex-col md:flex-row">
          <div>
            <p className="flex flex-col mt-6">
              <p className="flex flex-col md:flex-row gap-2 f">
                <span className=" text-3xl font-inter text-blue-theme font-semibold md:text-4xl">
                  GET GREATEST
                </span>
                <span className="text-red-theme text-3xl font-inter font-semibold md:text-4xl">
                  SERVICE
                </span>
              </p>
              <span className="text-3xl text-blue-theme font-inter font-semibold md:text-4xl">
                FROM OUR COMPANY
              </span>
            </p>
            <p className="text-gray-500 mb-6 mt-8 md:text-base">
              We always make our customer happy by providing as many choices as
              possible. At Visa Expert, we offer specialized B2B services for
              travel agents, providing tailored visa solutions to support your
              clients' travel plans. Partner with us for seamless visa
              processing and expert guidance, ensuring your business delivers
              the best travel experience."
            </p>
          </div>
          <div>
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div
            id="trust"
            className="flex gap-11 md:gap-28 flex-wrap justify-center items-center"
          >
            <div className="flex flex-col  items-center w-28 h-auto">
              <div className="w-24 h-28 flex justify-center items-center">
                <img src={t1} alt="" />
              </div>
              <span>Trust</span>
            </div>
            <div className="flex flex-col items-center w-28 h-auto">
              <div className="w-16 h-28 flex justify-center items-center">
                <img src={t3} alt="" />
              </div>
              <span>100% Secure</span>
            </div>
            <div className="flex flex-col items-center w-28 h-auto">
              <div className="w-28 h-28 flex justify-center items-center">
                <img src={t4} alt="" />
              </div>
              <span>Global Reach</span>
            </div>
            <div className="flex flex-col items-center w-28 h-auto">
              <div className="w-28 h-28 flex justify-center items-center">
                <img src={t5} alt="" />
              </div>
              <span>Trust</span>
            </div>
            <div className="flex flex-col items-center w-28 h-auto">
              <div className="w-16 h-28 flex justify-center items-center">
                <img src={t2} alt="" />
              </div>
              <span>Trust</span>
            </div>
          </div>
        </div>
        <div>
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
      </div>

      <Footer />
    </>
  );
}

export default Service;
