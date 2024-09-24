import React from "react";
import Cart from "./Cart";
import { useSelector } from "react-redux";
import CartPriceTotal from "./CartPriceTotal";

const CartSection = () => {
  const carts = useSelector((state) => state.saveList.saveListArr);
  const totalPrice = carts.reduce(
    (acc, product) => acc + product.price * (product.quantity || 1),
    0
  );
  console.log(carts);

  // console.log(totalPrice);

  return (
    <>
      {carts.length === 0 ? (
        <p className=" text-center text-5xl font-bold">No Saved List</p>
      ) : (
        <div className=" w-full">
          <div className=" h-[480px] overflow-y-scroll scrollbar-hide p-4">
            {carts.map((product, id) => (
              <Cart key={id} cart={product} />
            ))}
          </div>
          <hr className=" w-full border-2 rounded-lg bg-gray-500" />
          <CartPriceTotal totalPrice={totalPrice} />
        </div>
      )}
    </>
  );
};

export default CartSection;
