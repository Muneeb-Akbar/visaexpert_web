import React from "react";
import Navbar from "../navbar/Navbar";
import Footer from "../footer/Footer";
import Card from "../home_page/Card";
import { Link } from "react-router-dom";
import pic from "../../assets/home_page/rectangle-6-1@2x.png";

function ServicesList() {
  const cardData = {
    image: pic,
    title: "Ocean with full of Colors",
    location: "Maldives",
    price: "24.99",
    rating: "4.5",
  };
  return (
    <div>
      <Navbar />
      <div className="px-6 md:px-[6vw] mt-6">
        <div className="flex flex-col justify-center items-center">
        <div className=" md:w-[50%]">
            <input
              placeholder="Search"
              className="bg-[#F1F1F1] w-full text-lg p-3 rounded-full px-6 mt-4"
              type="text"
            />
          </div>
          <div className="flex flex-row md:gap-2 mt-6">
            <h1 className="text-4xl font-inter font-semibold md:text-4xl">
              Get Your Visa on Time with
              <span className="text-red-theme font-bold"> Visa </span>
              <span className="text-blue-theme font-bold"> Expert</span>
            </h1>
          </div>

         
        </div>
        <div className="mt-14 md:mt-28 flex justify-center md:justify-evenly items-center flex-wrap gap-6">
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
          <Link to={"/application"}>
            <Card
              image={cardData.image}
              title={cardData.title}
              location={cardData.location}
              price={cardData.price}
              rating={cardData.rating}
            />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ServicesList;
