import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decreaseQuantity,
  deleteFromSaveList,
  increaseQuantity,
} from "../redux/feactures/saveSlice";
import { FaXmark } from "react-icons/fa6";
import RemoveCart from "../model/RemoveCart";
import toast from "react-hot-toast";

const Cart = ({ cart }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(cart.id));
  };

  const handleDecrease = () => {
    if (cart.quantity > 1) {
      dispatch(decreaseQuantity(cart.id));
    }
  };

  const openModal = () => {
    setIsOpen((prev) => !prev);
  };

  const handleRemove = () => {
    dispatch(deleteFromSaveList(cart.id));
    toast.error("Successfully remove from Cart.");
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative border border-gray-300 rounded-md shadow-md p-4 grid grid-cols-6 mb-4">
      <div
        onClick={openModal}
        className=" absolute p-2 rounded-full shadow-md bg-red-500 text-white hover:bg-red-700 top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
      >
        <FaXmark />
      </div>
      <div className=" col-span-1s">
        <img
          src={cart.image}
          alt=""
          className=" h-32 rounded-md object-contain"
        />
      </div>
      <div className=" col-span-3 flex flex-col items-start justify-center ml-4">
        <p>{cart.title}</p>
        <p>Price: ( {cart.price} )</p>
      </div>
      <div className=" col-span-1 flex items-center">
        <button
          onClick={handleDecrease}
          className=" w-8 h-8 border border-gray-400 shadow-md rounded-md hover:bg-gray-200"
        >
          -
        </button>
        <span className="mx-2">{cart.quantity}</span>
        <button
          onClick={handleIncrease}
          className="w-8 h-8 border border-gray-400 shadow-md rounded-md hover:bg-gray-200"
        >
          +
        </button>
      </div>
      <div className=" col-span-1 flex items-center">
        <p className=" text-2xl font-semibold">
          $ {(cart.price * cart.quantity).toFixed(2)}
        </p>
      </div>
      {isOpen && <RemoveCart onCancel={openModal} onSuccess={handleRemove} />}
    </div>
  );
};

export default Cart;
