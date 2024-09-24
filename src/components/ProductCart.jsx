import React from "react";
import Rating from "./Rating";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSaveList,
  deleteFromSaveList,
} from "../redux/feactures/saveSlice";
import toast from "react-hot-toast";

const ProductCart = ({
  product: {
    id,
    title,
    price,
    image,
    rating: { rate },
  },
}) => {
  const dispatch = useDispatch();
  const saveList = useSelector((state) => state.saveList.saveListArr);
  const isAdded = saveList.some((item) => item.id === id);

  const handleAddRemoveFromCart = (e) => {
    e.stopPropagation();
    e.preventDefault();

    if (isAdded) {
      dispatch(deleteFromSaveList(id));
      toast.error("Remove from Cart");
    } else {
      dispatch(addToSaveList({ id, title, price, image }));
      toast.success("Success to add Cart");
    }
  };

  const buttonStyle = isAdded
    ? "bg-green-500 text-white hover:bg-green-600"
    : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <Link
      to={`/product-detail/${id}`}
      className="relative flex flex-col justify-between border border-gray-300 rounded-md shadow-md p-4 hover:shadow-lg transition-shadow duration-300 group"
    >
      <div className="flex justify-center mb-4">
        <img
          src={image}
          alt={title}
          className="w-32 h-32 object-contain rounded-md"
          loading="lazy"
        />
      </div>
      <div className="flex-1">
        <p className="font-bold text-lg mb-2 line-clamp-2">{title}</p>
      </div>
      <Rating rating={rate} className="mt-auto" />
      <div className="flex justify-between items-center mt-auto">
        <p className="text-sm font-semibold">Price ( {price} )$</p>
        <button
          onClick={handleAddRemoveFromCart}
          className={`absolute bottom-4 right-4 px-4 py-2 rounded-md shadow-md transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-in-out ${buttonStyle}`}
        >
          {isAdded ? "Added" : "Add Cart"}
        </button>
      </div>
    </Link>
  );
};

export default ProductCart;
