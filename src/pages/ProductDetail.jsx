import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "../components/Container";
import Rating from "../components/Rating";
import BreadCrump from "../components/BreadCrump";
import { useDispatch, useSelector } from "react-redux";
import {
  addToSaveList,
  deleteFromSaveList,
} from "../redux/feactures/saveSlice";
import { CircularProgress } from "@mui/material";
import toast from "react-hot-toast";

const ProductDetail = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const saveList = useSelector((state) => state.saveList.saveListArr);
  const isSavedProducts = saveList.some(
    (item) => item.id.toString() === productId
  );

  console.log(saveList);
  console.log(isSavedProducts);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://fakestoreapi.com/products/${productId}`
        );
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [productId]);

  const handleAdd = () => {
    const { id, title, price, image } = product;
    if (isSavedProducts) {
      dispatch(deleteFromSaveList(id));
      toast.error("Remove from Cart");
    } else {
      dispatch(addToSaveList({ id, title, price, image }));
      toast.success("Success to add Cart");
    }
  };

  const buttonStyle = isSavedProducts
    ? "bg-green-500 text-white hover:bg-green-600"
    : "bg-blue-500 text-white hover:bg-blue-600";

  return (
    <Container>
      <BreadCrump currentPage="Product-Detail" />
      {loading ? (
        <div className=" flex items-center justify-center mx-auto">
          <CircularProgress />
        </div>
      ) : (
        <>
          <div className=" border border-gray-300 rounded-md shadow-md p-8">
            <div className="grid grid-cols-2 gap-4">
              <div className=" col-span-1 max-h-screen flex items-center justify-center">
                <img
                  src={product.image}
                  alt=""
                  className=" w-1/2 block mx-auto object-contain"
                />
              </div>
              <div className=" col-span-1 flex flex-col items-start justify-center gap-8">
                <p className=" text-2xl font-bold">{product.title}</p>
                <p className="px-4 py-2 rounded-md shadow-md inline-block bg-gray-300">
                  {product.category}
                </p>
                <p>{product.description}</p>
                <Rating rating={product.rating.rate} />
                <div className=" w-full flex items-center justify-between">
                  <p>Price : ( {product.price} ) $</p>
                  <button
                    onClick={handleAdd}
                    className={` px-4 py-2 rounded-md shadow-md bg-blue-500 text-white hover:bg-blue-600 ${buttonStyle}`}
                  >
                    {isSavedProducts ? "Added" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Container>
  );
};

export default ProductDetail;
