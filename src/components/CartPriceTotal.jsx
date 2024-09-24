import React from "react";

const CartPriceTotal = ({ totalPrice }) => {
  const taxRate = 0.05;
  const tax = (totalPrice * taxRate).toFixed(2);
  const netTotal = (parseFloat(totalPrice) + parseFloat(tax)).toFixed(2);

  return (
    <div className="rounded-lg shadow-lg p-4 bg-white flex items-center justify-evenly gap-4 w-full mx-auto mt-1">
      <div className="flex items-center gap-2">
        <p className="text-2xl font-bold text-gray-800">Total :</p>
        <p className="text-2xl font-semibold text-blue-500">
          $ {totalPrice.toFixed(2)}
        </p>
      </div>
      <div className=" flex items-center gap-2">
        <p className="text-2xl font-bold text-gray-800">Tax(5%) :</p>
        <p className="text-2xl font-semibold text-blue-500">$ {tax}</p>
      </div>
      <div className=" flex items-center gap-2">
        <p className="text-2xl font-bold text-gray-800">Net Total :</p>
        <p className="text-2xl font-semibold text-blue-500">$ {netTotal}</p>
      </div>
      <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition-transform transform hover:scale-105">
        Order Now
      </button>
    </div>
  );
};

export default CartPriceTotal;
