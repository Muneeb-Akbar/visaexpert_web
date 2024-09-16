import React from "react";
import Card from "./Card";
import { Link } from "react-router-dom";
import pic from "../../assets/home_page/rectangle-6-1@2x.png";
import Button from "../icons/Button";

function Services() {
  const cardData = {
    image: pic,
    title: "Ocean with full of Colors",
    location: "Maldives",
    price: "20.99",
    rating: "4.5",
  };
  return (
    <>
      <div className="px-6 md:px-[6vw] mt-24">
        <div className="text-left">
          <h1 className="text-red-500 font-semibold text-lg">SERVICES</h1>
          <h2 className="text-3xl font-bold mt-2 mb-4">
            Our top value <br />
            categories for you
          </h2>
        </div>
        <div className="">
          <div>
            <div id="visa" className="mt-16">
              <span className="text-4xl font-inter font-semibold md:text-4xl text-[#1D1D5D] ">
                Visa
              </span>
              <div
                id="card "
                className=" flex justify-center items-center md:justify-normal gap-5 flex-wrap mt-8"
              >
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <div className="absolute right-14">
                  <Button />
                </div>
              </div>
            </div>
            <div id="ticket" className="mt-16">
              <span className="text-4xl font-inter font-semibold md:text-4xl text-[#1D1D5D] ">
                Ticket
              </span>
              <div
                id="card "
                className="flex justify-center items-center md:justify-normal gap-5 flex-wrap mt-8"
              >
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <div className="absolute right-14">
                  <Button />
                </div>
              </div>
            </div>
            <div id="hotel" className="mt-16">
              <span className="text-4xl font-inter font-semibold md:text-4xl text-[#1D1D5D] ">
                Hotel
              </span>
              <div
                id="card "
                className="flex justify-center items-center md:justify-normal gap-5 flex-wrap mt-8"
              >
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <Link to={"/application"}>
                  <Card
                    image={cardData.image}
                    title={cardData.title}
                    location={cardData.location}
                    price={cardData.price}
                    rating={cardData.rating}
                  />
                </Link>
                <div className="absolute right-14">
                  <Button />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
}

export default Services;
