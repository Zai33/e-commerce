import React from "react";
import Container from "./Container";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const cartCount = useSelector((state) => state.saveList.saveListArr.length);

  return (
    <header className="p-4">
      <Container>
        <div className=" flex items-center justify-between">
          <Link to={"/"} className=" text-3xl font-bold relative">
            Online Shop
          </Link>
          <Link
            to={"/my-cart"}
            className="relative px-4 py-2 border-2 border-blue-500 rounded-md shadow-sm hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out"
          >
            My Cart
            {cartCount > 0 && (
              <div className="bg-red-500 p-1 rounded-full absolute w-5 h-5 flex items-center justify-center text-white text-xs top-0 right-0 transform translate-x-1/2 -translate-y-1/2">
                {cartCount}
              </div>
            )}
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
