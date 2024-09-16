import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Button() {
  return (
    <Link to={"/service_list"}>
      <div className="bg-[#ffffff] opacity-70 cursor-pointer hover:bg-[#313131] hover:text-white shadow-black shadow-2xl p-3 rounded-full">
        <IoIosArrowRoundForward className="text-3xl" />
      </div>
    </Link>
  );
}

export default Button;
