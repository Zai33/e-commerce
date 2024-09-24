import React from "react";
import { Link } from "react-router-dom";

const BreadCrump = ({ currentPage }) => {
  return (
    <div className=" w-full flex gap-3 mb-4">
      <Link to={"/"} className=" text-gray-500">
        Home
      </Link>
      <span className=" text-gray-500">/</span>
      <p>{currentPage}</p>
    </div>
  );
};

export default BreadCrump;
