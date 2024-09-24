import React from "react";

const CategoryBtn = ({ name, current, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`text-nowrap px-6 py-2 rounded-md shadow-md shadow-purple-500 hover:bg-blue-600 hover:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 ${
        current ? "bg-blue-500 text-white" : "bg-white text-black"
      }`}
    >
      {name}
    </button>
  );
};

export default CategoryBtn;
